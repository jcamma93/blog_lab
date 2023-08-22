import { Query } from '../';
import { Blog, BlogTag, Tag } from '../../../types';


const getAll = () => Query<BlogTag[]>('SELECT * FROM BlogTags');
const getOne = (blogid: Blog['id'], tagid: Tag['id']) => Query<Tag[]>('SELECT * FROM BlogTags WHERE id=?', [blogid, tagid]);
const create = (blogid: Blog['id'], tagid: Tag['id']) => Query('INSERT INTO BlogTags SET ?', [blogid, tagid]);
const update = (editedBlogTag: BlogTag, blogid: Blog['id'], tagid: Tag['id']) => Query('UPDATE BlogTags SET ? WHERE id=?', [editedBlogTag, blogid, tagid]);
const destroy = (blogid: Blog['id'], tagid: Tag['id']) => Query('DELETE FROM BlogTags WHERE');

export default {
    getAll,
    getOne,
    create,
    update,
    destroy
};