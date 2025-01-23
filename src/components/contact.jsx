import React from 'react';
import Footer from "../components/footer";
import { useNavigate} from "react-router-dom";
import Nav from "../components/nav"
function Contact() {
    const navigate = useNavigate();
    const handleLogOut=()=>{
        navigate('/login');
    }
  return (
    <div>
      <Nav />
      

      <Footer />
    </div>
  );
}

export default Contact;
