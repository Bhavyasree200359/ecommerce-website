import React from "react";
import Nav from "../components/nav";
import Footer from "./footer";
import Card from "./card";
import Shoe from "../images/shoes.jpg";
import Watch from "../images/watchjpg.jpg";
function Products() {
  return (
    <div>
      <Nav />
      <div className="cards-wrap">
        <Card
          id="1"
          image="https://m.media-amazon.com/images/I/61NbiB1GU-L.jpg"
          productPrice={28999}
          productName="OnePlus Nord 4 5G-1"
        />
        <Card
          id="2"
          image="https://img.faballey.com/images/Product/XKS04397Z/d3.jpg"
          productPrice={3999}
          productName="Indo Western Dress-1"
        />
        <Card
          id="3"
          image={Watch}
          productPrice={49999}
          productName="Apple Watch SE-1"
        />
        <Card
          id="4"
          image={Shoe}
          productPrice={2999}
          productName="Women Running Shoes-1"
        />
        <Card
          id="9"
          image="https://m.media-amazon.com/images/I/61NbiB1GU-L.jpg"
          productPrice={28999}
          productName="OnePlus Nord 4 5G-2"
        />
        <Card
          id="10"
          image="https://img.faballey.com/images/Product/XKS04397Z/d3.jpg"
          productPrice={3999}
          productName="Indo Western Dress-2"
        />
        <Card
          id="11"
          image={Watch}
          productPrice={49999}
          productName="Apple Watch SE-2"
        />
        <Card
          id="12"
          image={Shoe}
          productPrice={2999}
          productName="Women Running Shoes-2"
        />
        <Card
          id="13"
          image="https://m.media-amazon.com/images/I/61NbiB1GU-L.jpg"
          productPrice={28999}
          productName="OnePlus Nord 4 5G-3"
        />
        <Card
          id="14"
          image="https://img.faballey.com/images/Product/XKS04397Z/d3.jpg"
          productPrice={3999}
          productName="Indo Western Dress-3"
        />
        <Card
          id="15"
          image={Watch}
          productPrice={49999}
          productName="Apple Watch SE-3"
        />
        <Card
          id="16"
          image={Shoe}
          productPrice={2999}
          productName="Women Running Shoes-3"
        />
        <Card
          id="17"
          image="https://m.media-amazon.com/images/I/61NbiB1GU-L.jpg"
          productPrice={28999}
          productName="OnePlus Nord 4 5G-4"
        />
        <Card
          id="18"
          image="https://img.faballey.com/images/Product/XKS04397Z/d3.jpg"
          productPrice={3999}
          productName="Indo Western Dress-4"
        />
        <Card
          id="19"
          image={Watch}
          productPrice={49999}
          productName="Apple Watch SE-4"
        />
        <Card
          id="20"
          image={Shoe}
          productPrice={2999}
          productName="Women Running Shoes-4"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Products;
