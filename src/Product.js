import React, { useContext } from 'react'
import { Productlist } from './Productlist'
import { context } from './App'
export const Product = ({data}) => {
  let user = useContext(context)
  return (
    <div>
        <h1> I am Product Component  and user authentication is {data} </h1>
        <h2> and the username is {user} </h2>
        <Productlist data = {data} />
    </div>
  )
}
