import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import CurrentProject from './components/CurrentProject/CurrentProject';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Content from './components/Content/Content';
import Recommendations from './components/Recommendations/Recommendations';
import Contact from './components/Contact/Contact';
import BackToTop from './components/BackToTop/BackToTop';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import SVBot from './components/SVBot/SVBot';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId;
    const handleMouseMove = (e) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="App">
      <ParticlesBackground />
      <div 
        className="cursor-glow" 
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <CurrentProject />
      <Projects />
      <Achievements />
      <Content />
      <Recommendations />
      <Contact />
      <SVBot />
      <BackToTop />
    </div>
  );
}

export default App;
