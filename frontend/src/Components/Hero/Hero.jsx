import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero_left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero_hand_icon">
                    <p>New</p>
                    <img src={hand_icon} alt="hand" />
                </div>
                <p>IoT items</p>
                <p>for Everyone</p>
            </div>
            <div className="hero_latest_btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="arrow" />
            </div>
        </div>
        <div className="hero_right">
            <img src={hero_image} alt="hero" /> {/* change hero image */}
        </div>
    </div>
  )
}
