import React from 'react'
import './Header.css'
import CTA from './CTA'
import img from "../../Asset/img.jpg";
import HeaderSocial from './HeaderSocial';  
function Header() {
  return (
    <header><div id='home' className="container header_container" >
      <h5>Hello I'm</h5>
      <h1>Moshina Binte Asad</h1>
      <h5 className="text-light">Data Analysis Expert & Data Science Enthusiast</h5>
      <CTA/>
      <HeaderSocial/>
       <div className="img">
         <img src={img} alt='img'/>
       </div>
       <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div></header> 
  )
}

export default Header