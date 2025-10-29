const API = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

export async function signup(name, email, password) {
  const res = await fetch(`${API}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  })
  return res.json()
}

export async function login(email, password) {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  return res.json()
}

export async function fetchPosts() {
  const res = await fetch(`${API}/posts`)
  return res.json()
}

export async function createPostWithImage(formData) {
  const token = localStorage.getItem('token')
  const res = await fetch(`${API}/posts`, {
    method: 'POST',
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: formData
  })
  return res.json()
}

export async function addComment(postId, text) {
  const token = localStorage.getItem('token')
  const res = await fetch(`${API}/posts/${postId}/comments`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  })
  return res.json()
}
