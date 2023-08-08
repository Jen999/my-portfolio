import React from "react";
import toggle from "../functions/toggle";

export default function HomePageNavBar() {
  
    return (
      <div className="navbar" id="navbar">
        <ul>
          <li onClick={toggle.bind(null, '.togglebox')}><a href="#home">Home</a></li>
          <li onClick={toggle.bind(null, '.togglebox')}><a href="#about">About Me</a></li>
          <li onClick={toggle.bind(null, '.togglebox')}><a href="#education">Education</a></li>
          <li onClick={toggle.bind(null, '.togglebox')}><a href="#experience">Experience</a></li>
          <li onClick={toggle.bind(null, '.togglebox')}><a href="#projects">Projects</a></li>
        </ul>
      </div>
    );
}