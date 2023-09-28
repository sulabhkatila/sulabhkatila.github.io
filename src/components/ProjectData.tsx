import React from "react";
import fakeNewsGif from "../assets/project_gif/fake_news.gif";
import fitnessTrackerGif from "../assets/project_gif/fitness_tracker.gif";
import fakeNewsPic from "../assets/project_pic/fake_news.png";
import fitnessTrackerPic from "../assets/project_pic/fitness_tracker.png";
import jobAppPic from "../assets/project_pic/jobAppPic.png";
import portfolioPic from "../assets/project_pic/portfolioPic.jpeg";
import portfolioGif from "../assets/project_gif/portfolioGif.gif";

const projectData = [
  {
    id: 1,
    name: "Job Application Tracking Bot",
    gif: jobAppPic,
    image: jobAppPic,
    categroy: "ML",
    tech: "Python | Oauth2.0 | Google Cloud API | PaLM API | NLTK",
    source_code: "https://github.com/sulabhkatila/job-app_bot/blob/main/bot.py",
    link: "https://github.com/sulabhkatila/job-app_bot/blob/main/bot.py",
    description:
      "Engineered a Python program to automate job application tracking, significantly streamlining the process and saving an average of 2 hours per week during peak application seasons.",
  },
  {
    id: 2,
    name: "Fake News Classification",
    gif: fakeNewsGif,
    image: fakeNewsPic,
    categroy: "ML",
    tech: "Python | NumPy | Pandas | Matplotlib | NLTK | TensorFlow",
    source_code:
      "https://github.com/sulabhkatila/Fake-News_Classification/blob/main/news.ipynb",
    link: "https://github.com/sulabhkatila/Fake-News_Classification/blob/main/news.ipynb",
    description:
      "Conducted thorough data analysis, trained a neural network, and performed error analysis to gain insights into distinguishing true and fake news articles, achieving an 82% accuracy, and refined the model's performance using a CNN.",
  },
  {
    id: 3,
    name: "Fitness Tracker",
    gif: fitnessTrackerGif,
    image: fitnessTrackerPic,
    categroy: "Web Dev",
    tech: "Python | JavaScript | HTML/CSS | Django | SQLite3",
    source_code: "https://github.com/sulabhkatila/Fitness-Tracker",
    link: "https://web-production-2f98.up.railway.app/",
    description:
      "A user-friendly and responsive front-end facilitating calorie tracking, workout monitoring, and nutrition management for users to achieve their fitness objectives and deployed the application with Railway.",
  },
  {
    id: 4,
    name: "Personal Portfolio",
    gif: portfolioGif,
    image: portfolioPic,
    categroy: "Web Dev",
    tech: "TypeScript | HTML/CSS | React | Vite",
    source_code: "https://github.com/sulabhkatila/sulabhkatila.github.io",
    link: "https://sulabhkatila.github.io/",
    description: "A portfolio website to showcase my projects and skills",
  },
];

export default projectData;
