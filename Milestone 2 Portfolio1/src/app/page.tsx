import React from 'react'
import Navbar from './Navbar/page'
import Hero from './Home/page'
import About from './About/page'
import Skill from './Skills/page'
import Project from './Projects/page'
import Contact from './Contact/page'

function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      
    </div>
  )
}

export default page
