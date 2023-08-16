import { Query } from '../';
import { Tag } from '../../../types';


const getAll = () => Query<Tag[]>('SELECT * FROM Tags');
const getOne = (id: Tag['id']) => Query<Tag[]>('SELECT * FROM Tags WHERE id=?', [id]);
const create = (newTag: Tag) => Query('INSERT INTO Tags SET ?', [newTag]);
const update = (editedTag: Tag, id:Tag['id']) => Query('UPDATE Tags SET ? WHERE id=?', [editedTag, id]);
const destroy = (id: Tag['id']) => Query('DELETE FROM Tags WHERE');

export default {
    getAll,
    getOne,
    create,
    update,
    destroy
};