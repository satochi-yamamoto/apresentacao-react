import React from 'react';
import './style.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education'; // Esta linha deve aparecer APENAS UMA VEZ
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
// REMOVA esta segunda importação duplicada: import Education from './components/Education';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
