import React, { useState } from 'react';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../stylesheet/login.css';
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
					<h1 className="login-title">Login</h1>
					{/* Your overlay content goes here */}
					<div className="username-container">
						<label className="username" htmlFor="username">
							Username
						</label>
						<input className="lable" type="text" id="username" />
					</div>
					<div className="password-container">
						<label className="username" htmlFor="username">
							Password
						</label>
						<input className="lable" type="text" id="username" />
					</div>
					<button className="login-btn">Login</button>
          <p className="registre-user">Registre new user</p>
				</div>
			)}
		</>
	);
}
export default Login;
{
	/* <FontAwesomeIcon icon={faSignInAlt} /> */
}
