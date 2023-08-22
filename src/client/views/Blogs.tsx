import * as React from 'react';
import { useState, useEffect } from 'react';
import { BlogWithAuthor } from '../../types';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState<BlogWithAuthor[]>([]);
    

    useEffect(() => {
        async function getBlogs() {
            try {
                const res = await fetch('/api/blogs');
                const data = await res.json();

                if (res.ok) {
                    setBlogs(data);
                } else {
                    alert(data.message);
                }
            } catch (error) {
                alert("An error has occured, please check console");
                console.error(error);
            }
        }
        getBlogs();
    }, []);


    return (
        <div className='row justify-content-center'>
            <h1 className='text-center text-secondary'>Blogs</h1>
            {blogs.map(b => (
                <BlogCard blog={b} key={`blog-card-${b.id}`} />
            ))}
        </div>
    );
};

export default Blogs;