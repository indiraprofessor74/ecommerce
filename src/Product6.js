import React from 'react'
import { Productlist6 } from './Productlist6'
export const Product6 = ({un}) => {
  return (
    <div>
        <h3> Hi I am grandchild component and 
            username is {un}
        </h3>
        <Productlist6 u = {un} />
    </div>
  )
}
