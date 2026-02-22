import transperfect from "../assets/experience/transperfect.jpeg";
import healthstream from "../assets/experience/healthstream.jpeg";
import sjny from "../assets/school/sjny.jpeg";

const expData = [
  {
    id: 1,
    name: "Automation Engineering Intern",
    company: "TransPerfect",
    location: "New York, NY",
    time: "February 2025 – Present",
    image: transperfect,
    bulletPoints: [
      "• Developed and maintained automated test scripts using the .NET framework in C# to validate web application functionality",
      "• Designed and developed a custom parser tool to analyze and update hundreds of test cases across the codebase automatically, eliminating manual work and saving 100+ engineering hours",
      "• Implemented NLP evaluation workflows in Python/PyTorch to quantify Large Language Models' accuracy and reliability",
      "• Investigate and troubleshoot failures in CI/CD pipelines, ensuring smooth and reliable automated deployments",
      "• Collaborated with developers and QA analysts to identify issues, streamline testing, and improve overall product quality",
    ],
    skills: ["C#", ".NET", "Python", "PyTorch", "CI/CD"],
  },
  {
    id: 2,
    name: "Tutor",
    company: "St. Joseph's University",
    location: "New York, NY",
    time: "September 2023 – Present",
    image: sjny,
    bulletPoints: [
      "• Conduct tutoring sessions for students in Programming in Java, Data Structures and Algorithms, Scripting Languages, Calculus, and Statistics, achieving up to an 80% improvement in test scores",
      "• Design and implement customized learning plans by conducting assessments to identify individual challenges and strengths, incorporating innovative study techniques and real-world examples to enhance understanding",
    ],
    skills: ["Java", "Data Structures", "Calculus", "Statistics"],
  },
  {
    id: 3,
    name: "Undergraduate Researcher",
    company: "St. Joseph's University",
    location: "New York, NY",
    time: "June 2024 – August 2024",
    image: sjny,
    bulletPoints: [
      "• Collected and processed over 70,000 rows of publicly available data on NYC real estate, leveraging Python and libraries such as Pandas and NumPy for cleaning and feature engineering to prepare data for analysis",
      "• Visualized key trends and detected outliers and uncovered insights critical to model accuracy and refinement",
      "• Developed regression and neural network models, using Scikit-learn and TensorFlow, achieving 85% accuracy across all 5 boroughs",
    ],
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
  },
  {
    id: 4,
    name: "QA Engineering Intern",
    company: "HealthStream",
    location: "Remote, USA",
    time: "September 2024 – December 2024",
    image: healthstream,
    bulletPoints: [
      "• Designed and built an automated testing framework from scratch using Python and Selenium, with comprehensive documentation",
      "• Developed automated test scripts that reduced manual regression testing efforts by ~30% and accelerated release cycles",
      "• Collaborated with cross-functional teams in an Agile environment to streamline defect resolution and meet project deadlines",
    ],
    skills: ["Python", "Selenium", "Agile"],
  },
];

export default expData;
