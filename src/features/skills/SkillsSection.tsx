import { SkillCard } from "../../components/cards/SkillCard";
import { FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import {
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiMongodb,
  SiJsonwebtokens,
  SiVite,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import styles from "./styles.module.css";
import type { SkillCardProps } from "../../components/cards/SkillCard";

const skills: SkillCardProps[] = [
  {
    icon: FaNodeJs,
    name: "Node.js",
    type: "JavaScript Runtime",
    description:
      "Node.js is an open-source runtime built on Google’s V8 engine that allows JavaScript to run on the server side.",
    frontBg: "bg-green-600",
  },
  {
    icon: FaReact,
    name: "React",
    type: "Frontend Library",
    description:
      "React is a JavaScript library for building fast and interactive user interfaces using a component-based architecture.",
    frontBg: "bg-sky-500",
  },
  {
    icon: SiExpress,
    name: "Express.js",
    type: "Backend Framework",
    description:
      "Express.js is Node.js web framework that provides a robust set of features for building APIs and web applications.",
    frontBg: "bg-gray-700",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
    type: "Relational Database",
    description:
      "PostgreSQL is a powerful relational database known for reliability, scalability, and advanced SQL features.",
    frontBg: "bg-blue-700",
  },
  {
    icon: SiSequelize,
    name: "Sequelize",
    type: "ORM for Node.js",
    description:
      "Sequelize is a ORM for Node.js that supports multiple SQL databases and simplifies database interaction.",
    frontBg: "bg-indigo-600",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
    type: "NoSQL Database",
    description:
      "MongoDB is a document-oriented NoSQL database designed for scalability and flexibility with JSON-like documents.",
    frontBg: "bg-green-700",
  },
  {
    icon: SiJsonwebtokens,
    name: "JWT",
    type: "Authentication Standard",
    description:
      "JSON Web Token (JWT) is an open standard for securely transmitting information between parties as a JSON object.",
    frontBg: "bg-yellow-600",
  },
  {
    icon: SiVite,
    name: "Vite",
    type: "Frontend Build Tool",
    description:
      "Vite is a fast frontend build tool and development server that provides instant hot module replacement and optimized builds.",
    frontBg: "bg-purple-600",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    type: "React Framework",
    description:
      "Next.js is a React framework that enables hybrid static & server rendering, API routes, and built-in performance optimizations.",
    frontBg: "bg-black",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    type: "Programming Language",
    description:
      "TypeScript is a strongly typed superset of JavaScript, adding static types for scalability.",
    frontBg: "bg-blue-500",
  },
  {
    icon: FaPython,
    name: "Python",
    type: "Programming Language",
    description:
      "Python is a versatile high-level programming language known for simplicity, readability, and a vast ecosystem of libraries.",
    frontBg: "bg-yellow-500",
  },
];

export function SkillsSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center w-screen min-h-screen text-white bg-[var(--color-secondary)] gap-12 md:gap-16 py-20 px-6"
      id="skills"
    >
      <h2 className="z-10 font-bold text-4xl md:text-5xl font-sans-serif text-center">
        <span className="text-[var(--color-primary)]">#</span>SKILLS
      </h2>
      <div className="z-10 w-full max-w-7xl">
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
      <div
        className={`absolute z-0 ${styles.skillsBackground} w-full h-full`}
      ></div>
    </section>
  );
}
