import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="heading">Hey, my name is</div>
      <div className="name">Jerry Cox</div>
      <div className="subheading">Creating & building software.</div>
      <div className="about-me">
        Building intuitive, high-performance apps and software with clean code
        and thoughtful design. 
      </div>
    </div>
  );
};

export default Hero;
