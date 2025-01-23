import React from "react";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <footer>
      <p className="long-text">
        Your one-stop solution for online shopping, delivering happiness since &copy; 2025.
      </p>
      <p className="short-text">&copy; 2025 ECOMMERCE WEBSITE</p>
      <Link to="/home">Home</Link>
    </footer>
  );
}

export default Footer;
