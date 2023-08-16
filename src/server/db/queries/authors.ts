import { Query } from '../';
import { Author } from '../../../types';


const getAll = () => Query<Author[]>('SELECT * FROM Authors');
const getOne = (id: Author['id']) => Query<Author[]>('SELECT * FROM Authors WHERE id=?', [id]);
const create = (newAuthor: Author) => Query('INSERT INTO Authors SET ?', [newAuthor]);
const update = (editedAuthor: Author, id:Author['id']) => Query('UPDATE Authors SET ? WHERE id=?', [editedAuthor, id]);
const destroy = (id: Author['id']) => Query('DELETE FROM Authors WHERE');

export default {
    getAll,
    getOne,
    create,
    update,
    destroy
};









// const create = (newAuthor: CreatableAuthor) => 
// Query(`INSERT INTO Authors (name, email) VALUES (?,?)`, [
//     newAuthor.name, 
//     newAuthor.email
// ]);

// const create = (newAuthor: CreatableAuthor) => Query(`INSERT INTO Authors SET ?`, [newAuthor])
// const getAll = () => Query<{ id: number, name: string, email: string }[]>(`SELECT id, name, email FROM Authors`);

// export default {
//     create, 
//     getAll
// };