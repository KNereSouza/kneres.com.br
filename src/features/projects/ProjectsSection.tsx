import { ProjectCard } from "../../components/cards/ProjectCard";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex flex-col p-8 items-center justify-center w-screen min-h-screen text-white bg-[var(--color-secondary)] gap-8"
    >
      <h2 className="font-bold text-5xl font-sans-serif">
        <span className="text-[var(--color-primary)]">#</span>PROJECTS
      </h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ProjectCard
          projectName="NewsHub"
          projectCategory="API"
          technologies={["Node.js", "PostgreSQL", "Cloudflare"]}
          description="A backend service for managing a complete news management system. It provides endpoints for user authentication, role-based access control, and news-related operations"
          sourceCodeURL="https://github.com/KNereSouza/news-hub-api/"
        />

        <ProjectCard
          projectName="Task Manager"
          projectCategory="API"
          technologies={["Node.js", "MongoDB", "Express"]}
          description="A lightweight and modern RESTful API for managing tasks, built with Node.js, Express, and MongoDB."
          sourceCodeURL="https://github.com/KNereSouza/task-manager-api/"
        />

        <ProjectCard
          projectName="kneres.com.br"
          projectCategory="WEBSITE"
          technologies={["React", "Vite", "Tailwind", "Typescript"]}
          description="kneres.com.br is the official website of Kauã Neres. This project serves as a personal portfolio and professional presence, highlighting expertise in software development and design."
          sourceCodeURL="https://github.com/KNereSouza/kneres.com.br/"
        />

        <ProjectCard
          projectName="transcrybe.ai"
          projectCategory="API"
          technologies={["Node.js", "AI", "YTDL Core", "Express"]}
          description="Transcrybe.ai is an API that processes YouTube videos to automatically transcribe audio and optionally generate an intelligent summary."
          sourceCodeURL="https://github.com/KNereSouza/transcrybe.ai/"
        />
      </div>
    </section>
  );
}
