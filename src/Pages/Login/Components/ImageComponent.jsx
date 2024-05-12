import React from 'react'
import Logo from '../../../assets/Logo/main4.png'
import './index.css'
export default function ImageComponent() {
  return (
    <>
        <div className="image-container">
            <div className="height-element">
                
            </div>
            <div className="image">
                <img src={Logo}/>
            </div>
        </div>
    </>
 )
}
