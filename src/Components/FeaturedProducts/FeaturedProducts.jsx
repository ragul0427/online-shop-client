import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img2: "https://i.pinimg.com/736x/8a/14/3c/8a143c826358d452da6874ce59d6af3e.jpg",
      img: "https://images.filmibeat.com/ph-big/2022/02/vishnu-vishal_164406063590.jpg",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1604822064782-86b012c1a8f7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://c4.wallpaperflare.com/wallpaper/167/163/768/women-model-portrait-looking-at-viewer-wallpaper-preview.jpg",
      title: "Skirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/girl-chilling-relaxing-hat-bright-room_1220-7459.jpg",
      title: "Hat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          soluta tenetur quod libero aspernatur vero reprehenderit dolor.
          Laudantium tenetur dignissimos autem, sit voluptatem nesciunt sint
          similique ab, eum, sed eligendi?
        </p>
      </div>
      <div className="bottom">
        {data.map((item, i) => {
          return <Card item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
