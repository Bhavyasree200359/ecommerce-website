




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Card from "../components/card";
import Welcome from "./welcomeText";
import Watch from "../images/watchjpg.jpg";
import Shoe from "../images/shoes.jpg";
import Instagram from "../images/instagram.jpg";

function Home() {
  const [cart, setCart] = useState([]); // State to track items in the cart
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
  };
  const handleHome=()=>{
navigate("/home")
  }
  const handleContact=()=>{
    navigate("/contact")
  }

  const handleProducts=()=>{
    navigate("/products")
  }
const handleArrow=()=>{
  navigate("/products")
}

  // Add to cart handler
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.productName === product.productName);

      if (existingProduct) {
        // Update quantity if product already exists
        return prevCart.map((item) =>
          item.productName === product.productName
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new product
        return [...prevCart, { ...product, quantity }];
      }
    });
  };
  const handlePayment=()=>{
    navigate("/payment")
  }

  return (
    <div>
      <nav>
        <div className="nav-div1">
          <li onClick={handleHome}>Home</li>
          <li onClick={handleContact}>Contact</li>
          <li onClick={handleProducts}>All Products</li>
          <li>
            Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </li>
        </div>
        <div>
          <li onClick={handleLogOut} className="logout-link">
            Log Out
          </li>
        </div>
      </nav>

      <Welcome />
      <div className="shopping-items-div">
        {/* Pass product details and addToCart handler to Card */}
        <Card
          image="https://m.media-amazon.com/images/I/61NbiB1GU-L.jpg"
          price={28999}
          productName="OnePlus Nord 4 5G"
          addToCart={addToCart}
        />
        <Card
          image="https://img.faballey.com/images/Product/XKS04397Z/d3.jpg"
          price={3999}
          productName="Indo Western Dress"
          addToCart={addToCart}
        />
        <Card image={Watch} price={49999} productName="Apple Watch SE" addToCart={addToCart} />
        <Card image={Shoe} price={2999} productName="Women Running Shoes" addToCart={addToCart} />
        <div className="total-div"><div>Total Cost: ₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        </div>
        <div className="payment-div" onClick={handlePayment}>Payment</div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="about">
          <p className="about-heading">ABOUT</p>
          <p className="about-text">
            Welcome to Our E-Commerce Store! Explore our wide range of products, including stylish
            women's and men's wear, top-notch electronics like mobiles, laptops, and watches, and
            trendy kids' wear. We have something for everyone! Click on the arrow to browse all our
            amazing products and enjoy shopping!
          </p>
          <img
            className="arrow-to-right"
            src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/arrow-right-direction-icon.png"
            alt="Arrow" onClick={handleArrow}
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

export default Home;




