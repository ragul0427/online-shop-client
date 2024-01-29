import React, { useState } from "react";
import "./product.scss";
import {
  AddShoppingCartOutlined,
  Balance,
  BalanceOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

function Product() {
  const [selectImage, setSelectImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const data = [
    "https://c1.wallpaperflare.com/preview/505/26/527/stylish-boy-fashion-man-s-fashion-blurry-background.jpg",
    "https://i.pinimg.com/736x/da/c7/bd/dac7bd954b00c78d8561c6a901276a68.jpg",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={data[0]}
            alt=""
            onClick={() => {
              setSelectImage(0);
            }}
          />
          <img
            src={data[1]}
            alt=""
            onClick={() => {
              setSelectImage(1);
            }}
          />
        </div>
        <div className="mainImg">
          <img src={data[selectImage]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          molestiae facere repellendus quidem sapiente porro, saepe quae,
          deserunt quo, id aperiam consequatur quis nostrum quasi modi
          blanditiis! Dolorem, adipisci sed.
        </p>

        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => setQuantity((prev) => (prev === 5 ? 5 : prev + 1))}
          >
            +
          </button>
        </div>
        <button className="add">
          <AddShoppingCartOutlined />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderOutlined />
            ADD TO WISHLIST
          </div>
          <div className="item">
            <Balance />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor:Polo</span>
          <span>Product Type:T-shirt</span>
          <span>Tag:T-Shirt,Women,Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
