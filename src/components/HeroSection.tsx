export function HeroSection() {
  return (
    <section className="font-sans-serif bg-[var(--color-secondary)] w-screen h-screen flex flex-col items-center justify-center text-center gap-8">
      <p className="font-bold text-xl">Hi, i'm Kauã 👋🏼</p>
      <h1 className="font-bold text-6xl">
        <span className="text-outline outline-[var(--color-primary)] text-8xl">
          FULLSTACK <br />
        </span>
        SOFTWARE ENGINEER <br />{" "}
        <span className="text-[var(--color-primary)]">&</span> COMPUTER
        SCIENTIST
      </h1>
      <p className="text-lg">
        <span className="font-bold text-[var(--color-primary)]">
          Engineering the future of the web with clarity and excellence. <br />
        </span>
        As a full-stack software engineer, I craft accessible, high-performance
        <br />
        digital experiences that make a meaningful difference.
      </p>
      <div className="mt-8 relative bg-[var(--color-primary)] h-16 w-48 outline-solid outline-1 outline-[var(--color-primary)]">
        <a
          href="#contact"
          className="absolute flex items-center justify-center bg-[var(--color-secondary)] h-16 w-48 font-monospace text-[var(--color-primary)] outline-solid outline-1 outline-[var(--color-primary)] transition-transform duration-200 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 text-lg"
          style={{ bottom: 0, right: 0 }}
        >
          get in touch!
        </a>
      </div>
    </section>
  );
}
