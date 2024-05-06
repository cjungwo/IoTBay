import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'

export const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav_menu_visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className='nav_logo'>
        <a href='/'>
          <img src={logo} alt="logo" />
          <p>IoTBay</p>
        </a>
      </div>

      <img className='nav_dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="dropdown icon" />
      <ul ref={menuRef} className='nav_menu'>
        <li onClick={() => {setMenu("home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link>{menu === "home"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("about")}}><Link style={{ textDecoration: 'none'}} to='/about'>About</Link>{menu === "about"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/shop'>Shop</Link>{menu === "shop"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("contact")}}><Link style={{ textDecoration: 'none'}} to='/contact'>Contact</Link>{menu === "contact"?<hr/>:<></>}</li>
      </ul>
      <div className='nav_login_cart'>
        {localStorage.getItem('auth-token') ? <button onClick={() => {
          localStorage.removeItem('auth-token');
          window.location.replace("/");
        }}>Logout</button> : <Link style={{ textDecoration: 'none'}} to='/login'><button>Login</button></Link>}
        <Link style={{ textDecoration: 'none'}} to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
        <div className="nav_cart_count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
