import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Views/Home'

function App() {
  return (
    <>
      <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
        <Navbar/>
        <Home/>
      </div>
    </>
  )
}

export default App