import React from "react";
import "./button.css";

interface Props {
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
