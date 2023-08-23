import express from 'express'
import {getDb} from '../database.js'


const router = express.Router()
const db = getDb()

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
  

// Skapa en ny kommentar
router.post('/', async (req, res) => {
	try {
	  const newComment = req.body; // Ta emot den nya kommentaren 
  
	  // Lägg till den nya kommentaren i din databas
	  await db.read();
	  db.data.comment.push(newComment);
	  await db.write();
  
	  res.status(201).json(newComment); // Returnera den nya kommentaren som JSON
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: 'Kunde inte skapa kommentaren.' });
	}
  });
  


export default router