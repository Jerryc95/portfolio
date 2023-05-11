import React from "react";
import "./about.css";

import self from '../../assets/self.png'

const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "express.js",
    "Swift",
    "Bootstraps",
    "SQL",
  ];

  return (
    <div className="about-container">
      <div>
        <div className="about-title">About Me</div>
        <div className="about-content">
          <p>
            Hey there! Thanks for stopping by! I'm Jerry and I'm an apsiring
            software engineer. I've always had a passionate for software and
            technology so I decided to leave the advertising industry and focus
            on my true passion of creating and building software. In May of
            2022, I left my job at Meta to pursue my passion and teach myself
            software development.
          </p>
          <p>
            On the personal side, some of my passions and hobbies include gaming
            (I love a good story driving RPG), Dungeons & Dragons, Magic The
            Gathering, hiking, playing some guitar and drinking too much coffee.
          </p>
          <p>
            Below you can see some of the languages, frameworks and libraries I
            work with:
          </p>
          <ul className="skill-list">
            {skills.map((skill, id) => (
              <li className="skill-item" key={id}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      <div>
        <img className="portrait" src= {self}  alt="portrait"/>
      </div>
    </div>
  );
};

export default About;
