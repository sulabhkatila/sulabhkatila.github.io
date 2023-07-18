import React from "react";
import sjny from "../assets/school/sjny.jpeg";
import cs50 from "../assets/school/cs50.jpeg";
import harvard from "../assets/school/harvard.jpeg";

export default function Education() {
  return (
    <div className="education-section">
      <div id="education" className="education-section-title">
        <h1>Education</h1>
      </div>

      <div className="container education-card">
        <div>
          <img src={sjny} alt="SJNY" />
        </div>
        <div className="education-details">
          <div className="education-name">Saint Joseph's University</div>
          <div className="education-description">
            BS (honors) Mathematics and Computer Science
          </div>
          <div>Sep 2022 - May 2026</div>
          <div>GPA: 3.96</div>
          <div>
            Awards: Honor’s Program, Esse-Non Videri Excellence Scholarship,
            Dean’s List
          </div>
        </div>
      </div>

      <div className="container education-card">
        <div>
          <img src={cs50} alt="cs50" />
        </div>
        <div className="education-details">
          <div className="education-name">
            <div>CS50,</div>
            <p>Harvard University</p>
          </div>
          <div className="education-description">
            <a
              href="https://certificates.cs50.io/05a1797f-418a-41b8-a99e-797f653782fc.pdf?size=letter"
              target="_blank"
            >
              <div className="cs50-course">CS50x</div>
            </a>
            <a
              href="https://certificates.cs50.io/00676374-73ec-41fd-8490-24286aaac3b3.pdf?size=letter"
              target="_blank"
            >
              <div className="cs50-course">CS50P</div>
            </a>
            <a
              href="https://certificates.cs50.io/b204e7fd-2a36-4dfd-aafe-b74d9a252609.pdf?size=letter"
              target="_blank"
            >
              <div className="cs50-course">CS50AI</div>
            </a>
            <a
              href="https://certificates.cs50.io/998eada1-f22c-4a8a-800d-3b9db80883cf.pdf?size=letter"
              target="_blank"
            >
              <div className="cs50-course">CS50W</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
