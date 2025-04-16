
import { useLoaderData } from 'react-router';
import './userDtailes.css'


const UsersDtailed = () => {
    const usersTo=useLoaderData()
    const {website,name}=usersTo;
   
    return (
        <div >
            <h3>user in my home</h3>
            <div className='cover'>
                <h1>{name}</h1>
                <p>{website}</p>
            </div>
        </div>
    );
};

export default UsersDtailed; <h3>user in my home</h3>