





import React, { useState } from "react";

function Card({ image, price, productName, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    addToCart({ image, price, productName }, 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      addToCart({ image, price, productName }, -1);
    }
  };

  return (
    <div className="card-component">
      <img src={image} alt="photo" className="image-style" />
      <p>
        {"\u20B9"}
        {price}/-
      </p>
      <span>{productName}</span>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default Card;
