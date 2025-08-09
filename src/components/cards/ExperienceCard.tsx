interface ExperienceCardProps {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
}

export function ExperienceCard(props: ExperienceCardProps) {
  return (
    <div className="relative w-lg h-80 outline outline-[var(--color-primary)] bg-[var(--color-primary)]">
      <div className="absolute right-2 bottom-2 flex flex-col justify-between w-lg h-80 p-8 outline-solid outline outline-[var(--color-primary)] bg-[var(--color-secondary)]">
        <h3 className="font-bold text-2xl">
          <span className="text-[var(--color-primary)]">#</span>
          {props.jobTitle}
          <br />
          at{" "}
          <span className="text-[var(--color-primary)]">
            {props.companyName}
          </span>
        </h3>

        <h4 className="font-monospace font-bold text-[var(--color-primary)] text-xl">
          {props.startDate} - {props.endDate}
        </h4>

        <p className="font-monospace">{props.description}</p>
      </div>
    </div>
  );
}
