import React, { useState } from 'react';
// import '../stylesheet/start.css'; // Uppdatera sökvägen för styles.css
import Kippis from '../components/kippis.jsx';
import Menu from '../components/menu.jsx';
import crownClown from '../src/assets/crownClown.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import lightning from '../src/assets/lightning.jpg';
import Lightning from '../components/lightning.jsx';
import Login from '../components/Login.jsx';

function Start() {
	return (
		<>
			<div className="image-wrapper">
				<div className="header-container">
					<div className="menu">
						<div className="icon menu">
							<Menu />
						</div>
						<div className="dropdown"></div>
					</div>
					<h1 className="title">
						Malins projekt
						<img src={crownClown} alt="picture of the clowns crown" />
					</h1>

					<div className="icon login">
					<Login/> 
					</div>
				</div>
				{/* <Kippis /> */}
			</div>
			<img className="lightning" src={lightning} alt="pic of lightning" />
			{/* <Lightning /> */}
		</>
	);
}

export default Start;
