import React from "react";
import "./project.css";

interface projectProp {
  title: String;
  description: String;
  github: String;
  link?: String;
  stack: String[];
  cName: string;
}

const Project: React.FC<projectProp> = (props) => {
  return (
    <div className={props.cName}>
      <div className="card-header">{props.title}</div>
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
