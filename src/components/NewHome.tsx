import { FaDownload } from "react-icons/fa";
import resume from "../assets/Sulabh_Katila_resume.pdf";
import Picture from "./Picture";
import Social from "./Social";

export default function NewHome() {
  return (
    <div className="new-home-wrapper">
      <div className="new-home-container">
        <div className="home-social-container">
          <Social />
        </div>
        <div className="home-details-container">
          <div className="home-title-container">Sulabh Katila</div>
          <div className="home-description-container">
            <p>
              I'm a computer science student, and I solve problems with code.
            </p>
            <p>

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
    </div>
  );
}
