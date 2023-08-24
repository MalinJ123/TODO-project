import express from 'express';
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
router.post('/api/comment', async (req, res) => {
	try {
		const newComment = req.body; // Ta emot den nya kommentaren från begäranden

		// Lägg till tidsstämpel
		newComment.timestamp = new Date().toLocaleString();

		// Spara den nya kommentaren i din databas
		await db.read();
		// db.data.comment[commentId] = newComment;
		db.data.comment.push(newComment)
		await db.write();

		res.status(201).json({newComment }); // Returnera den nya kommentaren med dess ID och tidsstämpel som JSON
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Kunde inte spara kommentaren.' });
	}
});

export default router;
