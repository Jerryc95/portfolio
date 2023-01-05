import React from 'react';
import './App.css';
import Hero from '../components/hero/hero'
import Nav from '../components/navBar/nav'
import About from '../components/about/about'
import Projects from '../components/projects/projects';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
