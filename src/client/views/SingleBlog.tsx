import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BlogWithAuthor } from '../../types';
import BlogCard from '../components/BlogCard';

const SingleBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<BlogWithAuthor>();

    useEffect(() => {
        async function getBlog() {
            try {
                const res = await fetch('/api/blogs/' + id);
                const data = await res.json();

                if (res.ok) {
                    setBlog(data);
                } else {
                    alert(data.message);
                }
            } catch (error) {
                alert("An error has occured, please check console");
                console.error(error);
            }
        }
        getBlog();
    }, [id]);

    return (
        <div className='row justify-content-center'>
            <h1 className='text-center text-secondary'>Blog #{id}</h1>
            {blog && <BlogCard isSingle blog={blog} />}
        </div>
    );
};

export default SingleBlog;