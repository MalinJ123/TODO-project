import React from 'react';
// import '../stylesheet/start.css'; // Uppdatera sökvägen för styles.css
import smoke from '../src/assets/smoke.jpg';
import Kippis from '../data/kippis.jsx';
import crownClown from '../src/assets/crownClown.jpg';

function Start() {
	return (
		<>

			<input id="toggle" type="checkbox" />

			<label className="toggle-container" for="toggle">
				<span class="button-toggle"></span>
				<h1 className="overlay title">
					Malins projekt
					<img src={crownClown} alt="picture of the clowns crown" />
				</h1>
			</label>

			<nav className="nav">
				<a className="nav-item" href="#">
					Dashboard
				</a>
				<a className="nav-item" href="#">
					History
				</a>
				<a className="nav-item" href="#">
					Statistics
				</a>
				<a className="nav-item" href="#">
					Settings
				</a>
			</nav>
			<div className="image-wrapper">
				<img
					className="background-pic one"
					src={smoke}
					alt="A picture of black and white smoke"
				/>

				<Kippis />

				<img
					className="background-pic mirror-image"
					src={smoke}
					alt="A picture of black and white smoke"
				/>
			</div>
		</>
	);
}

export default Start;
