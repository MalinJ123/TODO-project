import React, { useState } from 'react';
// import '../stylesheet/start.css'; // Uppdatera sökvägen för styles.css
import Kippis from '../components/kippis.jsx';
import Menu from '../components/menu.jsx';
import crownClown from '../src/assets/crownClown.jpg';
// import lightning from '../src/assets/lightning.jpg';
import Login from '../components/Login.jsx';
import smoke from '../src/assets/smoke.png'

function Start() {

	const backgroundStyle = {
    backgroundImage: `url(${smoke})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '80vh',  };

	return (
		<>
			<div>
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
				<div style={backgroundStyle}> 
				
				{/* <Kippis /> */}
				</div>
			</div>
			{/* <img className="lightning" src={lightning} alt="pic of lightning" /> */}
		</>
	);
}

export default Start;
