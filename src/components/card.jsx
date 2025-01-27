import React, { useState } from "react";

import { connect } from "react-redux";
import { incrementItem } from "../components/redux/actions";

function Card({
  id,
  itemCount,
  image,
  productName,
  productPrice,
  incrementItem,
}) {
  const handleAddToCart = () => {
    incrementItem({
      id,
      price: parseFloat(productPrice),
      productDetails: {
        id,
        image,
        productName,
        productPrice: parseFloat(productPrice),
      },
    });
  };

  return (
    <div className="card-component">
      <img src={image} alt={productName} className="image-style" />
      <p>
        {"\u20B9"}
        {productPrice}/-
      </p>
      <span>{productName}</span>
      <div>
        <span>{itemCount || 0}</span>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => ({
  itemCount: state.itemCounts[ownProps.id] || 0,
});

const mapDispatchToProps = {
  incrementItem,
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
