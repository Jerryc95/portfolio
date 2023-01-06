import React, { useState } from "react";
import MenuItems from "./menuItems";
import Button from "../button/button";

import "./nav.css";

const Nav = () => {
  const [toggleClick, setToggleClick] = useState(false);

  const handleClick = () => {
    if (toggleClick === false) {
      setToggleClick(true);
    } else {
      setToggleClick(false);
    } 
  };

  return (
    <nav className="navBarItems">
      <h1 className="navbar-logo">JC</h1>
      <div className="menu-icon" onClick={handleClick}>
        {toggleClick ? (
          <i className="fa-solid fa-xmark"></i>        
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
      <ul className={toggleClick ? "nav-menu-active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Button>Resume</Button>
    </nav>
  );
};

export default Nav;
