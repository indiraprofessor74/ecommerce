import React, { useContext } from 'react'
import { myContext } from './App'

export const Home6 = () => {
    const username = useContext(myContext)
  return (
    <div>
        <h2> Hi I am child component and user
            is {username}
        </h2>
        
    </div>
  )
}
