import React from 'react'
import './ContactForm.scss'

export default function ContactForm() {
  return (
    <div>
        <form id="contact-form" action="contact-form.php" method="POST">
            <div id="contact-sender-info">
              <input id="contact-name" type="text" name="Name" placeholder="Name" required/>
              <input id="contact-email" type="email" name="Email" placeholder="Email (optional)"/>
            </div>
            <textarea name="Message" id="contactMessage" placeholder="Message" 
            cols="30" rows="10" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}
