import React from 'react'

export default function ContactForm() {
  return (
    <div>
        <h3>Let&apos;s chat!</h3>
        <form action="https://formsubmit.co/38c4dba6f8061f9b985b9c6d425ea049" method="POST">
            <input type="text" name="Name" placeholder="Name" required/>
            <input type="email" name="Email" placeholder="Email" required/>
            <textarea name="Message" id="contactMessage" placeholder="Message" 
            cols="30" rows="10" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}
