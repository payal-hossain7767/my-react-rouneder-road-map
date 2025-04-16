import React, { use } from 'react';
import Users4 from '../users4/users4';

const Users2 = ({userPromise}) => {
    const userse=use(userPromise)
 return (
        <div>
            {
                userse.map((users3,index)=><Users4 key={index} users3={users3}></Users4>)
            }
        </div>
    );
};

export default Users2;