// src/App.jsx

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <Hero /> 
      <About />
      <Skills />
      <Projects />
      <Education />
       <Certifications /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;