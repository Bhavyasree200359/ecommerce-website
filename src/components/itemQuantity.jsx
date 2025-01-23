import React, { useState } from 'react';
import Cart from './cart';
function ItemQuantity() {
  const [quantity, setQuantity] = useState(0); // Default quantity is 1

  const handleIncrement = () => {
    setQuantity(quantity + 1); // Increase quantity by 1
  };

  const handleDecrement = () => {
    if (quantity > 0) { // Prevent negative or zero quantity
      setQuantity(quantity - 1); // Decrease quantity by 1
    }
  };

  return (
    <div>
      <button onClick={handleDecrement}> - </button>
      <span > {quantity} </span>
      <button onClick={handleIncrement}> + </button>
     
    </div>
  );
}



export default ItemQuantity;
