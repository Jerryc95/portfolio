import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="heading">Hey, my name is</div>
      <div className="name">Jerry Cox</div>
      <div className="subheading">Creating & building software.</div>
      <div className="about-me">
        I'm an aspiring software engineer and app developer looking to shift
        careers from social media advertising and break into the field of
        software developement. Currently, I am learning and developing fullstack
        applications with a focus on front-end.
      </div>
    </div>
  );
};

export default Hero;
