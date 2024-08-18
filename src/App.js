import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Navbar/intro/Intro'
import Skills from './components/Navbar/Skills/Skills'
import Works from './components/Navbar/Works/Works'
import Contact from './components/Navbar/Contact/Contact'
import Experience from './components/Navbar/Experience/Experience'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Experience/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default App
