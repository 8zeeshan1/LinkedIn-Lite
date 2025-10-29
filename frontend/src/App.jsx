import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Feed from './pages/Feed.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

export default function App() {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user')
    return stored ? JSON.parse(stored) : null
  })

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user))
    else localStorage.removeItem('user')
  }, [user])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />
      <main style={{ maxWidth: 800, margin: '20px auto', padding: '0 12px' }}>
        <Routes>
          <Route path="/" element={<Feed user={user} />} />
          <Route path="/login" element={!user ? <Login onLogin={setUser} /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user ? <Signup onSignup={setUser} /> : <Navigate to="/" />} />
        </Routes>
      </main>
    </>
  )
}
