import { ExperienceCard } from "../../components/cards/ExperienceCard";
import styles from "./styles.module.css";

export function ExperiencesSection() {
  return (
    <section
      id="experiences"
      className="relative font-sans-serif w-screen min-h-screen flex flex-col items-center justify-center gap-12 md:gap-16 text-white bg-[var(--color-secondary)] py-20 px-6"
    >
      <div className="z-10 flex flex-col items-center justify-center gap-12 md:gap-16 w-full">
        <h2 className="font-bold text-4xl md:text-5xl text-center">
          <span className="text-[var(--color-primary)]">#</span>EXPERIENCES
        </h2>
        <div className="flex flex-col items-center gap-12 md:gap-16 w-full">
          <ExperienceCard
            jobTitle="Web Developer 🌐"
            companyName="Freelance"
            startDate="Jul. 2024"
            endDate="Current"
            description="Design and development of responsive, dynamic websites and web applications using modern technologies like React, Next.js, Node.js, and Tailwind CSS. Skilled in both front-end and back-end solutions."
          />
          <ExperienceCard
            jobTitle="Motorcycle Parts Sales Assistant 🛠️"
            companyName="Mael Motos"
            startDate="Feb. 2025"
            endDate="May 2025"
            description="Customer-focused sales assistant with hands-on experience in motorcycle parts, accessories, and service recommendations. Skilled in helping clients choose the right parts."
          />
          <ExperienceCard
            jobTitle="Art Teacher ​👨🏻‍🏫​"
            companyName="Escola Municipal Cecília Meireles"
            startDate="May 2025"
            endDate="Current"
            description="Creative educator with experience in teaching visual arts for middle school students. Develops engaging, culturally rich lessons on color, meaning, and art history."
          />
        </div>
      </div>
      <div
        className={`absolute z-0 ${styles.experiencesBackground} w-full h-full`}
      ></div>
    </section>
  );
}
