import React, { useContext } from 'react'
import { Productlist1 } from './Productlist1'
import { context } from './App'
export const Product1 = ({data}) => {
  
  return (
    <div>
        <h1> I am Product Component  and user authentication is {data} </h1>
        <Productlist1 data = {data} />
    </div>
  )
}
export default Product1;