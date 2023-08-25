import express from 'express';
import fs from 'fs';
import { getDb } from '../database.js';

const router = express.Router();
const db = getDb();

// // Dessa endpoints behöver byggas för att vi ska ha ett RESTful API
// // x GET /comments
// // x GET /comment/:id
// // x POST /comment
// // x PUT /comment/:id
// // x DELETE /comment/:id

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

router.post('/', async (req, res) => {
	try {
		const newComment = req.body; // Hämta den nya kommentaren från request body
		await db.read();

		// Lägg till den nya kommentaren i din databas
		db.data.comment.push(newComment);

		// Spara ändringarna till din datafil
		await db.write();

		res.status(201).json(newComment); // Skicka tillbaka den nya kommentaren som svar
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Kunde inte lägga till kommentaren.' });
	}
});







export default router;