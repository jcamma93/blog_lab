import * as express from 'express';
import blogsRouter from './blogs';

const router = express.Router();

router.get('/api/blogs', blogsRouter);

export default router;