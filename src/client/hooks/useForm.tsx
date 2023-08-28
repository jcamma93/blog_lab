// import * as React from 'react';
// import { useState } from 'react';

// interface FormItem {
//     label: string;
//     name: string;
//     type?: string;
//     shouldConfirm?: boolean;
//     isTextArea?: boolean;
// }

// type FormProps = FormItem[];

// function useForm(items: FormProps): [React.JSX.Element[], any] {
//     const tempObject = {}
//     for (let i = 0; i < items.length; i++) {
//         tempObject[items[i].name] = ""
//     }

//     const [data, setData] = useState(tempObject);

//     const handleUpdateState = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setData({
//             ...data, [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.preventDefault();
//         fetch('/api/contact', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ from, subject, message })
//         })
//         .then(res => res.json())
//         .then(result => console.log(result))
//     }

//     const elements = items.map(i => (
//         <div>
//             <label htmlFor="">{i.label}</label>
//             <input className='form-control' onChange={handleUpdateState} type={i.type || 'text'} value={data[i.name]} name={i.name} />
//             <button onClick={handleSubmit}>Contact!</button>
//         </div>
//     ))
//     return [elements, data]
// };

// export default useForm;