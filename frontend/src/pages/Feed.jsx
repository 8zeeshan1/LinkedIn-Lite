import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../api'
import CreatePost from '../components/CreatePost.jsx'
import CommentBox from '../components/CommentBox.jsx'

export default function Feed({ user }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  async function load() {
    setLoading(true)
    const data = await fetchPosts()
    setPosts(Array.isArray(data) ? data : [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  return (
    <div>
      {user ? <CreatePost onPosted={load} /> : <div style={{ marginBottom:16, textAlign:'center' }}>Login to create posts</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        posts.map(p => (
          <article key={p._id} style={{ background:'#fff', border:'1px solid #eee', borderRadius:8, padding:12, marginBottom:12 }}>
            <div style={{ fontWeight:700 }}>{p.authorName}</div>
            <div style={{ color:'#555', fontSize:12 }}>{new Date(p.createdAt).toLocaleString()}</div>
            <p style={{ marginTop:8, whiteSpace:'pre-wrap' }}>{p.text}</p>
{p.imageUrl && (
  <div style={{ display:'flex', justifyContent:'center', marginTop:8 }}>
    <img
      src={p.imageUrl}
      alt=""
      style={{
        maxWidth:'100%',
        width:'100%',
        maxHeight:'350px',
        objectFit:'cover',
        borderRadius:12,
        boxShadow:'0 2px 8px rgba(0,0,0,0.1)'
      }}
    />
  </div>
)}
            <div style={{ marginTop:12 }}>
              {p.comments?.length > 0 && p.comments.map((c, idx) => (
                <div key={idx} style={{ background:'#f9f9f9', borderRadius:6, padding:8, marginTop:6 }}>
                  <strong>{c.authorName}</strong>
                  <span style={{ color:'#555', fontSize:12 }}> • {new Date(c.createdAt).toLocaleString()}</span>
                  <div>{c.text}</div>
                </div>
              ))}
              {user && <CommentBox postId={p._id} onAdded={load} />}
            </div>
          </article>
        ))
      )}
      {!loading && posts.length === 0 && <div>No posts yet.</div>}
    </div>
  )
}
