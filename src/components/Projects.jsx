import React from "react";
import "./styles/main.css";

function Projects() {
  return (
    <div className="projects">
      <h2 className="projects__title">
        BrainStation Web Development Diploma <br /> Capstone Project
      </h2>
      <iframe
        className="projects__video"
        width="640"
        height="353"
        src="https://www.loom.com/embed/362935b8214541e2aed0368b2427cd73"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Projects;
