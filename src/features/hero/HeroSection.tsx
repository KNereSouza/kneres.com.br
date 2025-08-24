import styles from "./styles.module.css";

export function HeroSection() {
  return (
    <section className="font-sans-serif p-22 bg-[var(--color-secondary)] w-full min-h-screen flex flex-col items-center justify-center text-center gap-6 md:gap-8 text-white px-6">
      <div className={`${styles.blobContainer}`}>
        <div className={`${styles.blob}`}></div>
        <div className={`${styles.blob}`}></div>
        <div className={`${styles.blob}`}></div>
        <div className={`${styles.blob}`}></div>
        <div className={`${styles.blob}`}></div>
        <div className={`${styles.blob}`}></div>
      </div>

      <p className="z-10 font-bold text-lg md:text-xl">
        Hi, i'm Kauã <span className="animate-wave text-2xl">👋🏼</span>
      </p>
      <h1 className="z-10 font-bold text-4xl sm:text-5xl md:text-6xl">
        <span
          className={`${styles.textOutline} outline-[var(--color-primary)] text-6xl sm:text-7xl lg:text-8xl`}
        >
          FULLSTACK <br />
        </span>
        SOFTWARE ENGINEER <br />{" "}
        <span className="text-[var(--color-primary)]">&</span> COMPUTER
        SCIENTIST
      </h1>
      <p className="z-10 text-base md:text-lg max-w-3xl">
        <span className="font-bold text-[var(--color-primary)]">
          Engineering the future of the web with clarity and excellence. <br />
        </span>
        As a full-stack software engineer, I craft accessible, high-performance
        digital experiences that make a meaningful difference.
      </p>
      <div className="z-10 mt-8 relative bg-[var(--color-primary)] h-14 w-44 md:h-16 md:w-48 outline-solid outline-1 outline-[var(--color-primary)]">
        <a
          href="#contact"
          className="absolute flex items-center justify-center bg-[var(--color-secondary)] h-14 w-44 md:h-16 md:w-48 font-monospace text-[var(--color-primary)] outline-solid outline-1 outline-[var(--color-primary)] transition-transform duration-200 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 text-base md:text-lg"
          style={{ bottom: 0, right: 0 }}
        >
          get in touch!
        </a>
      </div>
    </section>
  );
}
