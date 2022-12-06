import React, { Component } from "react";
import MenuItems from "./menuItems";
import Button from "../button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./nav.css";

// const ResumeLink = (
//   <a
//     className="resume"
//     href="/JerryCoxResume.pdf"
//     target="_blank"
//     rel="noreferrer"
//   >
//     Resume
//   </a>
// );

class Nav extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navBarItems">
        <h1 className="navbar-logo">JC</h1>
        {/* <div className="menu-icon" onClick={this.handleClick}>
          {this.state.clicked ? (
            // <i className="fa-solid fa-xmark"></i>
            <p>close</p>
          ) : (
            // <i className="fa-solid fa-bars"></i>
            <p>open</p>
          )}
        </div> */}
        <ul className={this.state.clicked ? "nav-menu-active" : "nav-menu"}>
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
  }
}

export default Nav;
