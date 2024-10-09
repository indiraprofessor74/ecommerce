import React from 'react'

export const App = () => {
    const marks = [20,30,40,50,60,50,60]
  return (
    <div>
     {marks.map((mark,index)=>(<li key = {index}>{mark}</li>))}
    </div>
  ) 
}
export default App;