import React, { useState, useEffect } from 'react';
import '../stylesheet/start.css'; // Uppdatera sökvägen för styles.css
import pepp from '../assets/pepp.jpg';
// import {readFile, writeFile} from 'node:fs/promises'

function Kippis() {
	const [showMessage, setShowMessage] = useState(false);
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState('');
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

	useEffect(() => {
		// Ladda in kommentarerna från backend 
		fetch('/api/comment')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Något gick fel med nätverksförfrågan');
			}
			return response.json();
		})
		.then((data) => {
			try {
				// Försök att pars JSON
				if (data && data.length > 0) {
					setComments(data);
				} else {
					setComments([]); // Sätt kommentarer till en tom lista om svaret är tomt
				}
			} catch (error) {
				console.error('Fel vid JSON-parsning:', error);
				// Hantera felet här, till exempel genom att visa ett felmeddelande för användaren
			}
		})
	}, []);
	

	const handleCommentChange = (e) => {
		setNewComment(e.target.value);
	};

	const handleAddComment = () => {
		if (newComment) {
			const newCommentData = {
				message: newComment,
				timestamp: new Date().toLocaleString(),
			  };
			  
			  // Skicka POST-förfrågan med newCommentData
			  fetch('/api/comment', {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json',
				},
				body: JSON.stringify(newCommentData),
			  })
				.then((response) => response.json())
				.then((data) => {
				console.log(data.message);
				  // Uppdatera state för att visa den nya kommentaren omedelbart
				  setComments([...comments, newCommentData]); // Här använder vi newCommentData istället för newComment
				  setNewComment(''); // Rensa inputfältet
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
									<li key={index}>
										<p>{comment.message}</p>
										<p>{comment.timestamp}</p>
									</li>
								))}
							</ul>

							<input
								type="text"
								placeholder="Skriv en kommentar"
								value={newComment}
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
