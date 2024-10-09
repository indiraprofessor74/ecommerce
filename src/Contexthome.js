import React, { useContext } from 'react';
import { myContext } from './App';

export const Contexthome = () => {
  const userName = useContext(myContext);

  return (
    <div>
     <h2> I am another component and my context API value is {userName} </h2>
    </div>
  );
};

export default Contexthome;
