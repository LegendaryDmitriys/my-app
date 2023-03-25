import React, { useState, useEffect } from "react";
import "./scss/about_product.scss";
import { Link } from "react-router-dom";
import jwt_decode from 'jwt-decode';

function About_Product(props) {
  const { item } = props;
  const [selectedSize, setSelectedSize] = useState(item.size.split(",")[0]);
  
  const addToCart = () => {
    const token = localStorage.getItem("loginToken");
    if (token) {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.data.user_id;
      fetch("http://192.168.0.104/auth-api/product.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          product: item.id,
          size: selectedSize,
          userId: userId
        })
      })
      .then(response => response.json())
      .catch(error => console.error(error))
    } else {
      console.log("User not authenticated.");
    }
  }
  

  return (
    <div className="product">
    <div className="product__wrapper">
      <div className="product__half product__half_title">
        <h2 className="product__title">{item.type} {item.name}</h2>
      </div>
      <div className="product__half product__half_gallery">
        <img src={item.image_url} alt="" />
      </div>
      <div className="product__half product__half_description">
        <div className="productAbout">
          <h3 className="product__price">{item.price}<span>₽</span></h3>
          <div className="productSelectSize">
            <div className="productSelectSize__label">Размер RU</div>
            <div className="SizeSelect">
              {item.size && item.size.split(",").map((size) => (
                <div className={`SizeSelect__size ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                  <span>{size}</span>
                </div>
              ))}
            </div>
            <div className="productAbout__addToCart">
              <button onClick={addToCart}>Перейти в корзину</button>
            </div>
            <div className="productAbout_info">

            </div>
            <div className="productDesc">
              <div className="productDesc__label">
                <h4>Описание</h4>
              </div>
              <div className="productDesc__text">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default About_Product;
