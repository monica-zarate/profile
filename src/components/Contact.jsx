import React from "react";
import "./styles/main.css";
import pdf from "../assets/icons/pdf.svg";
import mail from "../assets/icons/mail.svg";
import li from "../assets/icons/linkedin.svg";
import gh from "../assets/icons/github.svg";
import brainstation from "../assets/icons/brainstation.png";
import twitter from "../assets/icons/twitter.svg";

function Contact() {
  return (
    <div className="contact">
      <ul className="contact__list">
        <li className="contact__links">
          <a
            className="contact__url"
            href="https://drive.google.com/file/d/1elMeC0qioHfMuqLiycD5NU7QlLDcF5rt/view?usp=sharing"
          >
            <img className="contact__icon" src={pdf} alt="pdf-icon" />
          </a>
        </li>
        <li className="contact__links">
          <a className="contact__url" href="mailto:hello@monicazarate.com">
            <img className="contact__icon" src={mail} alt="Email-icon" />
          </a>
        </li>
        <li className="contact__links">
          <a
            className="contact__url"
            href="https://www.linkedin.com/in/monica-zarate/"
          >
            <img className="contact__icon" src={li} alt="linkedin-icon" />
          </a>
        </li>
        <li className="contact__links">
          <a className="contact__url" href="https://github.com/monicazhazil">
            <img className="contact__icon" src={gh} alt="github-icon" />
          </a>
        </li>
        <li className="contact__links bs">
          <a className="contact__url" href="https://brainstation.io/">
            <img
              className="contact__icon"
              src={brainstation}
              alt="brainstation-icon"
            />
          </a>
        </li>
        <li className="contact__links">
          <a className="contact__url" href="https://twitter.com/monicazhazil">
            <img
              className="contact__icon"
              src={twitter}
              alt="brainstation-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
