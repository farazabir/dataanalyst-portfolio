import React from 'react'
import  './Contact.css';
import {HiOutlineMail} from'react-icons/hi'
import {RiMessengerLine} from'react-icons/ri'
import {RiWhatsappLine} from'react-icons/ri'

const Contact=() => {
  return (
   <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     <div className="container contact_container">
       <div className="contact_options">
         <article className="contact_option">
           <HiOutlineMail className='contact_option_icon'/>
           <h2>Email</h2>
           <h5>dkfdkjf@gmail.com</h5>
           <a href='mailto:dkfkfd@gmail.com'>Send A Message</a>
         </article>
         <article className="contact_option">
           <RiMessengerLine className='contact_option_icon'/>
           <h2>Messenger</h2>
           <h5>masdfja.lsdalfjla</h5>
           <a href='https//m.me/'>Send A Message</a>
         </article>
         <article className="contact_option">
           <RiWhatsappLine className='contact_option_icon'/>
           <h2>Whatsapp</h2>
           <h5>+88012345678</h5>
           <a href='https://api.whatsapp.com/send?phone=+88012345678'>Send A Message</a>
         </article>
       </div>
       <form action=''>
        <input type='text' name='name' placeholder='Your full name' required ></input>
        <input type='text' name='email' placeholder='Your Email' required ></input>
        <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>
     </div>
   </section>
  )
}

export default Contact