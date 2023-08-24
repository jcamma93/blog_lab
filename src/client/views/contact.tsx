import * as React from 'react';


const Contact = () => {
    const [data, form] = useForm([
        { name: 'name', label: 'Your name' }
        { name: 'email', label: 'Your email' }
        { name: 'message', label: 'Additional message' }
    ]);
    
    return (
        <div className='row justify-content-center'>
            <h1 className='text-center'>Contact</h1>
        </div>
    )
};

export default Contact;