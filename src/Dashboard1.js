import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate(); // Hook to change the URL
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateQueryParams = () => { 
    const params = new URLSearchParams({ user: username, pwd: password });
    
    // Navigate to the same path with new query params
    navigate(`/dashboard?${params.toString()}`);
  };
  return (
    <div>
      <h1>It is the Dashboard Page</h1>
      <input 
        placeholder='Enter username' 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type='password'
        placeholder='Enter password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={updateQueryParams}>Update Query Params</button>
    </div>
  );
};
