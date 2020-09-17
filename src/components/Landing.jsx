import React from "react";
import "./styles/main.css";
import Contact from "./Contact";
import mz from "../assets/imgs/mz2.jpg";

function About() {
  return (
    <div className="landing">
      <div className="landing__wrapper">
        <div className="landing__info-wrapper">
          <h1 className="landing__title">
            Hello,
            <br /> my name is Monica.
          </h1>
        </div>
        <div className="landing__img-wrapper">
          <img className="landing__img" src={mz} alt="user-icon" />
        </div>
        <p className="landing__description">
          I'm a fullstack web developer. Highly analytical and detailed
          oriented. Vancouver, BC-based.
        </p>
      </div>
      <Contact />
    </div>
  );
}

export default About;
