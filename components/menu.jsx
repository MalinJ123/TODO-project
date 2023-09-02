import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheet/menu.css'

function Menu() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleClick = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <>
     <div onClick={handleClick}>
      <FontAwesomeIcon icon={faBars} />
    </div>

      {/* You can conditionally render your overlay based on isOverlayOpen */}
      {isOverlayOpen && (
        <div className="overlay">
          {/* Your overlay content goes here */}
         
        </div>
      )}
    </>
  );
}

export default Menu;
