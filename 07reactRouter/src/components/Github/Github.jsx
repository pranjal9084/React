import React, { Component, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'

function Github(){

    const data = useLoaderData()

    // const [data, setdata] = useState([]);
    
    // useEffect(() =>
    //     {fetch('https://api.github.com/users/pranjal9084')
    //     .then(response => response.json())
    //     .then(
    //         data => {
    //             console.log(data.name);
    //             setdata(data)
    //         }
    //     )}, []
    // )

    return (
        <div className='bg-amber-600 text-3xl p-2 m-2 text-white border-2 '>
            Github Followers : {data.followers}
            <div>
                <img className='bg-black grid-cols-4' src={data.avatar_url} alt="avatar image" width={300} />
            </div>
        </div>
    )
}

export default Github;

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/pranjal9084')
    return response.json()
}