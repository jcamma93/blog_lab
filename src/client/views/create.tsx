import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropDown from '../components/DropDown';

const Create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const nav = useNavigate();

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const res = await fetch('/api/blogs', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content })
        });

        const data = await res.json();

        if (res.ok) {
            nav(`/blogs/${data.id}`);
        } else {
            alert(`Unable to add Blog \n\n${data.message}`);
        }
    };

    return (
        <div className="row justify-content-center">
            <h1 className='text-center text-light'>Create a New Blog!</h1>
            <div className="col-12 col-md-8">
                <form className="p-2 bg-light rounded-2 shadow-1g">
                    <label className='text-info'>Blog Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
                    <label className='text-info'>Blog Content</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" />
                    <DropDown />
                    <button disabled={!title || !content} onClick={handleSubmit} className="btn btn-dark m-2">
                        Add Blog
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;