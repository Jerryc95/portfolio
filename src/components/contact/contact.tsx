import React from "react";
import Button from "../button/button";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-title">Contact me</div>
      <div className="contact-container">
        <div className="contact-content">
          <p>
            Thank you for stopping by and checking out some of my work. It means
            so much to me. As a self-taught developer, I never thought I'd be
            able to achieve anything that I've done so far and I'm just getting
            started.
          </p>
          <p>
            Please do not hesitate to reach out if you would like to contact me.
          </p>
        </div>
        <div>
          <a href="mailto:jerry.cox95@gmail.com">
            <Button>Contact Me</Button>
          </a>

          <div className="contact-links">
            <a
              href="https://github.com/Jerryc95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github contact-link"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jerrycox52/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin contact-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
