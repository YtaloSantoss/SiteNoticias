import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import "./Menu.css"
//incons 
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
//<a href="#"><i className="fab fa-twitter"></i></a>
const Menu = () => {
  const [Mobile, setMobile] = useState(false)

  return (
    <>
      <header className="navbar" id='menu'>
        <div className="logo">
          <img src="./Logo.png" alt="logo" />
        </div>
        <h2 className="logo2" >PROPRIÁ ACONTECE</h2>
        <nav className="nav-link">
          <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
            <NavLink to='/' ><li>Notícias </li></NavLink>
            <NavLink to='/sobre' ><li>Sobre </li></NavLink>
            <NavLink to='/contato'  ><li>Contato</li></NavLink>
          </ul>
        </nav>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? < ImCross /> : <FaBars />}
          <span className="mobile-menu">MENU</span>
        </button>
      </header>
    </>
  )
}

export default Menu