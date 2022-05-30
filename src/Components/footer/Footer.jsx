import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer=() => {
  return (
    <footer>
      <a href='' className='footer_logo'>Portfolio</a>
     <ul className="permalink">
       <li><a href='#'>Home</a></li>
       <li><a href='#'>About</a></li>
       <li><a href='#'>Experience</a></li>
       <li><a href='#'>Portfolio</a></li>
       <li><a href='#'>Contact</a></li>
     </ul>

     <div className='footer_socials'>
       <a href='https://facebook.com'><BsFacebook/></a>
       <a href='https://linkedin.com'><BsLinkedin/></a>
       <a href='https://twitter.com'><BsTwitter/></a>
     </div>
    </footer>
    
  )
}

export default Footer