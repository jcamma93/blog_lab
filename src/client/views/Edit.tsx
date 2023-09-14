import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Edit = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const nav = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function getBlog() {
            try {
                const res = await fetch('/api/blogs/' + id);
                const data = await res.json();

                if (res.ok) {
                    setTitle(data.title);
                    setContent(data.content);
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

    const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const res = await fetch(`/api/blogs/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content })
        });

        const data = await res.json();

        if (res.ok) {
            nav(`/blogs/${id}`);
        } else {
            alert(`Unable to add Blog \n\n${data.message}`);
        }
    };

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
        const data = await res.json();

        if (res.ok) {
            nav(`/blogs`);
        } else {
            alert(`Unable to add Blog \n\n${data.message}`);
        }

    };

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-8">
                <form className="p-2 bg-light rounded-2 shadow-1g">
                    <h1 className='text-center text-secondary'>Editing Blog #{id}</h1>
                    <label className='text-info'>Blog Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
                    <label className='text-info'>Blog Content</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" />
                    <button disabled={!title || !content} onClick={handleUpdate} className="btn btn-primary m-2">
                        Update Blog
                    </button>
                    <button onClick={handleDelete} className="btn btn-danger">
                    🚽
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Edit;