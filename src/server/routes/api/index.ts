import * as express from 'express';
import contactRouter from './contact';
import pizzaRouter from './pizza';
import blogsRouter from './blogs';
import authorsRouter from './authors';

const router = express.Router();

// prefixed with /api
router.use('/contact', contactRouter);
router.use('/pizza', pizzaRouter);
router.use('/blogs', blogsRouter);
router.use('/authors', authorsRouter)

export default router;