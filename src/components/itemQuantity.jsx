import React, { useState } from "react";
function ItemQuantity() {
  const [quantity, setQuantity] = useState(0);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <button onClick={handleDecrement}> - </button>
      <span> {quantity} </span>
      <button onClick={handleIncrement}> + </button>
    </div>
  );
}

export default ItemQuantity;
