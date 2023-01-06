import React from "react";
import "./project.css";

interface projectProp {
  title: string;
  description: string;
  github: string;
  link: string;
  stack: string[];
  cName: string;
}

const Project: React.FC<projectProp> = (props) => {
  return (
    <div className={props.cName}>
      <div className="card-header">
        {props.title}
        <div className="card-links">
          {props.link !== "" ? (
            <a
              href={props.link}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {""}
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          ) : (
            <></>
          )}
          <a
            href={props.github}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {""}
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div className="card-description">{props.description}</div>
      <div className="card-stacks">
        {props.stack.map((i) => (
          <span className="card-stack">{i} </span>
        ))}
      </div>
    </div>
  );
};

export default Project;
