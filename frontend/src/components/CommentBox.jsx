import React, { useState } from 'react'
import { addComment } from '../api'

export default function CommentBox({ postId, onAdded }) {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e) {
    e.preventDefault()
    if (!text.trim()) return
    setLoading(true)
    await addComment(postId, text.trim())
    setText('')
    setLoading(false)
    onAdded && onAdded()
  }

  return (
    <form onSubmit={submit} style={{ marginTop:8 }}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write a comment..."
        style={{ width:'100%', padding:6 }}
      />
      <div style={{ marginTop:6 }}>
        <button type="submit" disabled={loading}>{loading ? 'Posting...' : 'Comment'}</button>
      </div>
    </form>
  )
}
