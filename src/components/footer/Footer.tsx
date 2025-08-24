import { FiGithub, FiLinkedin, FiInstagram, FiArrowUp } from "react-icons/fi";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/KNereSouza",
    icon: <FiGithub size={22} />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kneresouza",
    icon: <FiLinkedin size={22} />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/neres.js",
    icon: <FiInstagram size={22} />,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const userReachedTheEnd = () => {
    return (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 64
    );
  };

  useEffect(() => {
    const handleScroll = () => setShowButton(userReachedTheEnd());
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="w-full bg-[var(--color-secondary)] text-gray-400 font-sans-serif p-8 border-t border-[var(--color-primary)]/20">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* --- Top Section: Links and Socials --- */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-2xl font-bold text-white font-monospace">
            kneres.com.br<span className="text-[var(--color-primary)]">.</span>
          </div>

          <nav>
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-[var(--color-primary)] font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="transition-colors hover:text-[var(--color-primary)]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[var(--color-primary)]/10 text-sm">
          <p>&copy; {currentYear} Kauã Neres de Souza. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`
              group ${styles.hoverAnimation}
              flex pr-4 pl-3 py-1 outline outline-[var(--color-primary)]
              text-center items-center gap-1 transition-all duration-500 ease-in-out
              text-[var(--color-primary)] 
              hover:text-[var(--color-secondary)] 
              hover:bg-[var(--color-primary)] 
              hover:shadow-[0_0_20px_var(--color-primary)]/40
              cursor-pointer
              ${
                showButton
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }
            `}
          >
            <FiArrowUp className={`bounceArrow ${styles.bounceArrow}`} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
