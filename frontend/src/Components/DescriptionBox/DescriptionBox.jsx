import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox_nav">
            <div className="descriptionbox_nav_box">
                Description
            </div>
            <div className="descriptionbox_nav_box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox_description">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis obcaecati maiores eum assumenda dolorem non totam, molestiae amet libero omnis deleniti ea? Enim explicabo, quos accusantium deserunt et deleniti incidunt?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit eligendi incidunt, reprehe.
            </p>
        </div>
    </div>
  )
}
