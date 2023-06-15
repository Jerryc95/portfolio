import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="heading">Hey, my name is</div>
      <div className="name">Jerry Cox</div>
      <div className="subheading">Creating & building software.</div>
      <div className="about-me">
        I am an aspiring software engineer and app developer, seeking to
        transition from social media advertising to the field of software
        development. I am currently focused on building and developing
        full-stack applications.
      </div>
    </div>
  );
};

export default Hero;
