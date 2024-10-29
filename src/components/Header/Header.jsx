import React from 'react'
import './Header.css'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
   <div className="header">
    <div className="logo">Hepta</div>
    <div className="navbar"><Navbar/></div>
   </div>
   
  )
}

export default Header
