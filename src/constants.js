{/* import logos for frontend */}

import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import javascriptLogo from './assets/javascript.png';
import reactjsLogo from './assets/react.png';
import reduxLogo from './assets/redux.png';
import tailwindLogo from './assets/tailwind.png';
import bootstrapLogo from './assets/bootstrap.png';
{/* Logo for languages */}
import cLogo from './assets/c.png';
import cppLogo from './assets/cpp.png';
import pythonLogo from './assets/python.png';
import rLogo from './assets/r.png';
{/* Logo for tools */}
import gitLogo from './assets/git.png';
import githubLogo from './assets/github.png';
import vscodeLogo from './assets/vscode.png';
import figmaLogo from './assets/figma.png';
import jupyterLogo from './assets/jupyter.png';
{/* Soft skills */}
import clearcommuLogo from './assets/clearcommu.png';
import teamworkLogo from './assets/teamwork.WEBP';
import timeLogo from './assets/time.png';
import conflictLogo from './assets/conflict.png';
import analyticalLogo from './assets/analytical.png';
import problemLogo from './assets/problem.png';
{ /* project logos */}
import blinkitLogo from './assets/blinkit-logo.png';
import flavoroLogo from './assets/flavoro-logo.png';
import buzzbuyLogo from './assets/buzzbuy-logo.png';

export const SkillsInfo = [
    {
        title: "Frontend",
        skills: [
            { name: 'HTML', logo: htmlLogo},
            { name: 'CSS', logo: cssLogo},
            { name: 'JavaScript', logo: javascriptLogo},
            { name: 'React JS', logo: reactjsLogo},
            { name: 'Redux', logo: reduxLogo},
            { name: 'Tailwind CSS', logo: tailwindLogo},
            { name: 'Bootstrap', logo: bootstrapLogo},
        ]
    },
    {
        title: "Languages",
        skills: [
            { name: 'c', logo: cLogo},
            { name: 'c++', logo: cppLogo},
            { name: 'python', logo: pythonLogo},
            { name: 'R', logo: rLogo},
            { name: 'Javascript', logo: javascriptLogo},
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: 'Git', logo: gitLogo},
            { name: 'Github', logo: githubLogo},
            { name: 'VScode', logo: vscodeLogo},
            { name: 'Jupyter', logo: jupyterLogo},
            { name: 'Figma', logo: figmaLogo},
        ]
    },
    {
        title: "Soft Skills",
        skills: [
            { name: 'Communication', logo: clearcommuLogo},
            { name: 'Team Collaboration', logo: teamworkLogo},
            { name: 'Analytical Thinking', logo: analyticalLogo},
            { name: 'Problem Solving', logo: problemLogo},
            { name: 'Time management', logo: timeLogo},
            { name: 'Conflict resolution', logo: conflictLogo},
        ]
    }
];

export const projects = [
    {
        id: 0,
        title: "Blinkit Clone",
        description: "Developed a responsive front-end clone of Blinkit (instant grocery delivery platform) to showcase skills in ReactJS, JavaScript, and modern UI/UX design. The project replicates core features such as product listing, category-based browsing, add-to-cart functionality, and a seamless checkout UI.",
        image: blinkitLogo,
        tags: ["ReactJS", "JavaScript", "CSS", "HTML"],
        github: "https://github.com/Shruti-sahu-11/Blinkit",

    },
    {
        id: 1,
        title: "Flavoro Food Delivery App",
        description: "Flavoro is a responsive food delivery web app built to practice frontend development skills. The app allows users to explore restaurants, browse menus, add food items to a cart, and place an order through an interactive interface. It is also having Search and Filter functionality.",
        image: flavoroLogo,
        tags: ["ReactJS", "JavaScript", "CSS", "HTML"],
        github: "https://github.com/Shruti-sahu-11/Flavoro",

    },
    {
        id: 2,
        title: "BuzzBuy E-commerce App",
        description: "BuzzBuy is a static e-commerce website built using HTML and CSS to replicate the look and feel of an online shopping platform. The project focuses on creating a clean, modern, and responsive UI that highlights product categories and shopping features.",
        image: buzzbuyLogo,
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Shruti-sahu-11/BuzzBuy-website",

    },
]