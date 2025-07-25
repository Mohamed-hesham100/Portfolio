import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaWindows,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";
import { SiFusionauth } from "react-icons/si";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineSyncProblem } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { SiCoop } from "react-icons/si";
import { FaJava } from "react-icons/fa";

import project_img_1 from "../assets/images/project1.png";
import project_img_2 from "../assets/images/project2.png";
import project_img_3 from "../assets/images/project3.png";
import project_img_4 from "../assets/images/project4.png";
import project_img_5 from "../assets/images/project5.png";
import project_img_6 from "../assets/images/project6.png";
import project_img_7 from "../assets/images/project7.png";
import project_img_8 from "../assets/images/project8.png";
import project_img_9 from "../assets/images/chat-app.png";
import project_img_10 from "../assets/images/project10.png";
import project_img_11 from "../assets/images/project11.png";
import project_img_12 from "../assets/images/project12.png";
import project_img_13 from "../assets/images/project13.png";

export const Projects = [
  {
    id: 1,
    title: "E-commerce Clothing Store",
    image: project_img_5,
    tech: ["React", "Tailwind CSS", "Mongodb", "JavaScript"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: " Portfolio Website",
    image: project_img_6,
    tech: ["Html", " CSS", "JavaScript"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    image: project_img_7,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 4,
    title: "Blog Website",
    image: project_img_1,
    tech: ["python", "Django", "PostgreSQL"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 5,
    title: "Doctor Appointment Booking Platform",
    image: project_img_3,
    tech: ["React", "Tailwind CSS", "Javascript", "Mongodb"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 6,
    title: "Car Showcase Website",
    image: project_img_2,
    tech: ["Html", "CSS", "JavaScript"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 7,
    title: "Admin Dashboard for Store Management",
    image: project_img_4,
    tech: ["React", "JavaScript", "Tailwind CSS", "Material UI"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 8,
    title: "LMS",
    image: project_img_8,
    tech: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express.js"],
    demoLink: "https://frontend-lms-f775.vercel.app/",
    codeLink: "https://github.com/Mohamed-hesham100/Chat-App-backend",
  },
  {
    id: 9,
    title: "Chat-App",
    image: project_img_9,
    tech: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express.js"],
    demoLink: "https://chat-app-hb1u.vercel.app/",
    codeLink: "https://github.com/Mohamed-hesham100/frontend-LMS",
  },
  {
    id: 10,
    title: "Job-Portal",
    image: project_img_10,
    tech: ["React", "Typescript", "Tailwind CSS", "Node.js", "Express.js"],
    demoLink: "https://job-portal-mocha-seven.vercel.app/",
    codeLink: "https://github.com/Mohamed-hesham100/job-portal-backend",
  },
  {
  id: 11,
  title: "Restaurant Landing Page",
  image: project_img_11,
  tech: ["React", "JavaScript", "Tailwind CSS"],
  demoLink: "https://landing-page-restaurant-psi.vercel.app/", 
  codeLink: "https://github.com/Mohamed-hesham100/landing-page-restaurant",
},
{
  id: 12,
  title: "Real Estate Landing Page",
  image: project_img_12,
  tech: ["React", "JavaScript", "Tailwind CSS"],
  demoLink: "https://landing-page-realstate.vercel.app/", 
  codeLink: "https://github.com/Mohamed-hesham100/landing-page-realstate",
},
{
  id: 13,
  title: "Clothing Brand Showcase Website",
  image: project_img_13,
  tech: ["React", "JavaScript", "Tailwind CSS"],
  demoLink: "https://brand-landing-page-chi.vercel.app/", 
  codeLink: "https://github.com/Mohamed-hesham100/brand-landing-page",
},
];

export const Menu_Links = [
  {
    id: 1,
    label: "Home",
    to: "hero",
    offset: -100,
  },
  {
    id: 2,
    label: "skills",
    to: "skills",
    offset: -80,
  },
  {
    id: 3,
    label: "About Me",
    to: "about",
    offset: -80,
  },
  {
    id: 4,
    label: "Projects",
    to: "projects",
    offset: -80,
  },
  {
    id: 5,
    label: "Contact",
    to: "contact",
    offset: -80,
  },
];

export const States = [
  {
    id: 1,
    count: "+1",
    label: "Years of \nExperince",
  },
  {
    id: 2,
    count: 1,
    label: "Certifications \nEar",
  },
  {
    id: 3,
    count: 20,
    label: "Projects \nCompleted",
  },
  {
    id: 4,
    count: 3,
    label: "Happly \nClients",
  },
];

export const Skills_tabs = [
  {
    id: "01",
    label: "All",
    value: "all",
  },
  {
    id: "02",
    label: "frontend",
    value: "frontend",
  },
  {
    id: "03",
    label: "backend",
    value: "backend",
  },
  {
    id: "04",
    label: "tools",
    value: "tools",
  },
  {
    id: "05",
    label: "skills",
    value: "skills",
  },
];

export const Skills = [
  {
    id: 1,
    icon: SiJavascript,
    skill: "JavaScript",
    progress: 90,
    type: "backend",
    description: "Modern scripting language for web development.",
  },
  {
    id: 2,
    icon: SiTypescript,
    skill: "TypeScript",
    progress: 85,
    type: "frontend",
    description: "Typed superset of JavaScript.",
  },
  {
    id: 3,
    icon: FaPython,
    skill: "Python",
    progress: 95,
    type: "backend",
    description: "Powerful language for backend and scripting.",
  },
  {
    id: 4,
    icon: FaHtml5,
    skill: "HTML",
    progress: 90,
    type: "frontend",
    description: "Markup language for web structure.",
  },
  {
    id: 5,
    icon: FaCss3Alt,
    skill: "CSS",
    progress: 85,
    type: "frontend",
    description: "Style sheet language for designing UI.",
  },
  {
    id: 6,
    icon: SiDjango,
    skill: "Django",
    progress: 90,
    type: "backend",
    description: "High-level Python web framework.",
  },
  {
    id: 7,
    icon: FaNodeJs,
    skill: "Node.js",
    progress: 80,
    type: "backend",
    description: "JavaScript runtime for backend development.",
  },
  {
    id: 8,
    icon: SiExpress,
    skill: "Express.js",
    progress: 80,
    type: "backend",
    description: "Fast and minimalist Node.js web framework.",
  },
  {
    id: 9,
    icon: SiRedux,
    skill: "Redux Toolkit",
    progress: 85,
    type: "frontend",
    description: "State management for React apps.",
  },
  {
    id: 10,
    icon: SiNextdotjs,
    skill: "Next.js",
    progress: 80,
    type: "frontend",
    description: "React framework for SSR and SSG.",
  },
  {
    id: 11,
    icon: FaReact,
    skill: "React.js",
    progress: 90,
    type: "frontend",
    description: "Library for building user interfaces.",
  },
  {
    id: 12,
    icon: SiTailwindcss,
    skill: "Tailwind CSS",
    progress: 90,
    type: "frontend",
    description: "Utility-first CSS framework.",
  },
  {
    id: 13,
    icon: SiFramer,
    skill: "Framer Motion",
    progress: 85,
    type: "frontend",
    description: "Animation library for React.",
  },
  {
    id: 14,
    icon: GiMaterialsScience,
    skill: "Material UI",
    progress: 80,
    type: "frontend",
    description: "UI components library for React.",
  },
  {
    id: 15,
    icon: SiMongodb,
    skill: "MongoDB",
    progress: 80,
    type: "backend",
    description: "NoSQL database for flexible data storage.",
  },
  {
    id: 16,
    icon: SiPostgresql,
    skill: "PostgreSQL",
    progress: 90,
    type: "backend",
    description: "Advanced open-source relational database.",
  },
  {
    id: 17,
    icon: SiFusionauth,
    skill: "OAuth",
    progress: 80,
    type: "backend",
    description: "Secure authorization protocol.",
  },
  {
    id: 18,
    icon: SiJsonwebtokens,
    skill: "JWT",
    progress: 85,
    type: "backend",
    description: "Token-based authentication mechanism.",
  },
  {
    id: 19,
    icon: FaGitAlt,
    skill: "Git",
    progress: 90,
    type: "tools",
    description: "Version control system for code tracking.",
  },
  {
    id: 20,
    icon: FaGithub,
    skill: "GitHub",
    progress: 90,
    type: "tools",
    description: "Version control system for code tracking.",
  },
  {
    id: 21,
    icon: SiPostman,
    skill: "Postman",
    progress: 85,
    type: "tools",
    description: "Tool for testing and managing APIs.",
  },
  {
    id: 22,
    icon: FaWindows,
    skill: "Windows",
    progress: 100,
    type: "skills",
    description: "Primary operating system for development.",
  },
  {
    id: 23,
    icon: SiPostgresql,
    skill: "SQL",
    progress: 85,
    type: "skills",
    description: "Language for querying relational databases.",
  },
  {
    id: 24,
    icon: SiCoop,
    skill: "OOP",
    progress: 85,
    type: "skills",
    description: "Object-oriented programming principles.",
  },
  {
    id: 25,
    icon: TbApi,
    skill: "API Testing",
    progress: 90,
    type: "skills",
    description: "Testing RESTful APIs effectively.",
  },
  {
    id: 26,
    icon: RiTeamLine,
    skill: "Team Collaboration",
    progress: 95,
    type: "skills",
    description: "Working effectively in teams.",
  },
  {
    id: 27,
    icon: MdOutlineSyncProblem,
    skill: "Problem Solving",
    progress: 95,
    type: "skills",
    description: "Analytical and critical thinking to solve bugs.",
  },
  {
    id: 28,
    icon: FaJava,
    skill: "Java",
    progress: 20,
    type: "backend",
    description: "java ",
  },
];

export const About_Me = {
  content: `I’m a Full Stack Web Developer with strong experience in building frontends using React and Next.js, and powerful backends using Django and Node.js.
I create attractive and responsive user interfaces, optimized for performance and accessibility. On the backend, I develop scalable, secure APIs and systems using Django REST Framework and Express.js, implementing authentication with JWT and OAuth.
I’m proficient in working with relational and non-relational databases such as PostgreSQL and MongoDB, and I have experience integrating third-party APIs and deploying full-stack applications using platforms like Vercel.
Passionate about clean code, problem-solving, and building real-world solutions that deliver value to users.`,

  email: "mh1351448@gmail.com",
  phone: "+20 101 393 2585",
  website: "https://portfolio-olot.vercel.app/",
};

export const SocialLinks = [
  {
    id: 1,
    label: "GitHub",
    icon: FaGithub,
    link: "https://github.com/Mohamedasddf ",
  },
  {
    id: 2,
    label: "GitHub",
    icon: FaGithub,
    link: " https://github.com/Mohamed-hesham100",
  },
  {
    id: 3,
    label: "LinkedIn",
    icon: FaLinkedin,
    link: " https://www.linkedin.com/in/mohamed-hesham-89800029b/",
  },
  {
    id: 4,
    label: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100080772770787&mibextid=ZbWKwL",
  },
  {
    id: 5,
    label: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/mohamed_hesham_official0/profilecard/?igsh=bXM5bTdxbDRyMzht",
  },
  {
    id: 6,
    label: "Twitter",
    icon: FaTwitter,
    link: "#",
  },
];
