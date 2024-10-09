import React, { useContext } from 'react'
import { myContext } from './App'

export const Productlist6 = () => {
    const user = useContext(myContext)
  return (
    <div>
        <h4> 
            Hi I am great grandchild component 
            and user is {user}
        </h4>
    </div>
  )
}
