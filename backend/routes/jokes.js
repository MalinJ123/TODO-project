import express from 'express';
import { getDb } from '../database.js';

const router = express.Router();
const db = getDb();

router.get('/', async (req, res) => {
	try {
		await db.read();
		res.status(200).json(db.data.jokes);
	} catch (error) {
		res.status(500).json({ error: 'Internal server fail' });
	}
});

// Skapa en GET-förfrågan med :id-parametern
router.get('/:id', async (req, res) => {
    try {
      // Hämta id-parametern från URL:en
      const jokeId = parseInt(req.params.id);
  
      // Sök efter skämtet med det specifika id:et i databasen
      const joke = db.data.jokes.find(j => j.id === jokeId);
  
      // Om skämtet hittades, skicka det som JSON-svar
      if (joke) {
        res.status(200).json(joke);
      } else {
        // Om skämtet inte hittades, skicka ett meddelande om att det inte finns
        res.status(404).json({ error: 'Skämtet kunde inte hittas' });
      }
    } catch (error) {
      // Om något går fel, skicka ett felmeddelande
      res.status(500).json({ error: 'Internal server fail' });
    }
  });

// Random - En get request för ett randomt skämt

router.get('/random', async (req, res) => {
    try {
      await db.read();
  
      // Generera ett slumpmässigt index för att välja ett slumpmässigt skämt
      const randomIndex = Math.floor(Math.random() * db.data.jokes.length);
  
      // Hämta det slumpmässiga skämtet från databasen
      const randomJoke = db.data.jokes[randomIndex];
  
      // Skicka det slumpmässiga skämtet som JSON-svar
      res.status(200).json(randomJoke);
    } catch (error) {
      res.status(500).json({ error: 'Internal server fail' });
    }
  });
  

export default router;
