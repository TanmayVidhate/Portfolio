import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Views/Home'
import About from './Views/About'

function App() {
  return (
    <>
      <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
        <Navbar/>
        <Home/>
        <About/>
      </div>
    </>
  )
}

export default App