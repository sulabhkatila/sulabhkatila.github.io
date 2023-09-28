import React from "react";
import sjny from "../assets/school/sjny.jpeg";
import computerClub from "../assets/experience/computerclub.jpeg";
import git from "../assets/experience/git.png";
const expData = [
    {
        id: 1,
        name: "Computer Science and Mathematics Peer Tutor",
        company: "Saint Joseph's Univeristy",
        time: "Feb 2023 - Present",
        image: sjny,
        bulletPoints: [
            "•	Provide individualized tutoring in Calculus, Discrete Mathematics, Java Programming, and more, improving students' comprehension of challenging topics and facilitating their academic success", 
            "•	Develop customized study plans and teaching strategies, leveraging strong communication and leadership skills to create a collaborative learning environment.",
        ],
        skills: [
            "Skills one", "Skills two"
        ],
    },
    {
        id: 2,
        name: "Django || Activist",
        company: "Open Source",
        time: "August 2023 - Present",
        image: git,
        bulletPoints: [
            "•	Optimized session data storage for the cached_db backend in Django to prevent request crashes in case of cache failures.",
            "•	Enhanced Django's cross-platform compatibility, preserving colorized output in non-Windows environments.",
            "•	Spearheading the implementation of a rate-limiting feature in Activist to fortify system security and ensure fair usage.",
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
        ]
    },
]

export default expData;