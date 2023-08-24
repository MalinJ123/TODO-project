import React, { useState } from 'react';
import '../stylesheet/start.css'; // Uppdatera sökvägen för styles.css
import pepp from '../assets/pepp.jpg';
// import {readFile, writeFile} from 'node:fs/promises'

function Kippis() {
	const [showMessage, setShowMessage] = useState(false);
	const [comments, setComments] = useState([]);
	const [newComments, setNewComment] = useState('');
	// const commentFile = 'comments.json'; .
	// Om du vill spara kommentarer i en JSON-fil,
	// behöver du använda läs- och skrivfunktioner för filer som fs.promises.readFile och fs.promises.writeFile.
	
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

	const handleCommentChange = (e) => {
		setNewComment(e.target.value);
	};

	const handleAddComment = () => {
		if (newComments) {
			const newComment = {
			  message: newComments,
			  timestamp: new Date().toLocaleString(), // Generera en tidsstämpel
			};
		
			// Spara kommentarerna i en JSON-fil som heter db.json med hjälp av en fetch

			fetch('/api/comment', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newComment), // Skicka de uppdaterade kommentarerna till servern
			})
				.then((response) => {
					if (response.ok) {
						console.log('Kommentar sparad i databasen.');
						// Om du vill ladda om kommentarerna från servern, kan du göra en ny GET-förfrågan här.
					} else {
						console.error('Det uppstod ett fel när kommentaren skulle sparas!!.');
					}
				})
				.catch((error) => {
					console.error('Något gick fel:', error);
				});
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
								onChange={(e) => handleCommentChange(e)}
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
