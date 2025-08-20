import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import styles from "./styles.module.css";

export function AboutSection() {
  const linkClasses =
    "flex items-center justify-center gap-2 text-base md:text-lg py-2 px-4 md:px-6 outline outline-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-secondary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] rounded-md";

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center font-sans-serif bg-[var(--color-secondary)] text-white py-20 px-6"
    >
      <div className="z-10 flex flex-col gap-6 md:gap-8 w-full max-w-3xl text-base md:text-lg">
        <h2 className="font-bold text-4xl md:text-5xl">
          <span className="text-[var(--color-primary)]">#</span>ABOUT ME 🙋🏻‍♂️
        </h2>
        <p>
          My name is{" "}
          <span className="text-[var(--color-primary)] font-bold">
            Kauã Neres de Souza
          </span>
          , and I am a{" "}
          <span className="text-[var(--color-primary)] font-bold">
            Fullstack Web Software Engineer
          </span>
          . 🧑🏻‍💻
        </p>
        <p>
          I am currently pursuing degrees in Computer Science and Mathematics
          Education, combining solid academic knowledge with hands-on experience
          developing modern web applications.
        </p>
        <p>
          My portfolio showcases expertise in{" "}
          <span className="text-[var(--color-primary)] font-bold">
            React, Next.js, Node.js, Express, Sequelize, and PostgreSQL
          </span>
          , with a focus on building responsive, accessible, and user-centered
          digital experiences using clean code and intuitive design.
        </p>
        <p>
          I have practical experience in{" "}
          <span className="text-[var(--color-primary)] font-bold">
            JWT authentication, RESTful APIs, and software architecture
          </span>
          , creating scalable, secure solutions aligned with best practices. My
          skills also include{" "}
          <span className="text-[var(--color-primary)] font-bold">
            version control with Git, database modeling, and system planning
          </span>
          .
        </p>
        <p>
          Beyond coding, I bring foundational knowledge in computer hardware, IT
          fundamentals, and multimedia editing, allowing me to approach projects
          with a comprehensive perspective.
        </p>
        <p>
          I am passionate about transforming ideas into impactful,
          high-performance digital products, and I invite you to explore my
          projects to see how I can bring value to your next venture.
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-4 font-monospace mt-4">
          <a
            href="https://github.com/KNereSouza"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClasses}`}
          >
            <FiGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kneresouza/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClasses}`}
          >
            <FiLinkedin /> LinkedIn
          </a>
          <a
            href="https://www.instagram.com/neres.js/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClasses}`}
          >
            <FiInstagram /> Instagram
          </a>
        </div>
      </div>
      <div
        className={`absolute z-0 ${styles.aboutBackground} blur-sm w-full h-screen`}
      ></div>
    </section>
  );
}
