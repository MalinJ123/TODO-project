
import React, { useState } from 'react';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheet/login.css'
function Login() {

  const [isLoginOverlayOpen, setIsLoginOverlayOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOverlayOpen(!isLoginOverlayOpen);
  };

  return (
    <>
     <div onClick={handleLoginClick}>
      <FontAwesomeIcon icon={faSignInAlt} />
    </div>

      {/* You can conditionally render your overlay based on isOverlayOpen */}
      {isLoginOverlayOpen && (
        <div className="login-overlay">
          {/* Your overlay content goes here */}
         
        </div>
      )}
    </>
  );
}
export default Login 
{/* <FontAwesomeIcon icon={faSignInAlt} /> */}