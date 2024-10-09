import React from 'react'
import { useState } from 'react'
const App = () => {
  const [count, setCount] = useState(1)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}> Change </button>
      <h1> {count} </h1>
    </div>
  )
}

export default App