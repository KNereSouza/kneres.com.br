import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-screen h-screen flex items-center justify-center font-sans-serif bg-[var(--color-secondary)] text-white"
    >
      <div className="z-10 flex flex-col gap-8 w-200 text-lg">
        <h2 className="font-bold text-5xl">
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
        <div className="flex flex-row gap-8 font-monospace">
          <a
            href="https://github.com/KNereSouza"
            target="_blank"
            className="flex items-center justify-center gap-2 text-lg pt-2.5 pb-2.5 pl-8 pr-8 outline-solid outline outline-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-secondary)] transition-all hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)]"
          >
            GitHub
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kneresouza/"
            target="_blank"
            className="flex items-center justify-center gap-2 text-lg pt-2.5 pb-2.5 pl-8 pr-8 outline-solid outline outline-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-secondary)] transition-all hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)]"
          >
            LinkedIn
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/neres.js/"
            target="_blank"
            className="flex items-center justify-center gap-2 text-lg pt-2.5 pb-2.5 pl-8 pr-8 outline-solid outline outline-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-secondary)] transition-all hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)]"
          >
            Instagram
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="absolute z-0 about-background blur-sm w-screen h-screen"></div>
    </section>
  );
}
