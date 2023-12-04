import React from "react";
import sjny from "../assets/school/sjny.jpeg";
import computerClub from "../assets/experience/computerclub.jpeg";
import git from "../assets/experience/git.png";
const expData = [
    {
        id: 1,
        name: "Computer Science and Mathematics Peer Tutor",
        company: "Saint Joseph's Univeristy",
        time: "Sep 2023 - Present",
        image: sjny,
        bulletPoints: [
            "•	Successfully conducted over 50 personalized monthly tutoring sessions, resulting in a 75% improvement in test scores for students enrolled in Programming with Java, Pre-Calculus, Calculus, Probability, and Statistics",
            "•	Tailored teaching strategies to individual student needs, employing a diverse range of instructional methods such as hands-on coding exercises, interactive problem-solving sessions, and real-world applications of the concepts",
            "•	Received recognition for exceptional coaching, consistently delivering outstanding results and high levels of client satisfaction",
        ],
        skills: [
            "Communication", "Mathematics", "Computer Science"
        ],
    },
    {
        id: 2,
        name: "Co-Vice President",
        company: "Computer Club (Saint Joseph's University)",
        time: "September 2023 - Present",
        image: computerClub,
        bulletPoints: [
            "•	Co-lead a team of over 70 members in organizing and managing activities for the club, building a vibrant tech community",
            "•	Collaborate with professors and other club officers to plan and execute workshops, seminars, and coding competitions",
        ],
        skills: [
            "Leadership", "Communication"
        ]
    },
    {
        id: 3,
        name: "Django || Activist",
        company: "Open Source",
        time: "August 2023 - Present",
        image: git,
        bulletPoints: [
            "•	Optimized cached_db session data storage, and improved cross-platform compatibility for colorized output in Django",
            "•	Implemented and tested a rate-limiting feature in Activist Open-source project, enhancing performance and security",
        ],
        skills: [
            "Computer Science", "Collaboration"
        ]
    },
]

export default expData;