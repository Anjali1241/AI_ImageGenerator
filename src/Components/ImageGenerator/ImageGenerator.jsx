import React from "react";
import "./ImageGenerator.css";
import defaultImage from "../Assets/DefaultImage.jpeg";
const ImageGenerator = () => {
  return (
    <div className="ai-image-generator">
      <div className="header">AI Image Generator</div>
      <div className="image-loading">
        <div className="image">
          <img src={defaultImage} alt="default image"></img>
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="write what you want"
        />
        <div className="generate-btn">Generate images</div>
      </div>
    </div>
  );
};

export default ImageGenerator;
