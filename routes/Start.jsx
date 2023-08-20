import React from "react";
import "../stylesheet/start.css"; // Uppdatera sökvägen för styles.css
import smoke from "../src/assets/smoke.jpg";

function Start() {
	return (
	  <>
		 <div className="image-wrapper">
			<h1 className="overlay title">Malin projekt</h1>
			<img
			  className="background-Pic"
			  src={smoke}
			  alt="A picture of black and white smoke"
			/>
			<div className="overlay button-wrapp">
			<button className="button">Logga in </button>
			<button className="button">Registrera ny användare</button></div>	
			<img
			  className="background-Pic mirror-image"
			  src={smoke}
			  alt="A picture of black and white smoke"
			/>
		 </div>
	  </>
	);
 }
 

export default Start;
