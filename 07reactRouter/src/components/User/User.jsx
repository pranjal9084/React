import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

function User(){
    const {id} = useParams();
    return(
        <div className='bg-amber-600 text-3xl text-white p-3.5'>
            User: {id}
        </div>
    )
}

export default User;