import Logo from "../assets/icon.svg";

export function Header() {
  return (
    <header className="flex flex-row pt-4 pb-4 pl-2 pr-2 items-center justify-around bg-[var(--color-secondary)] drop-shadow-md font-sans-serif">
      <a href="/">
        <img src={Logo} className="w-16 logo logo-spin" alt="KNereS Logo" />
      </a>
      <nav className="flex flex-row gap-16 items-center justify-center font-bold">
        <a
          className="transition-all hover:text-[var(--color-primary)]"
          href="#about"
        >
          ABOUT ME
        </a>
        <a
          className="transition-all hover:text-[var(--color-primary)]"
          href="#experiences"
        >
          EXPERIENCES
        </a>
        <a
          className="transition-all hover:text-[var(--color-primary)]"
          href="#projects"
        >
          PROJECTS
        </a>
        <a
          className="transition-all hover:text-[var(--color-primary)]"
          href="#skills"
        >
          SKILLS
        </a>
        <a
          className="transition-all hover:text-[var(--color-primary)]"
          href="/blog"
        >
          BLOG
        </a>
      </nav>
      <div className="relative bg-[var(--color-primary)] h-10 w-32 outline-solid outline-1 outline-[var(--color-primary)]">
        <a
          href="#contact"
          className="absolute flex items-center justify-center bg-[var(--color-secondary)] h-10 w-32 font-sans-serif font-bold outline-solid outline-1 outline-[var(--color-primary)] transition-transform duration-200 cursor-pointer hover:-translate-x-1 hover:-translate-y-1"
          style={{ bottom: 0, right: 0 }}
        >
          <span className="text-[var(--color-primary)]">#</span>
          CONTACT
        </a>
      </div>
    </header>
  );
}
