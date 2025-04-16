import React from 'react';
import { Link } from 'react-router';
import './users4.css'
const Users4 = ({users3}) => {
    
    return (
        <div className='user'>
            <h1>{users3.name}</h1>
            <h1>{users3.email}</h1>
            <h1>{users3.phone}</h1>
            <Link to={`/users/${users3.id}`}>show Detaile</Link>
        </div>
    );
};

export default Users4;