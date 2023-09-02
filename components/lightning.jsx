import React, { useState } from 'react';
import '../stylesheet/lightning.css'; // Create a CSS file for styling

function Lightning() {
  const [position, setPosition] = useState(0); // Initial position

  // Function to move the lightning
  const moveLightning = () => {
    // Calculate the new position
    const newPosition = position + 10; // Adjust the value for speed
    setPosition(newPosition);

    // Reset the position if it goes off-screen
    if (newPosition >= window.innerWidth) {
      setPosition(-100); // Adjust this value to start from outside the screen
    }
  };

  // Use a CSS class to style the lightning
  return (
    <div className="lightning" style={{ left: `${position}px` }}>
      ⚡
    </div>
  );
}

export default Lightning;
