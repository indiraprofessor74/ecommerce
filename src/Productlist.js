import React, { useContext } from 'react'
import { context } from './App'

export const Productlist = ({data}) => {
  let user = useContext(context)
  return (
    <div>
        <h1> I am Productlist component and the userauthentication is {data} </h1>
        <h3> and the user name is {user} </h3>
    </div>
  )
}
