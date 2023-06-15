import React from "react";
import "./about.css";

import self from "../../assets/self.png";

const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "express.js",
    "Swift",
    "Bootstraps",
    "CSS",
    "HTML",
    "SQL",
  ];

  return (
    <div className="about-container">
      <div>
        <div className="about-title">About Me</div>
        <div className="about-content">
          <p>
            Hey there! Thanks for stopping by! I'm Jerry, an apsiring software
            engineer driven by a deep passion for technology and software
            development. After making the decision to transition from the
            advertising industry, I wholeheartedly committed myself to pursuing
            my true passion of creating and building software. In May 2022, I
            made the choice to leave my position at Meta and embark
            on a journey of mastering software development.
          </p>
          <p>
            On the personal side, some of my passions and hobbies include gaming
            (I love a good story driving RPG), Dungeons & Dragons, Magic The
            Gathering, hiking, and drinking too much coffee.
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
        <img className="portrait" src={self} alt="portrait" />
      </div>
    </div>
  );
};

export default About;
