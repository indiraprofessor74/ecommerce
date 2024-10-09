import React, { useContext } from 'react';
import { myContext } from './App';

export const Productlist7 = () => {
  const username = useContext(myContext);
  return (
    <div>
      <h4>I am great grand child and the username is 
        {username}</h4>
    </div>
  );
};
