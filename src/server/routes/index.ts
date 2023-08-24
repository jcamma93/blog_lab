import * as express from 'express';
import blogsRouter from './blogs';
import authorsRouter from './authors';
import contactRouter from './contact'

const router = express.Router();

router.use('/blogs', blogsRouter);
router.use('/authors', authorsRouter);

router.use('/contact', contactRouter);

export default router;