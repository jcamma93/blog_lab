import { Query } from '../';
import { Blog, BlogWithAuthor } from '../../../types';


const getAll = () => Query<BlogWithAuthor[]>(`
    SELECT b.*, a.name as authorname, a.email 
        FROM Blogs b 
        JOIN Authors a 
        ON a.id=b.author_id
`);

const getOne = (id: Blog['id']) => Query<BlogWithAuthor[]>(`
    SELECT b.*, a.name as authorname, a.email 
        FROM Blogs b 
        JOIN Authors a 
        ON a.id=b.author_id 
        WHERE b.id=?`, [id]);

const create = (newBlog: Blog) => Query('INSERT INTO Blogs SET ?', [newBlog]);
const update = (editedBlog: Blog, id: Blog['id']) => Query('UPDATE Blogs SET ? WHERE id=?', [editedBlog, id]);
const destroy = (id: Blog['id']) => Query('DELETE FROM Blogs WHERE id=?', [id]);

export default {
    all: getAll,
    find: getOne,
    create,
    update,
    delete: destroy
};