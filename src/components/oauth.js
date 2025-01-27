
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
    googleLogout();  
    setIsLoggedIn(false);  
    console.log("User has been logged out automatically"); 
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



