
import React, { useState } from 'react';
import { GoogleLogin ,googleLogout} from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function Oauth() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (credentialResponse) => {
    setIsLoggedIn(true);
    console.log(credentialResponse);
    navigate('/home'); 
  };
  setTimeout(() => {
    googleLogout();  // Log out the user after the time period
    setIsLoggedIn(false);  // Update the state to reflect that the user is logged out
    console.log("User has been logged out automatically"); // Redirect to register page after logout
  }, 30);


  return (
    <div style={{ textAlign: 'center', marginTop: '20px',display:"flex",
        justifyContent:"center" }}>
      
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      
    </div>
  );
}

export default Oauth;



