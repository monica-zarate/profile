import React from "react";
import "./styles/main.css";
import happyhouse from "../assets/imgs/app.png";
import cuau from "../assets/imgs/cuau-photo.png";
import team from "../assets/icons/team.svg";
import doing from "../assets/icons/doing.svg";
import done from "../assets/icons/done.svg";

function Projects() {
  // Toggle Read More Section
  let readMore = () => {
    let moreWrapper = document.querySelector(".projects__more-wrapper");
    if (moreWrapper.style.display === "flex") {
      moreWrapper.style.display = "none";
    } else {
      moreWrapper.style.display = "flex";
    }
  };

  // Toggle Demo Video
  let demoDisplay = () => {
    let video = document.querySelector(".projects__video");
    if (video.style.display === "block") {
      video.style.display = "none";
    } else {
      video.style.display = "block";
    }
  };

  return (
    <>
      <div className="projects">
        <h2 className="projects__title">
          BrainStation Web Development Diploma <br /> Capstone Project:
        </h2>
        <h3 className="projects__subtitle">Happy House</h3>
        <div className="projects__wrapper">
          <img className="projects__img" src={happyhouse} alt="" />

          <p className="projects__description">
            Happy House is a collaborative platform that will help people living
            on the same household, remain involved with all the chores and
            activities that need to be done to keep a healthy home environment.
          </p>
        </div>
        <button className="projects__btns" onClick={readMore}>
          Read more...
        </button>
        <ul className="projects__more-wrapper">
          <li className="projects__more">
            <img className="projects__icon" src={team} alt="" />
            <p className="projects__details">
              Users can be linked and select the chores and/or activities they
              want to take care of per week, the app will schedule it and will
              be sending reminders.
            </p>
          </li>
          <li className="projects__more">
            <img className="projects__icon" src={doing} alt="" />
            <p className="projects__details">
              There are default chores and activities such as vacuuming, do the
              laundry, take out the trash or meal prepping and option to add a
              new ones.
            </p>
          </li>
          <li className="projects__more">
            <img className="projects__icon" src={done} alt="" />
            <p className="projects__details">
              Users who fulfilled all scheduled activities at the end of the
              week, will gain a badge and will be eligible for a symbolic reward
              the household can agree upon beginning of the week.
            </p>
          </li>
        </ul>
        <button className="projects__btns" onClick={demoDisplay}>
          Watch my demo
        </button>
        <iframe
          className="projects__video"
          src="https://www.loom.com/embed/362935b8214541e2aed0368b2427cd73"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
      <div className="projects">
        <h2 className="projects__title">Photographer Portfolio</h2>
        <h3 className="projects__subtitle">Cuau Fotografía</h3>
        <div className="projects__wrapper">
          <img className="projects__img" src={cuau} alt="" />

          <p className="projects__description">
            Mexico City-based photographer, showcasing its outdoor and in-studio
            portraits. With a creative setting in mind, the models are always
            shining. The website contains a Gallery, Contact and About
            Components.
          </p>
        </div>
        <a href="https://cuaufotografia.netlify.app/">
          <button className="projects__btns">Visit Website</button>
        </a>
      </div>
    </>
  );
}

export default Projects;
