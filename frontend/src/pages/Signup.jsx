import React, { useState } from 'react'
import { signup } from '../api'
import { useNavigate } from 'react-router-dom'

export default function Signup({ onSignup }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const nav = useNavigate()

  async function submit(e) {
    e.preventDefault()
    setErr('')
    const res = await signup(name, email, password)
    if (res.token) {
      localStorage.setItem('token', res.token)
      onSignup(res.user)
      nav('/')
    } else {
      setErr(res.message || 'Signup failed')
    }
  }

  return (
    <div style={{ maxWidth:420, margin:'30px auto', background:'#fff', padding:20, borderRadius:8 }}>
      <h2>Create account</h2>
      <form onSubmit={submit}>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" style={{ width:'100%', padding:8, marginBottom:8 }} />
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" style={{ width:'100%', padding:8, marginBottom:8 }} />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" style={{ width:'100%', padding:8, marginBottom:8 }} />
        {err && <div style={{ color:'red', marginBottom:8 }}>{err}</div>}
        <button type="submit" style={{ padding:'10px 14px' }}>Signup</button>
      </form>
    </div>
  )
}
