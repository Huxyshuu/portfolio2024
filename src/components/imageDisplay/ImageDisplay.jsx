import React, { useState } from 'react'
import "./ImageDisplay.scss"

export default function ImageDisplay(props) {

    const imageList = props.images;

    const [currentImage, setCurrentImage] = useState(0);



  return (
    <div className="imageContainer">
        <img src={imageList[currentImage].image} alt={imageList[currentImage].alt} />
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
