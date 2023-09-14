import * as React from 'react';
import { useState, useEffect } from 'react';
import  { apiService }  from '../services/api-service';

interface DropDownProps {}

const DropDown = (props: DropDownProps) => {
    const [selected, setSelected] = useState<string>('');
    const [users, setUsers] = useState<{ [key: string]: string }[]>([]);

    useEffect(() => {
        apiService('https://jsonplaceholder.typicode.com/users').then(users => setUsers(users));
    }, []);

    return (
        <div>
            <h1></h1>
            <select value={selected} onChange={e => setSelected(e.target.value)}>
            <option value="0">Select a user ...</option>
            {users.map(user => (
                <option key={`user-${user.id}`} value={user.id}>{user.name}</option>
            ))}
            </select>
        </div>
    );
};

export default DropDown;