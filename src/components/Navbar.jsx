import React from 'react'
import logo from "../assets/pic/logo.png"
import "../style/Header.css"
const Navbar = () => {
  return (
    <>
      <div className='navbar'>
          <div className='logo'>
               <img src={logo} alt='logo'  />
          </div>
      </div>
    </>
  )
}

export default Navbar