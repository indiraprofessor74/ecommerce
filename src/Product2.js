import React from 'react'
import { Productlist2 } from './Productlist2'
export const Product2 = ({un}) => {
  return (
    <div>
    <h2> I am product component and my prop 
        is {un} </h2>
        <Productlist2 ue ={ un} />
    </div>
  )
}
