import React from "react";
import Hero from "../components/hero/hero";
import Nav from "../components/navBar/nav";
import About from "../components/about/about";
import FeaturedProject from "../components/featuredProject";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";

const HomePage: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="work">
        <FeaturedProject />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <p className="developed">Developed by Jerry Cox</p>
    </div>
  );
};

export default HomePage;
