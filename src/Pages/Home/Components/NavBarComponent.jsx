import React from 'react'
import Logo from '../../../assets/Logo/main4.png'
import './nav-index.css'
import './MediaQuries.css'
export default function NavBarComponent() {
  const Photo = localStorage.getItem("PHOTO");



  return (
    <>
      <div className="nav-bar-container">
        <div className="nav-bar">
          <div className="height-element">
            
          </div>
          <div className="lists">
            <ul>
              <div className="logo-image">
                <li><img src={Logo}/></li>
              </div>
              <div className="home">
                <li><i class='bx bxs-home'></i></li>
              </div>
              <div className="search">
                <li><i class='bx bx-search-alt-2'></i></li>
              </div>
              <div className="notification">
                <li><i class='bx bxs-bell'></i></li>
              </div>
              <div className="email">
                <li><i class='bx bxs-envelope' ></i></li>
              </div>
              <div className="list">
                <li><i class='bx bx-list-ul'></i></li>
              </div>
              <div className="user">
                <li><i class='bx bxs-user'></i></li>
              </div>
              <div className="more">
                <li><i class='bx bx-dots-horizontal-rounded'></i></li>
              </div>
              <div className="user-image">
                <li><img src={Photo}/></li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
