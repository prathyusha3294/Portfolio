import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Navbar/intro/Intro'
import Skills from './components/Navbar/Skills/Skills'
import Works from './components/Navbar/Works/Works'
import Contact from './components/Navbar/ContactMe'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default App
