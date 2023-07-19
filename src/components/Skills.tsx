import React from "react";
import Skill from "./Skill";
import Carousel from "react-multi-carousel";

const language = {
  Python: "python.svg",
  C: "c.svg",
  Java: "java.svg",
  JavaScript: "javascript.svg",
  TypeScript: "typescript.svg",
  HTML: "html.svg",
  CSS: "css.svg",
};
const tech = {
  Git: "git.svg",
  GitHub: "github.svg",
  "VS Code": "vs_code.svg",
  "Google Colab": "google_colab.svg.png",
};

const library = {
  Pandas: "pandas.svg.png",
  NumPy: "numpy.svg",
  TensorFlow: "tensorflow.svg",
  Flask: "flask.svg",
  Django: "django.svg",
  React: "react.svg",
};

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id='skills' className="skills-section">
      <div className="skills-section-title">
        <h1> Skills </h1>
      </div>
      <div className="">
        <Carousel
          responsive={responsive}
          infinite={true}
          className="skills-carousel"
        >
          <div className="skill-list-container">
            <Skill title="Languages" items={language} />
          </div>
          <div className="skill-list-container">
            <Skill title="Tools and Technologies" items={tech} />
          </div>
          <div className="skill-list-container">
            <Skill title="Libraries and Frameworks" items={library} />
          </div>
        </Carousel>
        ;
      </div>
    </div>
  );
}