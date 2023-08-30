import * as express from 'express';
import contactRouter from './contact';
import pizzaRouter from './pizza';

const router = express.Router();

router.use('/contact', contactRouter);
router.use('/pizza', pizzaRouter);

export default router;