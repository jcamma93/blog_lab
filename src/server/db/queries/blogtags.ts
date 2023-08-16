// import { Query } from '../';
// import { Blog, BlogTag, Tag } from '../../types';


// // const getAll = () => Query<Author[]>('SELECT * FROM Authors');
// const getOne = (id: Author['id']) => Query<Author[]>('SELECT * FROM Authors WHERE id=?', [id]);
// const create = (newAuthor: Author) => Query('INSERT INTO Authors SET ?', [newAuthor]);
// const update = (editedAuthor: Author, id:Author['id']) => Query('UPDATE Authors SET ? WHERE id=?', [editedAuthor, id]);
// const destroy = (id: Author['id']) => Query('DELETE FROM Authors WHERE');

// export default {
//     getAll,
//     getOne,
//     create,
//     update,
//     destroy
// };