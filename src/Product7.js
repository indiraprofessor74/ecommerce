import React, { useContext } from 'react'
import { myContext } from './App'

export const Product7 = () => {
    const username = useContext(myContext)
  return (
    <div>
        <h3> Hi i am grand child and 
            user name is {username}
        </h3>
        
    </div>
  )
}
