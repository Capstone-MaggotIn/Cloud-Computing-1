import 'dotenv/config';
const PORT = process.env.PORT || 5000;

import express from 'express';
const app = express();

import articleRouters from './routes/articles.js';

app.use('/articles', articleRouters);

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});