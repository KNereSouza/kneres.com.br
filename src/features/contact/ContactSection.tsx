import { ContactForm } from "../../components/forms/ContactForm";
import styles from "./styles.module.css";
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export function ContactSection() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub size={24} />,
      url: "https://github.com/KNereSouza",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin size={24} />,
      url: "https://linkedin.com/in/kneresouza",
    },
    {
      name: "Instagram",
      icon: <FiInstagram size={24} />,
      url: "https://instagram.com/neres.js",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col items-center justify-center gap-8 md:gap-12 py-20 px-6 font-space-grotesk bg-[var(--color-secondary)] text-white font-sans-serif"
    >
      <h2 className="z-10 font-bold text-4xl md:text-5xl text-center">
        <span className="text-[var(--color-primary)]">#</span>CONTACT
      </h2>
      <div className="z-10 w-full max-w-6xl flex flex-col md:flex-row gap-12 md:gap-16 items-stretch">
        <div className="flex flex-col gap-6 md:gap-8 md:w-1/2">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl md:text-3xl text-[var(--color-primary)] font-monospace">
              Let's Talk!
            </h3>
            <p className="text-gray-300 text-base md:text-lg font-sans-serif">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. If you have something in
              mind or just want to say hi, feel free to reach out.
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-auto">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-xl font-monospace">
                Send me an email
              </h4>
              <a
                href="mailto:contato@kneres.com.br"
                className="flex items-center gap-3 text-[var(--color-primary)]/75 transition-colors hover:text-[var(--color-primary)] w-fit font-monospace font-bold"
              >
                <FiMail size={22} />
                <span className="text-base md:text-lg">
                  contato@kneres.com.br
                </span>
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-xl font-monospace">
                Find me on:
              </h4>
              <div className="flex items-center gap-5">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-[var(--color-primary)]/75 transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex">
          <ContactForm />
        </div>
      </div>
      <div
        className={`absolute z-0 ${styles.contactBackground} blur-xs w-full min-h-screen`}
      ></div>
    </section>
  );
}
