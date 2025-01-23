import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
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
    <button onClick={handleLogin}>Login</button><span> if not registered then, </span>
    <Link to="/">register</Link></div></div>


</div>
    
























      <div className="register-div2">
      <img className='register-img' src="	https://img.freepik.com/free-psd/shopping-vertical-background_23-2150409471.jpg
"></img>
      </div>
    
  </div>
);
   
    
}

export default Login;













{/* <h2>Login</h2>
<input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<br />
<input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
<br />
<button onClick={handleLogin}>Login</button> */}