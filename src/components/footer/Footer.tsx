import { FiGithub, FiLinkedin, FiInstagram, FiArrowUp } from "react-icons/fi";

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-[var(--color-secondary)] text-gray-400 font-sans-serif p-8 border-t border-[var(--color-primary)]/20">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* --- Top Section: Links and Socials --- */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Branding/Name */}
          <div className="text-2xl font-bold text-white font-monospace">
            kneres.com.br<span className="text-[var(--color-primary)]">.</span>
          </div>

          {/* Navigation Links */}
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

          {/* Social Icons */}
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

        {/* --- Bottom Section: Copyright and Back to Top --- */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[var(--color-primary)]/10 text-sm">
          <p>&copy; {currentYear} Kauã Neres de Souza. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 transition-colors hover:text-[var(--color-primary)]"
          >
            Back to Top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
