import Logo from "../../assets/icon.svg";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

export function Header() {
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current && current > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-screen z-30 transition-transform duration-500 text-white ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="absolute w-full h-full bg-[#0a182eb6] backdrop-blur-sm"></div>

      <header
        className="
          relative
          flex flex-row
          pt-6 pb-6 pl-2 pr-2
          items-center
          justify-around
          font-sans-serif
        "
      >
        <a href="/">
          <img
            src={Logo}
            className={`w-16 ${styles.logo} ${styles.logoSpin}`}
            alt="KNereS Logo"
          />
        </a>

        <nav
          className="
            flex flex-row
            gap-16
            items-center
            justify-center
            font-bold
          "
        >
          <a
            className="
              transition-all
              hover:text-[var(--color-primary)]
            "
            href="/#about"
          >
            ABOUT ME
          </a>
          <a
            className="
              transition-all
              hover:text-[var(--color-primary)]
            "
            href="/#experiences"
          >
            EXPERIENCES
          </a>
          <a
            className="
              transition-all
              hover:text-[var(--color-primary)]
            "
            href="/#projects"
          >
            PROJECTS
          </a>
          <a
            className="
              transition-all
              hover:text-[var(--color-primary)]
            "
            href="/#skills"
          >
            SKILLS
          </a>
          <a
            className="
              transition-all
              hover:text-[var(--color-primary)]
            "
            href="/blog"
          >
            BLOG
          </a>
        </nav>

        <div
          className="
            relative
            bg-[var(--color-primary)]
            h-10 w-32
            outline-solid outline-1 outline-[var(--color-primary)]
          "
        >
          <a
            href="#contact"
            className="
              absolute flex items-center justify-center
              bg-[var(--color-secondary)]
              h-10 w-32
              font-sans-serif font-bold
              outline-solid outline-1 outline-[var(--color-primary)]
              transition-transform duration-200
              cursor-pointer
              hover:-translate-x-1 hover:-translate-y-1
            "
            style={{ bottom: 0, right: 0 }}
          >
            <span className="text-[var(--color-primary)]">#</span>
            CONTACT
          </a>
        </div>
      </header>
    </div>
  );
}
