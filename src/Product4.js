import React from 'react'
import { Productlist4 } from './Productlist4'
export const Product4 = ({un}) => {
  return (
    <div>
        <h3> I am grandchild component and username is
            {un}
        </h3>
        <Productlist4 ue = {un}/>
    </div>
  )
}
