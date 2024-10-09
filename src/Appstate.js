import React from 'react'
import { useState } from 'react'
export const App = () => {
    const [a,setA] = useState(2)
  return (
    <div>
         {a}
         <button onClick={()=>setA(a+1)}>
            Change
            
         </button>
    </div>
  )
}
export default App;