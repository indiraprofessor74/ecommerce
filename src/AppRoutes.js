import React from 'react'
import { Navbar } from './Navbar'
import { Home } from './Home'
import { Dashboard } from './Dashboard'
import { About } from './About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar />
      <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/dashboard' element = {<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;