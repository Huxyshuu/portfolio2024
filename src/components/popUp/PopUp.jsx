import React, { useEffect } from 'react'
import './PopUp.scss'

export default function PopUp() {

    useEffect(() => {
        const popUp = document.getElementById('popUp');
        popUp.classList.add("active");

        setTimeout(() => {
            popUp.classList.remove("active");
        }, 6000);
    }, [])


  return (
    <div className="popUp" id="popUp">
        <div className="popUp-icon">
            <h3>!</h3>
        </div>
        <div className="popUp-text">
            <h3>Welcome!</h3>
            <p>The site is currently being worked on. <br/>Apologies for possible bugs 😃</p>
        </div>
    </div>
    
  )
}
