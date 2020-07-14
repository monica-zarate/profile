import React from "react";
import "./styles/main.css";
import happyhouse from "../assets/imgs/happy-house.png";

function Projects() {
  return (
    <div className="projects">
      <h2 className="projects__title">
        BrainStation Web Development Diploma <br /> Capstone Project:
      </h2>
      <img className="projects__img" src={happyhouse} alt="" />
      {/* <h3 className="projects__subtitle">Happy House</h3> */}
      <p className="projects__read">Read more...</p>
      <p className="projects__description">
        Happy House is a tool that will help people living on the same
        household, remain involved with all the chores and activities that need
        to be done to keep a healthy home environment. It’s a collaborative
        platform where users can be linked and select the chores and/or
        activities they want to take care of per week, the app will schedule it
        and will be sending reminders. There will be default chores and
        activities such as vacuuming, do the laundry, take out the trash or meal
        prepping and option to add a new ones. Users who fulfilled all scheduled
        activities at the end of the week, will gain a badge and will be
        elegible for a symbolic reward the household can agree upon beginning of
        the week.
      </p>
      <p className="projects__description">Watch my demo</p>
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
