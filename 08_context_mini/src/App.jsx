import React from 'react'
import './index.css'
import UserContextProvider from './context/UserContextProvider.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

const App = () => {
  return (
    <UserContextProvider>
      <h1>Hello react from gautam</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App