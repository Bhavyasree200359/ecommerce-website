import React from "react";

import { useNavigate } from "react-router-dom";

import { connect } from 'react-redux';

function Nav({itemCounts}){
  const totalItems = Object.values(itemCounts).reduce((sum, count) => sum + count, 0); 
    const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/login");
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
  const handleCart=()=>{
    navigate("/cart")
  }
    return(
        <div>
            <nav>
        <div className="nav-div1">
          <li onClick={handleHome}>Home</li>
          <li onClick={handleContact}>Contact</li>
          <li onClick={handleProducts}>All Products</li>
          <li onClick={handleCart}>
            Cart {totalItems}
        
          </li>
        </div>
        <div>
          <li onClick={handleLogOut} className="logout-link">
            Log Out
          </li>
        </div>
      </nav>
        </div>
    )
}

const mapStateToProps = (state) => ({
  itemCounts: state.itemCounts,
});

export default connect(mapStateToProps)(Nav);




