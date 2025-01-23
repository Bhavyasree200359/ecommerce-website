








import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import view from "../images/view.png";
import hide from "../images/hide.png";
import Footer from "../components/footer"
import Oauth from "./oauth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const handleRegister = () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        localStorage.setItem("user", JSON.stringify({ email, password }));
        alert("Registration successful!");
        navigate("/home");
      } else {
        alert("Password and Confirm Password should be the same");
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="register-div">
      <div className="register-div1">
        <div className="register-div1-1">
          <h1>ECOMMERCE WEBSITE</h1>
        </div>
        <div className="register-div1-2">
          <div className="register-div1-2-1">
            <h2>Register</h2>
            <p>Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <p>Password</p>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={showPassword ? view : hide}
                alt="toggle visibility"
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  width: "20px",
                  height: "20px",
                  filter: "invert(100%)",
                }}
              />
            </div>
            <br />
            <p>Confirm Password</p>
            <div style={{ position: "relative" }}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                
              />
              <img
                src={showConfirmPassword ? view : hide}
                alt="toggle visibility"
                onClick={toggleConfirmPasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  width: "20px",
                  height: "20px",
                  filter: "invert(100%)",
                }}
              />
            </div>
            <br />
            <button onClick={handleRegister}>Register</button>
            <span> If registered, then </span>
            <Link to="/login">login</Link>
            <Oauth />
          </div>
          
        </div>
        
      </div>
      <div className="register-div2">
        <img
          className="register-img"
          src="https://img.freepik.com/free-psd/shopping-vertical-background_23-2150409471.jpg"
          alt="ecommerce background"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Register;
