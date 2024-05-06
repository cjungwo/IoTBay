import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_logo">
            <img src={footer_logo} alt="footer logo" />
            <p>IoTBay</p>
        </div>
        <ul className='footer_links'>
            <li><a href="/">Company</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Offices</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
        <div className="footer_social_icon">
            <div className="footer_icons_container">
                <a href="/"><img src={instagram_icon} alt="instagram icon" /></a>
            </div>

            <div className="footer_icons_container">
                <a href="/"><img src={pintester_icon} alt="pintester icon" /></a>
            </div>

            <div className="footer_icons_container">
                <a href="/"><img src={whatsapp_icon} alt="whatsapp icon" /></a>
            </div>
        </div>
        <div className="footer_copyright">
            <hr />
            <p>Copyright &copy; 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}
