import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import defaultImage from "../Assets/DefaultImage.jpeg";
import OpenAI from "openai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState(defaultImage);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const generateImage = async () => {
    if (inputRef.current.value === "") {
      return;
    }
    console.log("---->", inputRef.current.value);
    setLoading(true);
    try {
      const response = await openai.images.generate({
        prompt: inputRef.current.value,
        n: 1,
        size: "1024x1024",
      });
      setImageUrl(response.data[0].url);
    } catch (error) {
      inputRef.current.value = "";
      console.error("Error generating image:", error);
      if (error.message.includes("Billing hard limit has been reached")) {
        toast.error(
          "Oops! You've reached your OpenAI billing limit. Please check your account or upgrade your plan to continue generating images."
        );
      } else {
        toast.error(
          "Something went wrong while generating the image. Please try again."
        );
      }

      setImageUrl(defaultImage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-image-generator">
      <ToastContainer />
      <div className="header">AI Image Generator</div>
      <div className="image-loading">
        <div className="image">
          <img
            src={loading ? "/path/to/loading.gif" : imageUrl}
            alt="Generated or default"
          />
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Write what you want"
          ref={inputRef}
        />
        <button className="generate-btn" onClick={generateImage}>
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </div>
    </div>
  );
};

export default ImageGenerator;
