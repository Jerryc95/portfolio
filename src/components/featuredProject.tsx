import React from "react";
import "./featuredProject.css";
import NexusGameExample from "./../assets/NexusGameExample.png";
// import AWRExample from "./../assets/AWRHomePage.png";
import AWRExample from "./../assets/AWRHomePage.png"

const FeaturedProject = () => {
  const nexusStack = [
    "React",
    "Express.JS",
    "Node.JS",
    "MongoDB",
    "Web Sockets",
    "Swift",
  ];

  const AWRStack = ["HTML", "CSS", "JavaScript"];

  return (
    <div className="featured-project-container">
      <div className="featured-project-title">My Work</div>
      <div>
        <a
          className="project-link"
          href={"https://playnexus.app"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Nexus: MTG Companion
        </a>
        <div className="featured-project-details">
          <div className="featured-project-image-container">
            <img
              className="featured-project-image"
              src={NexusGameExample}
              alt="Nexus Gameplay"
            />
          </div>

          <div className="featured-project-about">
            <p>
              Nexus is an iOS and web app designed for Magic: The Gathering
              players who want to easily manage their health during games. With
              Nexus, players can keep track and of their own life total and the
              life totals of their opponents in real time, making it easier to
              stay focused on the game without worrying about constantly looking
              at everyone's dice or an app across the table.
            </p>
            <p>Technology Stack:</p>
            <div className="project-stack">
              <ul>
                {nexusStack.map((tech, id) => (
                  <li className="project-stack-item" key={id}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a
          className="project-link"
          href={"https://storied-hotteok-4bfb61.netlify.app/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Adventures By Rocco
        </a>
        <div className="featured-project-details-reverse">
          <div className="featured-project-image-container">
            <img
              className="featured-project-image"
              src={AWRExample}
              alt="Adventures With Rocco home page"
            />
          </div>

          <div className="featured-project-about">
            <p>
              I had the pleasure of developing a vibrant and user-friendly
              website for Rocco, providing visitors with a
              seamless experience to plan and book enchanting trips to Disney
              and other renowned parks like Universal. The site serves as a
              convenient hub for travelers to connect with my client,
              transforming the magic of Disney into personalized and
              unforgettable adventures.
            </p>
            <p>Technology Stack:</p>
            <div className="project-stack">
              <ul>
                {AWRStack.map((tech, id) => (
                  <li className="project-stack-item" key={id}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
