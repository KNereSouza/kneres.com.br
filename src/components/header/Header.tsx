import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../../assets/icon.svg";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

export function Header() {
  const [show, setShow] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;
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
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div
        className={`fixed w-full z-30 transition-transform duration-500 text-white ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="absolute w-full h-full bg-[#0a182eb6] backdrop-blur-sm"></div>
        <header className="relative flex flex-row py-4 px-6 lg:px-2 items-center justify-between lg:justify-around font-sans-serif">
          <a href="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src={Logo}
              className={`w-12 lg:w-16 ${styles.logo} ${styles.logoSpin}`}
              alt="KNereS Logo"
            />
          </a>
          <nav className="hidden lg:flex flex-row gap-16 items-center justify-center font-bold">
            <a
              className="transition-all hover:text-[var(--color-primary)]"
              href="/#about"
            >
              ABOUT ME
            </a>
            <a
              className="transition-all hover:text-[var(--color-primary)]"
              href="/#experiences"
            >
              EXPERIENCES
            </a>
            <a
              className="transition-all hover:text-[var(--color-primary)]"
              href="/#projects"
            >
              PROJECTS
            </a>
            <a
              className="transition-all hover:text-[var(--color-primary)]"
              href="/#skills"
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
          <div className="hidden lg:block relative bg-[var(--color-primary)] h-10 w-32 outline-solid outline-1 outline-[var(--color-primary)]">
            <a
              href="/#contact"
              className="absolute flex items-center justify-center bg-[var(--color-secondary)] h-10 w-32 font-sans-serif font-bold outline-solid outline-1 outline-[var(--color-primary)] transition-transform duration-200 cursor-pointer hover:-translate-x-1 hover:-translate-y-1"
              style={{ bottom: 0, right: 0 }}
            >
              <span className="text-[var(--color-primary)]">#</span>
              CONTACT
            </a>
          </div>
          <div className="lg:hidden z-50">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <HiX className="w-8 h-8 cursor-pointer transition-all ease-in-out duration-250 hover:text-[var(--color-primary)]" />
              ) : (
                <HiMenu className="w-8 h-8 cursor-pointer transition-all ease-in-out duration-250 hover:text-[var(--color-primary)]" />
              )}
            </button>
          </div>
        </header>
      </div>

      <div
        className={`fixed inset-0 z-20 bg-[#0a182e] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6 text-lg text-white font-bold font-sans-serif">
          <a
            onClick={toggleMenu}
            className="transition-all hover:text-[var(--color-primary)]"
            href="/#about"
          >
            ABOUT ME
          </a>
          <a
            onClick={toggleMenu}
            className="transition-all hover:text-[var(--color-primary)]"
            href="/#experiences"
          >
            EXPERIENCES
          </a>
          <a
            onClick={toggleMenu}
            className="transition-all hover:text-[var(--color-primary)]"
            href="/#projects"
          >
            PROJECTS
          </a>
          <a
            onClick={toggleMenu}
            className="transition-all hover:text-[var(--color-primary)]"
            href="/#skills"
          >
            SKILLS
          </a>
          <a
            onClick={toggleMenu}
            className="transition-all hover:text-[var(--color-primary)]"
            href="/blog"
          >
            BLOG
          </a>
          <div className="relative bg-[var(--color-primary)] h-10 w-32 outline-solid outline-1 outline-[var(--color-primary)] mt-4">
            <a
              onClick={toggleMenu}
              href="/#contact"
              className="absolute flex items-center justify-center bg-[var(--color-secondary)] h-10 w-32 font-sans-serif font-bold outline-solid outline-1 outline-[var(--color-primary)] transition-transform duration-200 cursor-pointer hover:-translate-x-1 hover:-translate-y-1"
              style={{ bottom: 0, right: 0 }}
            >
              <span className="text-[var(--color-primary)]">#</span>
              CONTACT
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
