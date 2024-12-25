import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import defaultImage from "../Assets/DefaultImage.jpeg";
const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState("/");
  let inputRef = useRef(null);
const imageGenertor=()=>{
    if(inputRef.current.value===''){
        return 0;
    }
}

  return (
    <div className="ai-image-generator">
      <div className="header">AI Image Generator</div>
      <div className="image-loading">
        <div className="image">
          <img
            src={imageUrl === "/" ? defaultImage : imageUrl}
            alt="default image"
          ></img>
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="write what you want"
          ref={inputRef}
        />
        <div className="generate-btn">Generate images</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
