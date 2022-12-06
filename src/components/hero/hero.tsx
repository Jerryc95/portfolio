import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section>
      <h1 className="heading">Hi, my name is</h1>
      <h2 className="name">Jerry Cox</h2>
      <h3 className="subheading">Creating & building software for the web.</h3>
      <p className="about-me">
        I'm an aspiring software engineer and app developer looking to shift
        careers from social media advertising and break into the field of
        software developement. Currently, I am learning and developing fullstack
        applications with a focus on front-end.
      </p>
      <h4>WORK IN PROGRESS!</h4>
      <h5>
        Thank you for stopping by! I'm currently in the process of building and
        showcasing my work here. Please check later! for now, please visit my{" "}
        <a className="app-link" href="https://github.com/Jerryc95">GitHub</a>.{" "}
      </h5>
    </section>
  );
};

export default Hero;
