import * as React from 'react';
import { useState } from 'react';

const Contact = () => {
    const [from, setFrom] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ from, subject, message })
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }
    return (
        <main className='container my-5'>
            <section className='row justify-content-center'>
                <div className="col md-6">
                    <h1 className='text-center text-light'>Contact</h1>
                    <form className='form-group p-3 border rounded shadow'>
                        <input placeholder='Email' value={from} onChange={e => setFrom(e.target.value)} className='form-control mb-3' />
                        <input placeholder='Subject' value={subject} onChange={e => setSubject(e.target.value)} className='form-control mb-3' />
                        <textarea placeholder='Message' value={message} onChange={e => setMessage(e.target.value)} className='form-control mb-3' />
                        <button onClick={handleSubmit} className='btn btn-primary'>Contact!</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Contact;