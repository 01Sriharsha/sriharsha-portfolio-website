import ReserveEasePic from "@/assets/reservease thumbnail.png";
import WeblogPic from "@/assets/weblog thumbnail.png";
import GroceryPic from "@/assets/grocery thumbnail.png";
import FoodRecyclingPic from "@/assets/foodrecyling thumbnail.png";
import CsmsPic from "@/assets/csms thumbnail.png";
import GovtSchemesPic from "@/assets/govtschemes thumbnail.png";
import TextutilsPic from "@/assets/textutils thumbnail.png";
import KeeperappPic from "@/assets/keeper thumbnail.png";
import JarvisPic from "@/assets/jarvis thumbnail.png";
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
    ],
  },
  {
    title: "Weblog",
    descrption:
      "Weblog is a full-stack table online blogging application which facilitates users to write and post blogs online for the users.",
    image: WeblogPic,
    github: "https://github.com/01Sriharsha/Weblog-Frontend",
    technologies: [
      "Javascript",
      "React.Js",
      "React-Bootstrap",
      "Java",
      "MYSQL",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
    ],
  },
  {
    title: "Online Grocery Shopping App",
    descrption:
      "A full-stack online groceries shopping application which facilitates users to view and purschase various grocery items from the application and aims to simplify the grocery shopping experience for busy individuals and families.",
    image: GroceryPic,
    github: "https://github.com/01Sriharsha/grocery-store-frontend",
    technologies: [
      "Javascript",
      "React.Js",
      "React-Bootstrap",
      "Java",
      "MYSQL",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
    ],
    company: "BSQ Technology",
  },
  {
    title: "Food Reclycling App",
    descrption:
      "A full-stack food reclycling management application designed to help individuals, businesses, and communities minimize food waste, promote sustainability, and make a positive impact on the environment. It's a comprehensive solution that encourages responsible food consumption and recycling, reduces landfill waste, and supports those in need.",
    image: FoodRecyclingPic,
    github: "https://github.com/01Sriharsha/food-recycling-frontend",
    technologies: [
      "Javascript",
      "React.Js",
      "React-Bootstrap",
      "Java",
      "MYSQL",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
    ],
    company: "BSQ Technology",
  },
  {
    title: "Car Reselling App",
    descrption:
      "A full-stack online car reslling application that simplifies the process of buying and selling used cars. It provides a platform for buyers and sellers to list, search, and purchase pre-owned vehicles while offering a variety of features to enhance trust, convenience, and transparency.",
    image: CsmsPic,
    github: "https://github.com/01Sriharsha/car-reselling-app-frontend",
    technologies: [
      "Javascript",
      "React.Js",
      "React-Bootstrap",
      "Java",
      "MYSQL",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
    ],
    company: "BSQ Technology",
  },
  {
    title: "Government Schemes App",
    descrption:
      "A full-stack online government schemes application designed to connect citizens with government programs and initiatives. It serves as a one-stop platform for individuals, businesses, and organizations to discover, understand, and apply for various government schemes, grants, and benefits.",
    image: GovtSchemesPic,
    github: "https://github.com/01Sriharsha/govt-schemes-frontend",
    technologies: [
      "Javascript",
      "React.Js",
      "React-Bootstrap",
      "Java",
      "MYSQL",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
    ],
    company: "BSQ Technology",
  },
  {
    title: "TextUtils",
    descrption:
      "TextUtil is a straightforward web-based react frontend application designed for basic text operations, making it a quick and easy tool for users to manipulate and enhance text in their web browsers.",
    image: TextutilsPic,
    github: "https://github.com/01Sriharsha/TextUtils",
    technologies: ["HTML 5", "CSS", "Javascript", "React.Js"],
    website: "",
  },
  {
    title: "Keeper",
    descrption:
      "Keeper is a straightforward yet powerful note-taking app built using React, used to create and manage their notes. It provides a clean and intuitive interface for a seamless note-taking experience.",
    image: KeeperappPic,
    github: "https://github.com/01Sriharsha/keeperApp",
    technologies: [
      "HTML 5",
      "CSS",
      "Javascript",
      "React.Js",
      "Reactstrap",
      "MUI",
    ],
    website: "keeper-app-sriharsha.vercel.app",
  },
  {
    title: "Jarvis VA",
    descrption:
      "Jarvis is a Python-based voice assistant app inspired by the famous AI assistant from the Iron Man movies. It serves as a virtual assistant that understands and responds to voice commands, helping users with tasks, information retrieval, and automation. To enhance its capabilities, Jarvis leverages Microsoft's Speech Application Programming Interface (SAPI) for advanced speech recognition and synthesis.",
    image: JarvisPic,
    github: "https://github.com/01Sriharsha/Voice-Assistan",
    technologies: ["Python", "SAPI-5 API"],
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
