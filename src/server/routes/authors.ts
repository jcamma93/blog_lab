import * as express from 'express';
import Authors from '../db/queries/authors';
import { Author } from '../../types';


const authorsRouter = express.Router(); 

authorsRouter.get('/', async (req, res) => {
    try {
        const authors = await Authors.all();
        res.json(authors);
    } catch( error) {
        console.log(error);
        res.status(500).json({ message: "An application error has occured, please check the server logs" });
    }
});

authorsRouter.get('/:id', async (req, res) => {
   const id = parseInt(req.params.id); 

    if (!id) return res.status(400).json({ message: 'ID must be a valid integer' });

    try {
        const [author] = await Authors.find(id);

        if (!author) return res.status(404).json({ message: 'Author with that ID does not exist' })

        res.json(author);
    } catch( error) {
        console.log(error);
        res.status(500).json({ message: "An application error has occured, please check the server logs" });
    }
});

export default authorsRouter;