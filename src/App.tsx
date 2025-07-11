import myLogo from "./assets/icon.svg";
import "./App.css";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export function App() {
  return (
    <>
      <div className="main-content">
        <a href="https://www.instagram.com/neres.js/" target="_blank">
          <img
            src={myLogo}
            className="logo apply-logo-spin"
            alt="KNereS Logo"
          />
        </a>
        <h1>Available Soon...</h1>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/kneresouza/"
            className="link"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/KNereSouza"
            className="link"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/neres.js/"
            className="link"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
        <Typewriter
          options={{
            strings: [
              "npx create-vite@latest",
              "npm run dev",
              "code . && coffee ☕",
              "git push -u origin main",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
      <div className="background"></div>
    </>
  );
}
