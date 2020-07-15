import React from "react";
import "./styles/main.css";
import Contact from "./Contact";
import mz from "../assets/imgs/mz2.jpg";
import edu from "../assets/icons/edu.svg";
import lap from "../assets/icons/laptop.svg";
import more from "../assets/icons/more.svg";

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
      <Contact />
      <div className="about__details-wrapper">
        <button className="about__btn">About me</button>
        <ul className="about__list">
          <li className="about__details">
            <img className="about__card-img" src={edu} alt="" />
            <h3 className="about__card-title">Education</h3>
            <ul className="about__card-list">
              <li className="about__card-content">
                Psychology Degree - <br /> UNAM
              </li>
              <li className="about__card-content">
                Web Development Diploma - <br /> BrainStation
              </li>
            </ul>
          </li>
          <li className="about__details">
            <img className="about__card-img" src={lap} alt="" />
            <h3 className="about__card-title">Experience</h3>
            <ul className="about__card-list">
              <li className="about__card-content">IT Recruiter</li>
              <li className="about__card-content">Office Manager</li>
            </ul>
          </li>

          <li className="about__details">
            <img className="about__card-img" src={more} alt="" />
            <h3 className="about__card-title">More</h3>
            <p className="about__card-content">
              Excited to make a career transition to the software development
              industry looking for new challenges and professional development.
            </p>
          </li>
        </ul>
      </div>
      <button className="about__btn">Portfolio</button>
    </div>
  );
}

export default About;
