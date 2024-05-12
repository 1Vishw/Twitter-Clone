import React from 'react'
import PostComponent from './Components/PostComponent'
import NavBarComponent from './Components/NavBarComponent'
import Trending from './Components/Trending'
import './main.css'
export default function main() {
  return (
    <>
        <div className="container">
            <NavBarComponent>
            </NavBarComponent>
            <PostComponent>
            </PostComponent>
            <Trending>
            </Trending>
        </div>
    </>
  )
}
