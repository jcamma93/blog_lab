import * as express from 'express';
import Blogs from '../db/queries/blogs';
import { Blog } from '../../types';


const blogsRouter = express.Router();

blogsRouter.get('/', async (req, res) => {
    try {
        const blogs = await Blogs.all();
        res.json(blogs);
    } catch( error) {
        console.log(error);
        res.status(500).json({ message: "An application error has occured, please check the server logs" });
    }
});

blogsRouter.get('/:id', async (req, res) => {
   const id = parseInt(req.params.id); 

    if (!id) return res.status(400).json({ message: 'ID must be a valid integer' });

    try {
        const [blog] = await Blogs.find(id);

        if (!blog) return res.status(404).json({ message: 'Blog with that ID does not exist' })

        res.json(blog);
    } catch( error) {
        console.log(error);
        res.status(500).json({ message: "An application error has occured, please check the server logs" });
    }
});

blogsRouter.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) return res.status(400).json({ message: 'ID must be an integer'});

    try {
       const { affectedRows } = await Blogs.delete(id);
        
       if (affectedRows) {
       res.status(200).json({ message: 'Successfully deleted'})
    } else {
        res.status(200).json({ message: 'Deletion successful, but there was nothing to delete' })
    }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An unknown application error has occured, please check the server logs'});
    }
});

blogsRouter.post('/', async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content ) return res.status(400).json({ message: "All fields must contain valid inputs"})
    
    const newBlog: Blog = { title, content, authorid: 1 };

    try{
        const blog = await Blogs.create(newBlog)
        res.status(201).json({ message: "Blog created successfully", id: blog.insertId })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An unknown application error has occured, please check the server logs" });
    }
});

blogsRouter.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    if (!id) return res.status(400).json({ message: "Id must be a valid integer" });

    const { title, content } = req.body;

    if (!title || !content ) return res.status(400).json({ message: "All fields must contain valid inputs"})
    
    const updatedBlog: Blog = { title, content, authorid: 1 };

    try{
        const blog = await Blogs.update(updatedBlog, id); 
        res.status(201).json({ message: "Blog edited successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An unknown application error has occured, please check the server logs" });
    }
});




export default blogsRouter;
