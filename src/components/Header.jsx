import React from "react";
import { Link } from "react-router-dom";
import "./styles/main.css";

function Header() {
  let navSlide = () => {
    const burger = document.querySelector(".header__burger");
    const nav = document.querySelector(".header__nav");
    const navLinks = document.querySelectorAll(".header__li");
    console.log("toggling");

    // Toggle Nav
    nav.classList.toggle("active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `nav-fade 0.5s ease forwards ${
          index / 7 + 1.5
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  };

  return (
    <div className="header">
      <Link to={`/`} className="header__title-link">
        <h1 className="header__title">MZ </h1>
      </Link>
      <ul className="header__nav">
        <li className="header__li">
          <Link to={`/about`} className="header__link" onClick={navSlide}>
            About
          </Link>
        </li>
        <li className="header__li">
          <Link to={`/projects`} className="header__link" onClick={navSlide}>
            Projects
          </Link>
        </li>
      </ul>
      <div className="header__burger" onClick={navSlide}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}

export default Header;
