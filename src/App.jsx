import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Views/Home'
import About from './Views/About'
import Skills from './Views/Skills'
import ScrollToTop from './Components/ScrollToTop'

function App() {
  return (
    <>
      <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <ScrollToTop />
      </div>
    </>
  )
}

export default App