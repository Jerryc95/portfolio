import React from "react";
import "./featuredProject.css";

const FeaturedProject = () => {
  const stack = [
    "React",
    "Express.JS",
    "Node.JS",
    "MongoDB",
    "Web Sockets",
    "Swift",
  ];

  return (
    <div className="featured-project-container">
      <div className="featured-project-title">Featured Project</div>
      <div className="feature-project-name">
        Nexus: Magic the gathering Companion
      </div>
      {/* image here  */}
      <div className="featured-project-details">
        <p className="featured-project-about">
          Nexus is a mobile and web app designed for Magic: The Gathering
          players who want to easily manage their health during games. With
          Nexus, players can keep track and of their own life total and the life
          totals of their opponents in real time, making it easier to stay
          focused on the game without worrying about constantly looking at
          everyone's dice or an app across the table.
        </p>
        <div className="project-stack">Tech used:</div>
        <ul>
          {stack.map((tech, id) => (
            <li className="feature-project-stack-item" key={id}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedProject;
