import React from "react";
import "./featuredProject.css";
import NexusGameExample from "./../assets/NexusGameExample.png";

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
      <div className="featured-project-title">My Work</div>
      <a
        className="project-link"
        href={"https://playnexus.app"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Nexus: MTG Companion
      </a>
      <div className="featured-project-details">
        <img
          className="featured-project-image"
          src={NexusGameExample}
          alt="Nexus Gameplay"
        />
        <div className="featured-project-about">
          <p>
            Nexus is an iOS and web app designed for Magic: The Gathering players
            who want to easily manage their health during games. With Nexus,
            players can keep track and of their own life total and the life
            totals of their opponents in real time, making it easier to stay
            focused on the game without worrying about constantly looking at
            everyone's dice or an app across the table.
          </p>
          <p>Technology Stack:</p>
          <div className="project-stack">
            <ul>
              {stack.map((tech, id) => (
                <li className="project-stack-item" key={id}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
