import React from 'react'

export default function ContactForm() {
  return (
    <div>
        <h3>Let&apos;s chat!</h3>
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="8d741132-4400-4c09-a235-9f1a65a25beb"/>
            <input type="text" name="Name" placeholder="Name" required/>
            <input type="email" name="Email" placeholder="Email" required/>
            <textarea name="Message" id="contactMessage" placeholder="Message" 
            cols="30" rows="10" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}
