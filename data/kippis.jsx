import React, { useState } from 'react';
import '../stylesheet/start.css'; // Uppdatera sökvägen för styles.css
import pepp from '../assets/pepp.jpg';
// import {readFile, writeFile} from 'node:fs/promises'

function Kippis() {
	const [showMessage, setShowMessage] = useState(false);
	const [comments, setComments] = useState([]);
	const [newComments, setNewComment] = useState('');
	const commentFile = 'comments.json';

	const puppy = {
		name: 'Pepper',
		breed: 'schäfer',
		color: 'Black',
		age: 3,
		isCute: true,
	};

	const handleClick = () => {
		setShowMessage(true);
	};
	const handleClose = () => {
		setShowMessage(false);
	};

	const handleCommentChange = () => {
		setNewComment(e.target.value);
	};

	const handleAddComment = () => {
		if (newComments) {
			const updatedComments = [...comments, newComments];
			setComments(updatedComments);
			setNewComment('');

			// Spara kommentarerna i en JSON-fil som heter comments.json
			saveCommentsToFile(updatedComments);
		}
	};



	return (
		<div>
			<button onClick={handleClick}>Visa meddelande</button>
			{showMessage && (
				<div className="overlay2">
					<div className="modal">
						<span className="close" onClick={handleClose}>
							&times;
						</span>
						<p>
							{puppy.name} är en {puppy.breed} på {puppy.age} år
						</p>
						<img className="img-pepp" src={pepp} alt="bild på schäfer" />

						<div>
							<h2>Kommentarer</h2>
							<ul>
								{comments.map((comment, index) => (
									<li key={index}>{comment}</li>
								))}
							</ul>
							<input
								type="text"
								placeholder="Skriv en kommentar"
								value={newComments}
								onChange={handleCommentChange}
							/>
							<button onClick={handleAddComment}>Lägg till kommentar</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Kippis;
