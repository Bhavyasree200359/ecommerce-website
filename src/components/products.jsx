import React from "react";
import Nav from "../components/nav"
import Footer from "./footer";
import Card from "./card";
import Shoe from '../images/shoes.jpg';
import Watch from "../images/watchjpg.jpg";
function Products(){
    const addToCart=()=>{
        
      };
        
    return(
        <div>
            <Nav />
            <div className="cards-wrap">
            <Card
          image="https://m.media-amazon.com/images/I/61NbiB1GU-L.jpg"
          price={28999}
          productName="OnePlus Nord 4 5G-1"
          addToCart={addToCart}
        />
        <Card
          image="https://img.faballey.com/images/Product/XKS04397Z/d3.jpg"
          price={3999}
          productName="Indo Western Dress-1"
          addToCart={addToCart}
        />
        <Card image={Watch} price={49999} productName="Apple Watch SE-1" addToCart={addToCart} />
        <Card image={Shoe} price={2999} productName="Women Running Shoes-1" addToCart={addToCart} />
        <Card
          image="https://m.media-amazon.com/images/I/61NbiB1GU-L.jpg"
          price={28999}
          productName="OnePlus Nord 4 5G-2"
          addToCart={addToCart}
        />
        <Card
          image="https://img.faballey.com/images/Product/XKS04397Z/d3.jpg"
          price={3999}
          productName="Indo Western Dress-2"
          addToCart={addToCart}
        />
        <Card image={Watch} price={49999} productName="Apple Watch SE-2" addToCart={addToCart} />
        <Card image={Shoe} price={2999} productName="Women Running Shoes-2" addToCart={addToCart} />
        <Card
          image="https://m.media-amazon.com/images/I/61NbiB1GU-L.jpg"
          price={28999}
          productName="OnePlus Nord 4 5G-3"
          addToCart={addToCart}
        />
        <Card
          image="https://img.faballey.com/images/Product/XKS04397Z/d3.jpg"
          price={3999}
          productName="Indo Western Dress-3"
          addToCart={addToCart}
        />
        <Card image={Watch} price={49999} productName="Apple Watch SE-3" addToCart={addToCart} />
        <Card image={Shoe} price={2999} productName="Women Running Shoes-3" addToCart={addToCart} />
        <Card
          image="https://m.media-amazon.com/images/I/61NbiB1GU-L.jpg"
          price={28999}
          productName="OnePlus Nord 4 5G-4"
          addToCart={addToCart}
        />
        <Card
          image="https://img.faballey.com/images/Product/XKS04397Z/d3.jpg"
          price={3999}
          productName="Indo Western Dress-4"
          addToCart={addToCart}
        />
        <Card image={Watch} price={49999} productName="Apple Watch SE-4" addToCart={addToCart} />
        <Card image={Shoe} price={2999} productName="Women Running Shoes-4" addToCart={addToCart} />
            
            </div>
            

            <Footer />
        </div>
    )


}
export default Products;
