import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate=useNavigate()
  const {user}=useAuth()
    useEffect(()=>{
      user && user.isLoggedIn && user.isAccountVerified && navigate("/home")
    },[user.isLoggedIn, user])
  return (
    <div>LandingPage</div>
  )
}

export default LandingPage