import React from 'react'
import './ContactForm.scss'

export default function ContactForm() {
  return (
    <div>
        <form id="contact-form" action="" method="POST">
            <input type="hidden" name="access_key" value="8d741132-4400-4c09-a235-9f1a65a25beb"/>
            <div id="contact-sender-info">
              <input id="contact-name" type="text" name="Name" placeholder="Name" required/>
              <input id="contact-email" type="email" name="Email" placeholder="Email" required/>
            </div>
            <textarea name="Message" id="contactMessage" placeholder="Message" 
            cols="30" rows="10" required></textarea>
            <button>Send (out of order)</button>
        </form>
    </div>
  )
}
