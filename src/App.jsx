import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Views/Home'
import About from './Views/About'
import Skills from './Views/Skills'
import Projects from './Views/Projects'
import  Contact  from './Views/Contact'
import ScrollToTop from './Components/ScrollToTop'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <ScrollToTop />
        <Footer/>
      </div>
    </>
  )
}

export default App