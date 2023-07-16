import React from "react";

export default function HomePageNavBar() {
    return (
      <div className="navbar" id="navbar">
        <ul>
          <li><a href="#home" style={{'--i':0}}>Home</a></li>
          <li><a href="#about" style={{'--i':1}}>About Me</a></li>
          <li><a href="#education" style={{'--i':2}}>Education</a></li>
          <li><a href="#experience" style={{'--i':3}}>Experience</a></li>
          <li><a href="#projects" style={{'--i':4}}>Projects</a></li>
        </ul>
      </div>
    );
}