import React from "react";

import { useNavigate } from "react-router-dom";
function Nav(){

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
    return(
        <div>
            <nav>
        <div className="nav-div1">
          <li onClick={handleHome}>Home</li>
          <li onClick={handleContact}>Contact</li>
          <li onClick={handleProducts}>All Products</li>
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


export default Nav;