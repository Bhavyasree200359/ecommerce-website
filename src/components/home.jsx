import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Card from "../components/card";
import Welcome from "./welcomeText";
import Watch from "../images/watchjpg.jpg";
import Shoe from "../images/shoes.jpg";
import Instagram from "../images/instagram.jpg";
import Nav from "./nav";

import { connect } from "react-redux";

function Home({ totalPrice }) {
  const navigate = useNavigate();

  const handleArrow = () => {
    navigate("/products");
  };

  const handlePayment = () => {
    navigate("/payment");
  };

  return (
    <div>
      <Nav />

      <Welcome />
      <div className="shopping-items-div">
        <Card
          id="1"
          image="https://m.media-amazon.com/images/I/61NbiB1GU-L.jpg"
          productPrice={28999}
          productName="OnePlus Nord 4 5G"
        />
        <Card
          id="2"
          image="https://img.faballey.com/images/Product/XKS04397Z/d3.jpg"
          productPrice={3999}
          productName="Indo Western Dress"
        />
        <Card
          id="3"
          image={Watch}
          productPrice={49999}
          productName="Apple Watch SE"
        />
        <Card
          id="4"
          image={Shoe}
          productPrice={2999}
          productName="Women Running Shoes"
        />
        <div className="total-div">
          <div>Total Cost: ₹{totalPrice}/-</div>
          <div className="payment-div" onClick={handlePayment}>
            Payment
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="about">
          <p className="about-heading">ABOUT</p>
          <p className="about-text">
            Welcome to Our E-Commerce Store! Explore our wide range of products,
            including stylish women's and men's wear, top-notch electronics like
            mobiles, laptops, and watches, and trendy kids' wear. We have
            something for everyone! Click on the arrow to browse all our amazing
            products and enjoy shopping!
          </p>
          <img
            className="arrow-to-right"
            src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/arrow-right-direction-icon.png"
            alt="Arrow"
            onClick={handleArrow}
          />
          <p className="about-text1">
            For more updates, follow us on{" "}
            <span>
              <img className="insta-image" src={Instagram} alt="Instagram" />
            </span>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({
  totalPrice: state.totalPrice,
});

export default connect(mapStateToProps)(Home);
