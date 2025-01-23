import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../App.css';
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        localStorage.setItem("user", JSON.stringify({ email, password }));
        alert("Registration successful!");
        navigate("/home");
      } else {
        alert("password and confirm password should be same");
      }
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div className="register-div">
        <div className="register-div1">
        <div className="register-div1-1"><h1>ECOMMERCE WEBSITE</h1></div>
        <div className="register-div1-2"><div className="register-div1-2-1"><h2>Register</h2>
        <p>Email</p><input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <p>Password</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <p>Confirm Password</p>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br></br>
      <button onClick={handleRegister}>Register</button><span> if registered then, </span>
      <Link to="/login">login</Link></div></div>


</div>
      
























        <div className="register-div2">
        <img className='register-img' src="	https://img.freepik.com/free-psd/shopping-vertical-background_23-2150409471.jpg
"></img>
        </div>
      
    </div>
  );
}

export default Register;
