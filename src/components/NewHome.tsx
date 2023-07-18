import React from "react";
import Social from "./Social";
import resume from "../assets/Sulabh_Katila_resume.pdf";
import Picture from "./Picture";
import { FaDownload } from "react-icons/fa";

export default function NewHome() {
  return (
    <>
    <div className="new-home-container">
      <div className="home-social-container">
        <Social />
      </div>
      <div className="home-details-container">
        <div className="home-title-container">Sulabh Katila</div>
        <div className="home-description-container">
          <p>
            I'm a passionate computer science student with a strong foundation
            in coding and problem-solving.
          </p>
          <p>
            Through my coursework and hands-on projects, I've gained experience
            in web development and AI/ML. Now, I'm eager to contribute to the
            ever-evolving world of technology.
          </p>
        </div>
        <p className="home_data-location">Location: New York, USA</p>
        <div className="home_resume">
        <a href={resume} className="home_resume-button" download>
          <FaDownload className="home_resume-icon" />
          Resume
        </a>
      </div>
      </div>
      <div className="home-picture-container">
        <Picture />
      </div>
    </div>
    </>
  );
}
