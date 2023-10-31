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
            "•	Provide individualized tutoring in Calculus, Discrete Mathematics, Java Programming, and more, improving students' comprehension of challenging topics and facilitating their academic success", 
            "•	Develop customized study plans and teaching strategies, leveraging strong communication and leadership skills to create a collaborative learning environment.",
            "•	Volunteered as a peer tutor (February - May 2023), achieving excellent results, leading to the commencement as an official employee in September 2023."
        ],
        skills: [
            "Communication", "Mathematics", "Computer Science"
        ],
    },
    {
        id: 2,
        name: "Django || Activist",
        company: "Open Source",
        time: "August 2023 - Present",
        image: git,
        bulletPoints: [
            "•	Optimized cached_db session data storage, and improved cross-platform compatibility for colorized output in Django.",
            "•	Spearheading the implementation of a rate-limiting feature and API tests in Activist to fortify security and ensure fair usage.",
        ],
        skills: [
            "Computer Science", "Collaboration"
        ]
    },
    {
        id: 3,
        name: "Co-Vice President",
        company: "Computer Club (Saint Joseph's University)",
        time: "September 2023 - Present",
        image: computerClub,
        bulletPoints: [
            "•	Co-lead a team of over 70 members in organizing and managing activities for the club, building a vibrant tech community.",
        ],
        skills: [
            "Leadership", "Communication"
        ]
    },
]

export default expData;