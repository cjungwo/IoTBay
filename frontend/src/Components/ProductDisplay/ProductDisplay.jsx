import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay_left">
            <div className="productdisplay_img_list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay_img">
                <img className='productdisplay_main_img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay_right">
            <h1>{product.name}</h1>
            <div className="productdisplay_right_star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay_right_prices">
                <div className="productdisplay_right_price_old">
                    ${product.old_price}
                </div>
                <div className="productdisplay_right_price_new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay_right_description">
            <span>Description : </span>A lightweight, usually knitted, pullover 
            </div>
            <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
            <div className="productdisplay_right_category">
                <p><span>Category : </span>IoT, RaspberryPi, Sensor</p>
                <p><span>Tags : </span>Tech, Latest</p>
            </div>
        </div>
    </div>
  )
}
