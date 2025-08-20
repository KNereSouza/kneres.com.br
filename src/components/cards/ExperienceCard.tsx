interface ExperienceCardProps {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
}

export function ExperienceCard(props: ExperienceCardProps) {
  return (
    <div className="relative w-full max-w-lg h-[22rem] md:h-80 outline outline-[var(--color-primary)] bg-[var(--color-primary)]">
      <div className="absolute right-1 bottom-1 md:right-2 md:bottom-2 flex flex-col justify-between w-full max-w-lg h-[22rem] md:h-80 p-6 md:p-8 outline-solid outline outline-[var(--color-primary)] bg-[var(--color-secondary)] gap-4">
        <h3 className="font-bold text-xl md:text-2xl">
          <span className="text-[var(--color-primary)]">#</span>
          {props.jobTitle}
          <br />
          at{" "}
          <span className="text-[var(--color-primary)]">
            {props.companyName}
          </span>
        </h3>
        <h4 className="font-monospace font-bold text-[var(--color-primary)] text-lg md:text-xl">
          {props.startDate} - {props.endDate}
        </h4>
        <p className="font-monospace text-sm md:text-base">
          {props.description}
        </p>
      </div>
    </div>
  );
}
