import { motion } from "framer-motion";
import sjny from "../assets/school/sjny.jpeg";
import cs50 from "../assets/school/cs50.jpeg";

export default function Education() {
  return (
    <div id="education" className="education-section">
      <div className="education-section-title">
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
          <div>GPA: 3.98</div>
          <div>
            Awards: Honor’s Program, Esse-Non Videri Excellence Scholarship,
            Arts and Science Grant, Dean’s List(x4)
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
            {[
              { href: "https://certificates.cs50.io/05a1797f-418a-41b8-a99e-797f653782fc.pdf?size=letter", label: "CS50x" },
              { href: "https://certificates.cs50.io/00676374-73ec-41fd-8490-24286aaac3b3.pdf?size=letter", label: "CS50P" },
              { href: "https://certificates.cs50.io/b204e7fd-2a36-4dfd-aafe-b74d9a252609.pdf?size=letter", label: "CS50AI" },
              { href: "https://certificates.cs50.io/998eada1-f22c-4a8a-800d-3b9db80883cf.pdf?size=letter", label: "CS50W" },
            ].map(({ href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="cs50-course"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
