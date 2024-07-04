import coderoyalegif from "../assets/project_gif/CodeRoyale.gif";
import emailreadreceiptsgeneratorgif from "../assets/project_gif/EmailReadReceiptsGeneratorGif.gif";
import productwebscrappergif from "../assets/project_gif/ProductWebScrapperGif.gif";
import fakeNewsGif from "../assets/project_gif/fake_news.gif";
import fitnessTrackerGif from "../assets/project_gif/fitness_tracker.gif";
import portfolioGif from "../assets/project_gif/portfolioGif.gif";
import coderoyalepic from "../assets/project_pic/CodeRoyale.jpeg";
import emailreadreceiptsgeneratorpic from "../assets/project_pic/EmailReadReceiptGeneratorPic.jpeg";
import productwebscrapperpic from "../assets/project_pic/ProductWebScrapperPic.jpeg";
import fakeNewsPic from "../assets/project_pic/fake_news.png";
import fitnessTrackerPic from "../assets/project_pic/fitness_tracker.png";
import jobAppPic from "../assets/project_pic/jobAppPic.png";
import portfolioPic from "../assets/project_pic/portfolioPic.jpeg";

const projectData = [
  {
    id: 1,
    name: "Email Read Receipts Generator",
    gif: emailreadreceiptsgeneratorgif,
    image: emailreadreceiptsgeneratorpic,
    categroy: "Web Development",
    tech: "C | Google Cloud Platform | Compute Engine | JavaScript | HTML/CSS",
    source_code:
      "https://github.com/sulabhkatila/Email-Read-Receipts-Generator/",
    link: "https://github.com/sulabhkatila/Email-Read-Receipts-Generator/",
    description:
      "A Chrome extension that embeds tracking pixels into emails and generates read receipts from a backend written from scratch in C",
  },
  {
    id: 2,
    name: "Multi-player Code Challenge Platform",
    gif: coderoyalegif,
    image: coderoyalepic,
    categroy: "Full Stack Development",
    tech: "Node.js | MongoDB | Express.js | React.js | Socket.io | JWT",
    source_code: "https://github.com/sulabhkatila/Code-Royale/",
    link: "https://github.com/sulabhkatila/Code-Royale/",
    description:
      "A real-time multiplayer coding challenge platform where users can compete against each other in real-time coding challenges",
  },
  {
    id: 3,
    name: "Web Scrapper for Comparing Prices",
    gif: productwebscrappergif,
    image: productwebscrapperpic,
    categroy: "Web Scrapping",
    tech: "Python | Flask | JavaScript | GCP | Compute Engine | BeautifulSoup",
    source_code: "https://github.com/sulabhkatila/Product-Web-Scrapper/",
    link: "https://github.com/sulabhkatila/Product-Web-Scrapper/",
    description:
      "A Chrome extension automatically scrapes the products from ebay as you look for it on Amazon",
  },
  {
    id: 4,
    name: "Job Application Tracking Bot",
    gif: jobAppPic,
    image: jobAppPic,
    categroy: "ML",
    tech: "Python | Oauth2.0 | Google Cloud API | PaLM API | NLTK",
    source_code:
      "https://github.com/sulabhkatila/Job-Application-Tracking-Bot/",
    link: "https://github.com/sulabhkatila/Jop-Application-Tracking-Bot/",
    description:
      "A Python program to automate job application tracking, significantly streamlining the process and preventing email oversights",
  },
  {
    id: 5,
    name: "Fake News Classification",
    gif: fakeNewsGif,
    image: fakeNewsPic,
    categroy: "ML",
    tech: "Python | NumPy | Pandas | Matplotlib | NLTK | TensorFlow",
    source_code:
      "https://github.com/sulabhkatila/Fake-News_Classification/blob/main/news.ipynb",
    link: "https://github.com/sulabhkatila/Fake-News_Classification/blob/main/news.ipynb",
    description:
      "A data-science project involving data analysis, training neural networks, and performed error analysis to gain insights into distinguishing true and fake news articles, achieving an 82% accuracy",
  },
  {
    id: 6,
    name: "Fitness Tracker",
    gif: fitnessTrackerGif,
    image: fitnessTrackerPic,
    categroy: "Web Dev",
    tech: "Python | JavaScript | HTML/CSS | Django | SQLite3",
    source_code: "https://github.com/sulabhkatila/Fitness-Tracker",
    link: "https://web-production-2f98.up.railway.app/",
    description:
      "A user-friendly and responsive front-end facilitating calorie tracking, workout monitoring, and nutrition management for users to achieve their fitness objectives and deployed the application with Railway",
  },
  {
    id: 7,
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
