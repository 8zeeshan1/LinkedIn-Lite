import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ user, onLogout }) {
  return (
    <nav style={{
      display:'flex', justifyContent:'space-between', alignItems:'center',
      padding:'12px 24px', borderBottom:'1px solid #ddd', background:'#fff'
    }}>
      <Link to="/" style={{ fontWeight:700 }}>LinkedIn-Lite</Link>
      <div>
        {user ? (
          <>
            <span style={{ marginRight:12 }}>Hi, {user.name}</span>
            <button onClick={onLogout} style={{ padding:'6px 10px', borderRadius:6 }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight:12 }}>Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  )
}
