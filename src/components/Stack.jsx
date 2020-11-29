import React from "react";
import "./styles/main.css";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import sass from "../assets/icons/sass.svg";
import js from "../assets/icons/js.svg";
import react from "../assets/icons/react.svg";
import node from "../assets/icons/node.svg";
import mysql from "../assets/icons/mysql.svg";

function Stack(){
    return(
        <div className="stack">
            <ul className="stack__list">
            <li><img className="stack__icon" src={html} alt="html 5 icon"/></li>
            <li><img className="stack__icon" src={css} alt="css icon"/></li>
            <li><img className="stack__icon" src={sass} alt="sass icon"/></li>
            <li><img className="stack__icon" src={js} alt="javascript icon"/></li>
            <li><img className="stack__icon" src={react} alt="react icon"/></li>
            <li><img className="stack__icon node" src={node} alt="node icon"/></li>
            <li><img className="stack__icon mysql" src={mysql} alt="mysql icon"/></li>
            </ul>
        </div>
    )
}

export default Stack;