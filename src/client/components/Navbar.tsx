import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-info p-2'>
            {/* <Link className='btn btn-outline-warning m-2' to={'/donate'}>Donate</Link> */}
            <Link className='btn btn-outline-primary m-2' to={'/contact'}>Contact Us</Link>
            <Link className='btn btn-outline-success m-2' to={"/create"}>New Blog</Link>
            <Link className='btn btn-outline-secondary m-2' to={"/blogs"}>All Blogs</Link>
            <Link className='btn btn-outline-warning m-2' to={"/pizza"}>Pizza Party?</Link>
            <Link className='btn btn-outline-light m-2' to={"/login"}>Login</Link>
        </div>
    )
};

export default Navbar;