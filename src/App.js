import React, { useState, createContext } from 'react';
import { Productlist7 } from './Productlist7';
import { Home7 } from './Home7';
import { Product7 } from './Product7';
export const myContext = createContext();
export const App = () => {
  const [username] = useState('Jesvin'); // Destructure the value from useState
  return (
    <div>
      <myContext.Provider value={username}>
        <Productlist7 />
        <Home7 />
        <Product7 />
      </myContext.Provider>
    </div>
  );
};

export default App;
