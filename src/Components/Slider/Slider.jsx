import React, { useState } from "react";
import "./slider.scss";
import { EastOutlined, WestOutlined } from "@mui/icons-material";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://c1.wallpaperflare.com/preview/505/26/527/stylish-boy-fashion-man-s-fashion-blurry-background.jpg",
    "https://i.pinimg.com/736x/da/c7/bd/dac7bd954b00c78d8561c6a901276a68.jpg",
    "https://images.pexels.com/photos/1472761/pexels-photo-1472761.jpeg?cs=srgb&dl=pexels-tanim-chowdhury-1472761.jpg&fm=jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
};

export default Slider;
