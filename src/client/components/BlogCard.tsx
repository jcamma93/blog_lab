import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogWithAuthor } from '../../types';

const BlogCard = ({ blog, isSingle }: BlogCardProps) => {
    const nav = useNavigate();

    const handleNavigate = () => {
        if (!isSingle) {
            nav(`/blogs/${blog.id}`);
        }
    }

    return (
        <div onClick={handleNavigate} className={'col-12 col-md-5'}>
            <div className='card m-2 bg-light'>
                <div className="card-title">{blog?.title}</div>
                <div className="card-body">{blog?.content.split('\n').map((p, idx) => {
                    return (
                        <React.Fragment key={`p-${idx}`}>
                            <p>{p}</p>
                            <br />
                        </React.Fragment>
                    );
                })}
                </div>
                <div className="card-footer">@{blog?.authorname}</div>
                {isSingle && (
                    <button onClick={() => nav(`/blogs/${blog.id}/edit`)} className='btn btn-secondary'>
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default BlogCard;


interface BlogCardProps {
    isSingle?: boolean;
    blog: BlogWithAuthor;
}