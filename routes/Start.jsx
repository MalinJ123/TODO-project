import React from "react";
import "../stylesheet/start.css"; // Uppdatera sökvägen för styles.css
import smoke from "../src/assets/smoke.jpg";

function Start() {
	return (
	  <>
		 <div className="image-wrapper">
			<img
			  className="background-Pic"
			  src={smoke}
			  alt="A picture of black and white smoke"
			/>
			<img
			  className="background-Pic mirror-image"
			  src={smoke}
			  alt="A picture of black and white smoke"
			/>
		 </div>
		 <h1 className="title">To do</h1>
	  </>
	);
 }
 

export default Start;
