import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Views/Home'
import About from './Views/About'
import Skills from './Views/Skills'
import Projects from './Views/Projects'
import Contact from './Views/Contact'
import ScrollToTop from './Components/ScrollToTop'
import Footer from './Components/Footer'

import { motion, useScroll } from "framer-motion";

function App() {

  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
        <Footer />
        <motion.div style={{ scaleX: scrollYProgress,transformOrigin: "left",height: "4px",background: "#8FA5FF",position: "fixed",top: 0,
    left: 0,
    right: 0,
    zIndex: 999,}} />

      </div>
    </>
  )
}

export default App