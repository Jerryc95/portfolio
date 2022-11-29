import React from "react";
import './hero.css';

// const one = <h1>Hi, my name is</h1>;
// const two = <h2 className="heading">Jerry Cox</h2>;
// const three = <h3 className="heading">Creating & building software</h3>;
// const four = <p>
//     I'm an aspiring software engineer looking to break into the field of web developement. 
//     Currently, I am learning how to create full-stack web applications using a PERN stack.
// </p>;

// const items = (one, two, three, four);

const Hero = () => {
    return(
        <section>
         <h1>Hi, my name is</h1>
        <h2 className="heading">Jerry Cox</h2>
        <h3 className="heading">Creating & building software for the web.</h3>
        <p>
            I'm an aspiring software engineer and app developer looking to shift careers from social media advertising
            and break into the field of software developement. Currently, I am learning and developing fullstack applications with 
            a focus on front-end.
        </p>
        <h4>WORK IN PROGRESS!</h4>
        <h5>Thank you for stopping by! I'm currently in the process of 
            building and showcasing my work here. Please check later! for know, please visit my <a href="https://github.com/Jerryc95">GitHub</a> </h5>
        </section>
    );
}

export default Hero;
