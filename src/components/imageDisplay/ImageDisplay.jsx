import React, { useState, useEffect } from 'react'
import "./ImageDisplay.scss"

export default function ImageDisplay(props) {

    const imageList = props.images;

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {

      const interval = setInterval(() => {
        if (currentImage == imageList.length - 1) {
          setCurrentImage(0);
        } else {
          setCurrentImage((t) => t + 1);
        }
      }, 6000);
      return () => clearInterval(interval);
    }, [currentImage])


  return (
    <div className="imageContainer">
        <img src={imageList[currentImage].image} loading="lazy" alt={imageList[currentImage].alt} />
        <p>{imageList[currentImage].desc}</p>
        <div className="radioContainer">
            {
                imageList.map((image, i) => {
                    return <label key={image + "_" + i} className="labelContainer">
                                <input  
                                type="radio"
                                value={i} 
                                name="aboutImages"
                                checked={currentImage == i}
                                readOnly
                                onClick={() => setCurrentImage(i)}
                                ></input>
                                <span className="checkmark"></span>
                           </label>
                })
            }
        </div>
    </div>
  )
}
