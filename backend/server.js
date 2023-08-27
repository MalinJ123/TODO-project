// import * as dotenv from "dotenv";
import fs from 'fs';
import express from 'express';
import cors from 'cors';
import commentRouter from './routes/httpComment.js';
import jokesRouter from './routes/jokes.js';

const app = express();
const port = process.env.PORT || 1337;

//Express - ser till att du kan tolka JSON-data i min server, sålänge den ligger före routarna.
app.use(express.json());

//Middleware skriver ut information om inkommande request i terminalen
app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url}`, req.body);
	next();
});

// CORS - måste finnas för att servern ska lägga till CORS headers. Det krävs för att en frontend ska kunna skicka request med "fetch" till en backend på en annan webbserver.
app.use(cors());

//Backend Routes
app.use('/api/comment', commentRouter);
app.use('/api/jokes', jokesRouter);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`);
});

// på insomnia http://localhost:1337/api/comment
