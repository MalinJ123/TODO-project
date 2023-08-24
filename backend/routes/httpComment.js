import express from 'express';
import fs from 'fs';
import { getDb } from '../database.js';

const router = express.Router();
const db = getDb();

// Dessa endpoints behöver byggas för att vi ska ha ett RESTful API
// x GET /comments
// x GET /comment/:id
// x POST /comment
// x PUT /comment/:id
// x DELETE /comment/:id

// Alla URL börjar med "/api/comment"
router.get('/', async (req, res) => {
	try {
		await db.read();
		res.status(200).json(db.data.comment);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Kunde inte hämta kommentarer.' });
	}
});

// POST-routen för att spara en ny kommentar
router.post('/', async (req, res) => {
	try {
		const newComment = req.body; // Ta emot den nya kommentaren från användare

		// Lägg till tidsstämpel
		newComment.timestamp = new Date().toLocaleString();

		// Läs in befintliga kommentarer från db.json
		let comments = [];
		try {
			// Försök att läsa in befintliga kommentarer
			const commentsData = fs.readFileSync('db.json', 'utf-8');
			comments = JSON.parse(commentsData);
		} catch (error) {
			// Om filen inte finns eller är tom, kommer vi att hantera det som ett tomt kommentarsfält.
			// Du kan också hantera detta på annat sätt beroende på din applikationslogik.
			console.error('Fel vid inläsning av kommentarer:', error);
		}

		// Lägg till den nya kommentaren i listan
		comments.push(newComment);

		// Spara den uppdaterade listan till db.json
		fs.writeFileSync('db.json', JSON.stringify(comments));

		// Uppdatera databasen med de nya kommentarerna 
		await db.read();
		db.data.comment.push(newComment);
		await db.write();

		res.status(201).json({ newComment }); // Returnera den nya kommentaren som JSON
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Kunde inte spara kommentaren.' });
	}
});


export default router;

