import React from 'react';
import { Product2 } from './Product2';
export const Home2 = ({ uname }) => { 
  return (
    <div>
      <h2>I am Home component and my prop value 
        is {uname}</h2>
       <Product2 un = {uname} />
    </div>
  );
};
