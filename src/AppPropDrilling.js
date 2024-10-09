import React, { useState } from 'react'
import { Home1 } from './Home1'


export const App = () => {
const [isAuthentic] = useState(
     "correct"
)
  return (
    <div>
        <Home1 data = {isAuthentic} />
        
    </div>
  )
}
export default App;