import React from "react";
import Footer from "./footer";
import { connect } from "react-redux";
import { incrementItem, decrementItem } from "../components/redux/actions";
import Nav from "../components/nav";
import { useNavigate } from "react-router-dom";
function Cart({
  itemCounts,
  totalPrice,
  cartItems,
  id,
  image,
  productName,
  productPrice,
  incrementItem,
  decrementItem,
}) {
  const navigate = useNavigate();
  const totalItems = Object.values(itemCounts).reduce(
    (sum, count) => sum + count,
    0
  );
  const handleCart = () => {
    navigate("/payment");
  };
  const handleIncrementInCart = (item) => {
    incrementItem({
      id: item.id,
      price: parseFloat(item.productPrice),
      productDetails: {
        id: item.id,
        image: item.image,
        productName: item.productName,
        productPrice: item.productPrice,
      },
    });
  };
  const handleDecrementInCart = (item) => {
    decrementItem({
      id: item.id,
      price: parseFloat(item.productPrice),
      productDetails: {
        id,
        image,
        productName,
        productPrice: parseFloat(productPrice),
      },
    });
  };

  return (
    <div>
      <div className="cart-div">
        <Nav />
        <div className="cart-checkout-button">
          <div className="cart-text">
            CART<button onClick={handleCart}>CHECK OUT</button>
          </div>
        </div>
        <div className="cart-card">
          {Object.values(cartItems).length === 0 ? (
            <p></p>
          ) : (
            Object.values(cartItems).map((item) => (
              <div>
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="image-style"
                  />
                  <p>{item.productName}</p>
                  <p>{item.productPrice}/-</p>
                  <div>
                    <button onClick={() => handleIncrementInCart(item)}>
                      +
                    </button>
                    {item.count}

                    <button onClick={() => handleDecrementInCart(item)}>
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
          <div className="items-price-div">
            <p>Total Items in Cart: {totalItems}</p>
            <p>Total Price: {totalPrice}/-</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  itemCounts: state.itemCounts,
  totalPrice: state.totalPrice,
  cartItems: state.cartItems,
});
const mapDispatchToProps = {
  incrementItem,
  decrementItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
