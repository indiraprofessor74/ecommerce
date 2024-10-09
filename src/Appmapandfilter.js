import React from 'react'

const App = () => {
    const nos = [1,2,3,5,5];
    const filteredNos = nos.filter(nos=> nos> 2 );
    
  return (
    <div>App
      {filteredNos.map((no,index) => <li key = {index}>{no}</li>)}
       {} 
       <p> {filteredNos.join(',')} </p>
    </div>
    
  )
} 

export default App