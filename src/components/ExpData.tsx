import bhgh from "../assets/experience/bhgh.jpeg";
import computerClub from "../assets/experience/computerclub.jpeg";
import sjny from "../assets/school/sjny.jpeg";

const expData = [
  {
    id: 1,
    name: "Summer Undergraduate Research Fellow",
    company: "Saint Joseph's Univeristy",
    time: "June 2024 - Present",
    image: sjny,
    bulletPoints: [
      "•  Collaborate with Professor Zamagias to conduct research on New York Coty real estate dynamics",
      "•  Utilize Python for comprehensive data collection, cleaning, preparation, feature engineering, and model deployment",
      "•  Apply regression algorithms, including Linear Regression, Random Forest Regression, Gradient Boosting Regression, and Neural Network Regression, to analyze property price trends",
      "•  Employ advanced evaluation techniques to optimize model accuracy",
    ],
    skills: ["Python", "Data Analysis", "Data Science", "Machine Learning"],
  },
  {
    id: 2,
    name: "Mathematics Tutor",
    company: "Boys Hope Girls Hope of New York",
    time: "February 2024 - May 2024",
    image: bhgh,
    bulletPoints: [
      "•  Facilitated comprehensive one-on-one and group tutoring sessions for students from underprivileged backgrounds at Bishop Loughlin Memorial High School in Algebra, Geometry, and Pre-Calculus",
      "•  Collaborated closely with each student to conduct comprehensive evaluations, identifying area of challenge and strength",
      "•  Tailored individualized study plans, resulting in measurable improvements in their understanding and performance",
    ],
    skills: ["Communication", "Mathematics"],
  },
  {
    id: 3,
    name: "Computer Science and Mathematics Peer Tutor",
    company: "Saint Joseph's Univeristy",
    time: "September 2023 - May 2024",
    image: sjny,
    bulletPoints: [
      "•  Successfully conducted over 50 personalized monthly tutoring sessions, resulting up to 80% improvement in test scores for students enrolled in Java Programming, Scripting Languages, Calculus, and Probability and Statistics",
      "•  Received recognition for consistently delivering outstanding results and high levels of client satisfaction",
    ],
    skills: ["Communication", "Mathematics", "Computer Science"],
  },
  {
    id: 4,
    name: "Co-Vice President",
    company: "Computer Club (Saint Joseph's University)",
    time: "September 2023 - May 2024",
    image: computerClub,
    bulletPoints: [
      "•	Co-lead a team of over 70 members in organizing and managing activities for the club, building a vibrant tech community",
      "•	Collaborate with professors and other club officers to plan and execute workshops, seminars, and coding competitions",
    ],
    skills: ["Leadership", "Communication"],
  },
];

export default expData;
