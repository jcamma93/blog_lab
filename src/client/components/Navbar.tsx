import * as React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-info p-2'>
            <Link className='btn btn-outline-primary m-2' to={'/'}>Home</Link>
            <Link className='btn btn-outline-success m-2' to={"/create"}>New Blog</Link>
            <Link className='btn btn-outline-secondary m-2' to={"/blogs"}>All Blogs</Link>
            {/* <Link className='btn btn-secondary m-2' to={"/blogs/4"}>Blog #4</Link>
            <Link className='btn btn-secondary m-2' to={"/blogs/4/edit"}>Edit Blog #4</Link> */}
        </div>
    )
};

export default Navbar;