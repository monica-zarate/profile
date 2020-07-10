import React from "react";
import "./styles/main.css";
import mz from "../assets/imgs/mz2.jpg";

function About() {
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__info-wrapper">
          <h1 className="about__title">
            Hello,
            <br /> my name is Monica.
          </h1>
        </div>
        <div className="about__img-wrapper">
          <img className="about__img" src={mz} alt="user-icon" />
        </div>
        <p className="about__description">
          I'm a fullstack web developer. Highly analytical and detailed
          oriented.
        </p>
      </div>
      <div className="about__details-wrapper">
        <h2 className="about__subtitle">About me</h2>
        <ul className="about__list">
          <li className="about__details">
            College: <br /> Psychology
          </li>
          <li className="about__details">
            Professional Experience: <br /> IT Recruiter, Office Manager
          </li>
        </ul>
        <p className="about__content">
          Excited to make a career transition to the software development
          industry looking for new challenges and professional development.
        </p>
      </div>
    </div>
  );
}

export default About;
