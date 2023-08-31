import React from 'react';
// import '../stylesheet/start.css'; // Uppdatera sökvägen för styles.css
import smoke from '../src/assets/smoke.jpg';
import Kippis from '../data/kippis.jsx';
import crownClown from '../src/assets/crownClown.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

function Start() {
	return (
		<>
			<div className="image-wrapper">
			<div className='header-container'>

			<div className="icon menu">
					<FontAwesomeIcon icon={faBars} className="menu-icon" />
				</div>
				<h1 className="title">
					Malins projekt
					<img src={crownClown} alt="picture of the clowns crown" />
				</h1>

				<div className="icon login">
					<FontAwesomeIcon icon={faSignInAlt} className="login-icon" />
				</div>
			</div>
				<Kippis />
			</div>
		</>
	);
}

export default Start;
