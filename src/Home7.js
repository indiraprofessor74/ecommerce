import React, { useContext } from 'react'
import { myContext } from './App'

export const Home7 = () => {
    const username = useContext(myContext)
  return (
    <div>
        <h2> Hi I am child and 
            username is  {username} 
        </h2>
        </div>
  )
}
