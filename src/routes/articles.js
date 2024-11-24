import express from 'express';
import { getAllArticles, getArticleById } from '../controller/articles.js';

const router = express.Router();

//READ - GET articles
router.get('/', getAllArticles);

//READ - GET detail article
router.get('/:idArcticle', getArticleById);

export default router;