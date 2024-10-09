import React from 'react';
import { useState } from 'react';

const App = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const changeHandler = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <input 
                type='text' 
                placeholder='Enter username'
                name='username' 
                value={data.username} 
                onChange={changeHandler} 
            />

            <input 
                type='password' 
                placeholder='Enter password'
                name='password' 
                value={data.password} 
                onChange={changeHandler} 
            />

            <h2> {data.username} </h2>
            <h2> {data.password} </h2>
        </div>
    );
};

export default App;
