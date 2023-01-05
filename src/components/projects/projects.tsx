import React from "react";
import projectItems from "../../assets/projectItems";
import Project from "./project";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-title">Projects</div>
      <div className="projects-content">
        <div className="projects-body">Below you will find some of the work I've done so far with more to come!</div>
        <div className="project-cards">
          {projectItems.map((project) => (
            <Project
              title={project.title}
              description={project.description}
              github={project.github}
              stack={project.stack}
              cName={project.cName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
