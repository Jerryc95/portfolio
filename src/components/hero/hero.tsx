import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="heading">Hey, my name is</div>
      <div className="name">Jerry Cox</div>
      <div className="subheading">Creating & building software.</div>
      <div className="about-me">
        Helping people and businesses turn their ideas into sites and apps that
        work fluently and are designed beautifully.
      </div>
    </div>
  );
};

export default Hero;
