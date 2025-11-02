{/* import logos for frontend */}

import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import javascriptLogo from './assets/javascript.png';
import reactjsLogo from './assets/react.png';
import reduxLogo from './assets/redux.png';
import tailwindLogo from './assets/tailwind.png';
import bootstrapLogo from './assets/bootstrap.png';
import typescriptLogo from './assets/typescript.png';
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
import teamworkLogo from './assets/teamwork.webp';
import timeLogo from './assets/time.png';
import conflictLogo from './assets/conflict.png';
import analyticalLogo from './assets/analytical.png';
import problemLogo from './assets/problem.png';
{ /* project logos */}
import blinkitLogo from './assets/blinkit-logo.png';
import flavoroLogo from './assets/flavoro-logo.png';
import buzzbuyLogo from './assets/buzzbuy-logo.png';
import todoLogo from './assets/todo-logo.png';
{/* Education logos */}
import lnctLogo from './assets/lnct.jpg';
import mcbuLogo from './assets/mcbu.JPEG';
import takshshilaLogo from './assets/takshshila.JPEG';

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
            { name: 'TypeScript', logo: typescriptLogo},
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
        tags: ["ReactJS", "JavaScript", "CSS", "HTML", "Tailwind CSS", "Redux"],
        github: "https://github.com/Shruti-sahu-11/Blinkit",

    },
    {
        id: 1,
        title: "Flavoro Food Delivery App",
        description: "Flavoro is a responsive food delivery web app built to practice frontend development skills. The app allows users to explore restaurants, browse menus, add food items to a cart, and place an order through an interactive interface. It is also having Search and Filter functionality.",
        image: flavoroLogo,
        tags: ["ReactJS", "JavaScript", "CSS", "HTML", "Tailwind CSS"],
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
    {
        id: 3,
        title: "Todo TypeScript, React App",
        description: "A responsive task manager demonstrating advanced front-end skills. Built with React, TypeScript, and shadcn/ui for a clean and type-safe UI. Features add/edit/delete tasks and completion toggles with persistent state and reusable components.",
        image: todoLogo,
        tags: ["React.js", "TypeScript", "Redux Toolkit", "shadcn/ui", "Tailwind CSS", "Vite", "VS Code", "GitHub"],
        github: "https://github.com/Shruti-sahu-11/Todo-ts-react-",
    }
]

{/* Education data */}

export const education = [
    {
        id: 0,
        image: lnctLogo,
        school: "LNCT University, Bhopal",
        date: "Sept 2023 - June 2025",
        grade: "8.64 CGPA",
        desc: "I am an MCA graduate specializing in Artificial Intelligence and Machine Learning with a strong focus on frontend development. Skilled in React, JavaScript, HTML, and CSS, I enjoy transforming ideas and designs into responsive, user-friendly web applications. Alongside my frontend expertise, I have a solid foundation in computer science fundamentals including data structures, algorithms, and problem-solving, which helps me build efficient and scalable solutions.",
        degree: "Master of Computer Applications - MCA (AI/ML)",
    },
    {
        id: 1,
        image: mcbuLogo,
        school: "MCBU, Chhatarpur",
        date: "Sept 2020 - June 2023",
        grade: "68.4%",
        desc: "I completed my B.Sc. in Computer Science, where I gained a strong foundation in programming, operating systems, database management, and computer science fundamentals. This helped me develop analytical thinking, problem-solving skills, and an understanding of software development basics, which I further advanced during my MCA.",
        degree: "Bachelor of Science (B.Sc.) in Computer Science",
    },
    {
        id: 2,
        image: takshshilaLogo,
        school: "Takshshila, Nowgong",
        date: "Sept 2019 - June 2020",
        grade: "81%",
        desc: "Completed Higher Secondary Education in the Science stream (PCM), where I built a strong base in logical reasoning, problem-solving, and analytical skills, which later supported my journey into Computer Science and MCA.",
        degree: "Higher Secondary Education (Class XII), CBSE Board",
    },
    {
        id: 3,
        image: takshshilaLogo,
        school: "Takshshila, Nowgong",
        date: "Sept 2017 - June 2018",
        grade: "86.6%",
        desc: "Completed Secondary Education (Class X) with a focus on mathematics and science, which helped build my logical and analytical foundation for further studies in Computer Science.",
        degree: "Secondary Education (Class X), CBSE Board",
    },
]