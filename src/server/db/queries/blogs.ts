import { Query } from '../';
import { Blog, BlogWithAuthor } from '../../../types';


const getAll = () => Query<BlogWithAuthor[]>(`
    SELECT b.*, a.name as authorname, a.email 
        FROM Blogs b 
        JOIN Authors a 
        ON a.id=b.authorid
`);

const getOne = (id: Blog['id']) => Query<BlogWithAuthor[]>(`
    SELECT b.*, a.name as authorname, a.email 
        FROM Blogs b 
        JOIN Authors a 
        ON a.id=b.authorid 
        WHERE b.id=?`, [id]);

const create = (newBlog: Blog) => Query('INSERT INTO Blogs SET ?', [newBlog]);
const update = (editedBlog: Blog, id: Blog['id']) => Query('UPDATE Blogs SET ? WHERE id=?', [editedBlog, id]);
const destroy = (id: Blog['id']) => Query('DELETE FROM Blogs WHERE');

export default {
    all: getAll,
    find: getOne,
    create,
    update,
    delete: destroy
};