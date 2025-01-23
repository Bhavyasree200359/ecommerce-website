import React from "react";
import {Link} from "react-router-dom"
function Payment(){
return(
    <div className="payment-component">Payment Succesful! Please visit our website more--- <Link to="/home" style={{ listStyleType: "none" }}>Home</Link></div>
)

}

export default Payment;