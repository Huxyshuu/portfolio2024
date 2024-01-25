import { useState } from 'react';
import './ContactForm.scss'
import { Icon } from '@iconify/react';

export default function ContactForm() {

  const [thanking, setThanking] = useState(false);

  const submitForm = (e) => {
    const result = document.getElementById('thanks-message');
    const sendButton = document.getElementById("send-button");

    e.preventDefault();
      const formData = new FormData(e.target);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      sendButton.innerHTML = "Please wait...";

        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = json.message;
                    setThanking(true);
                    document.getElementById("thanks").classList.add("active");
                } else {
                    console.log(response);
                    result.innerHTML = json.message;
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong!";
            })
            .then(function() {
                e.target.reset();
                setTimeout(() => {
                    setThanking(false);
                    document.getElementById("thanks").classList.remove("active")
                    sendButton.innerHTML = "Send";
                  }, 10000);
            });

        // setThanking(true);
        // document.getElementById("thanks").classList.add("active");
        // e.target.reset();
        // setTimeout(() => {
        //     setThanking(false);
        //     document.getElementById("thanks").classList.remove("active");
        // }, 10000);
  }

  return (
    <div>
      <div id="thanks">
        <div id="thanks-icon">
          <Icon icon="icon-park-outline:message-sent" />
        </div>
        <h4 id="thanks-message">Message has been delivered! Thank you!</h4>
      </div> 
      <form id="contact-form" onSubmit={submitForm} method="POST">
        <input type="hidden" name="access_key" value="9eb23b53-2d74-4f49-879c-f99ed9cd0605"/>
        <input type="hidden" name="from_name" value="hugotamm.com"></input>
        <input type="hidden" name="subject" value="New submission from hugotamm.com"></input>
        
        <div id="contact-sender-info">
          <input id="contact-name" type="text" name="Name" placeholder="Name" required/>
          <input id="contact-email" type="email" name="Email" placeholder="Email (optional)"/>
        </div>
        <textarea name="Message" id="contactMessage" placeholder="Message" 
        cols="30" rows="10" required></textarea>
        <button type="submit" id="send-button">Send</button>
    </form>
    </div>
  )
}
