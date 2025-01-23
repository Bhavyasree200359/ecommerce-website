import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import view from "../images/view.png";
import hide from "../images/hide.png";
import Footer from "../components/footer"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid credentials");
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
            <h2>Login</h2>
            <p>Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <p>Password</p>
            <div style={{ position: "relative",
              justifyContent:'space-between'
             }}>
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
    filter: "invert(100%)", // This will turn the image white
  }}
/>
            </div>
            <br />
            <button onClick={handleLogin}>Login</button>
            <span> If not registered then, </span>
            <Link to="/">register</Link>
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

export default Login;


