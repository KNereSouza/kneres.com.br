import { FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  projectName: string;
  projectCategory: string;
  technologies: Array<string>;
  description: string;
  sourceCodeURL: string;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="relative w-72 h-128 sm:w-120 sm:h-72 outline outline-[var(--color-primary)] bg-[var(--color-primary)]">
      <div
        className="
          absolute
          flex flex-col justify-between 
          p-8 w-72 h-128 sm:w-120 sm:h-72 
          outline outline-[var(--color-primary)] 
          bg-[var(--color-secondary)] 
          transition-transform duration-200
          hover:-translate-x-2 hover:-translate-y-2
        "
        style={{ bottom: 0, right: 0 }}
      >
        <h3 className="font-bold font-sans-serif text-2xl">
          <span className="text-[var(--color-primary)]">#</span>
          {props.projectName} -{" "}
          <span className="text-[var(--color-primary)]">
            {props.projectCategory.toUpperCase()}
          </span>
        </h3>

        <ul className="sm:hidden">
          {props.technologies.map((element, index) => (
            <li
              key={index}
              className="font-monospace font-bold text-lg text-[var(--color-primary)]"
            >
              - {element}
            </li>
          ))}
        </ul>

        <h4 className="hidden sm:flex font-monospace font-bold text-lg text-[var(--color-primary)]">
          {props.technologies.join(" - ")}
        </h4>

        <p className="font-sans-serif">{props.description}</p>

        <a
          className="flex items-center gap-2 font-bold text-[var(--color-primary)]"
          target="__blank"
          href={props.sourceCodeURL}
        >
          {"--> "}
          <span className="underline font-monospace">see on GitHub</span>
          <FiGithub />
        </a>
      </div>
    </div>
  );
}
