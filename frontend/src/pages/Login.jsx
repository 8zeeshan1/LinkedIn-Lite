import React, { useState } from 'react'
import { login } from '../api'
import { useNavigate } from 'react-router-dom'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const nav = useNavigate()

  async function submit(e) {
    e.preventDefault()
    setErr('')
    const res = await login(email, password)
    if (res.token) {
      localStorage.setItem('token', res.token)
      onLogin(res.user)
      nav('/')
    } else {
      setErr(res.message || 'Login failed')
    }
  }

  return (
    <div style={{ maxWidth:420, margin:'30px auto', background:'#fff', padding:20, borderRadius:8 }}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" style={{ width:'100%', padding:8, marginBottom:8 }} />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" style={{ width:'100%', padding:8, marginBottom:8 }} />
        {err && <div style={{ color:'red', marginBottom:8 }}>{err}</div>}
        <button type="submit" style={{ padding:'10px 14px' }}>Login</button>
      </form>
    </div>
  )
}
