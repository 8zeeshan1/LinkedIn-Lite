import React, { useState } from 'react'
import { createPostWithImage } from '../api'

export default function CreatePost({ onPosted }) {
  const [text, setText] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setErr('')
    if (!text && !file) { setErr('Add text or image'); return }

    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('text', text)
      if (file) formData.append('image', file)
      await createPostWithImage(formData)
      setText('')
      setFile(null)
      onPosted && onPosted()
    } catch {
      setErr('Failed to post')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom:16, background:'#fff', padding:12, borderRadius:8 }}>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="What's on your mind?"
        rows={3}
        style={{ width:'100%', padding:8 }}
      />
      <div style={{ marginTop:8 }}>
        <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} />
      </div>
      <button type="submit" disabled={loading} style={{ marginTop:8, padding:'8px 12px' }}>
        {loading ? 'Posting...' : 'Post'}
      </button>
      {err && <div style={{ color:'red', marginTop:8 }}>{err}</div>}
    </form>
  )
}
