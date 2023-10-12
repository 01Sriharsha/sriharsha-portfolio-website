import ReserveEasePic from "@/assets/reservease thumbnail.png";
import WeblogPic from "@/assets/weblog thumbnail.png";
import { CgWorkAlt } from "react-icons/cg";
import { GrWorkshop } from "react-icons/gr";

export const projectsData = [
  {
    title: "Reservease",
    descrption:
      "Reservease is a full-stack table reservation management system which facilitates table reservations for restaurants and provides user roles for customers, restaurant owners, and administrators.",
    image: ReserveEasePic,
    github: "https://github.com/01Sriharsha/reservease-table-reservation-app",
    website: "https://reservease.vercel.app/",
    technologies: [
      "Next.Js 13",
      "React.Js",
      "Prisma",
      "Tailwind CSS",
      "PostgreSQL",
      "TypeScript",
      "NeonDB",
      "Vercel Cloud",
      "Git",
      "Github",
    ],
  },
  {
    title: "Weblog",
    descrption:
      "Weblog is a full-stack table online blogging application which facilitates users to write and post blogs online for the users.",
    image: WeblogPic,
    github: "https://github.com/01Sriharsha/Weblog-Frontend",
    technologies: [
      "React.Js",
      "react-Bootstrap",
      "Java",
      "MYSQL",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "Git",
      "Github",
    ],
  },
];

export const AllSkills = [
  "HTML",
  "CSS",
  "Javascript",
  "TypeScript",
  "Bootstrap",
  "Tailwind CSS",
  "React.Js",
  "Next.Js 13",
  "Java",
  "Spring Boot",
  "Spring Security",
  "Node.Js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Hibernate",
  "Prisma",
] as const;

export const skills = {
  frontend: [
    "HTML",
    "CSS",
    "Javascript",
    "TypeScript",
    "Bootstrap",
    "Tailwind CSS",
    "React.Js",
    "Next.Js 13",
  ],
  backend: ["Java", "Spring Boot", "Spring Security", "Node.Js"],
  database: ["MySQL", "PostgreSQL", "MongoDB"],
  orm: ["Hibernate", "Prisma"],
  other: [],
};

export const experienceData = [
  {
    title: "Full Stack Developer Intern",
    company: "BSQ Technology",
    location: "Mysore",
    type: "Internship",
    description: [
      "Worked on various web applications and gained hands-on experience in both front-end and back-end development, contributing to the full software development lifecycle.",
      // "Played a pivotal role in teaching React.js to fellow developers within the organization and conducted workshops and provided guidance, improving communication and technical leadership skills.",
      "Actively collaborated with team members on multiple projects, participated in code reviews, addressed issues, and ensured alignment with project timelines. Developed teamwork and coordination skills while working alongside experienced professionals.",
      "Gained practical experience in database design and optimization using MySQL, including schema design, query optimization, and data modeling.",
    ],
    duration: "Feb 15, 2023 to June 15, 2023",
    icon: CgWorkAlt,
    techstack: [
      "React.Js",
      "Bootstrap",
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
    ],
  },
  {
    title: "NoSQL and MongoDB Resource Person",
    company: "JSS Boys Polytechnic",
    location: "Mysore",
    type: "Faculty Development Program on Full Stack Development",
    description: [
      "Delivered a comprehensive presentation on the concepts and significance of NoSQL databases, with a specific focus on MongoDB.",
      "Provided attendees i.e lecturers with an in-depth understanding of the advantages and use cases of NoSQL databases, highlighting MongoDB as a prominent example.",
      "Conducted a hands-on session during the program, demonstrating the process of establishing a backend connection to MongoDB from a Spring Boot application.",
    ],
    duration: "Aug 18, 2023",
    icon: GrWorkshop,
    techstack: [
      "NoSQL",
      "MongoDB",
      "MongoDB Compass",
      "MongoDB Atlas",
      "Spring Boot",
      "Hibernate",
    ],
  },
];
