import * as express from 'express';
import blogsRouter from './blogs';
import authorsRouter from './authors';
// import contactRouter from './api/contact'
import apiRouter from './api';

const router = express.Router();

router.use('/blogs', blogsRouter);
router.use('/authors', authorsRouter);

router.use('/api', apiRouter);
// router.use('/api/contact', contactRouter);

export default router;