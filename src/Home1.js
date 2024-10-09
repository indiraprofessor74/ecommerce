import React from 'react'
import { myContext } from './App';
import { useContext } from 'react';
export const Home1 = () => {
  const userName = useContext(myContext); 
  return (
    <div>  
      <h1> Hi username from contextAPI is {userName} </h1>
    </div>
  )
}
//a = 5
//areaSquare(a)
//select * from studentmarks where rollno = ${rollno};