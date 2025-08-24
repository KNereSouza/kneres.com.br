import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import styles from "./styles.module.css";

export function Blog() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-secondary)]">
      <Header />
      <main className="relative p-28 flex-grow flex flex-col items-center justify-center text-center text-[var(--color-primary)] font-sans-serif gap-6 md:gap-8 px-4 sm:px-6 animate-fade-in-up">
        <h1 className="font-bold text-2xl md:text-3xl z-10">
          Our Blog is Coming Soon!
        </h1>
        <p className="text-white z-10 text-base md:text-lg max-w-lg">
          We are preparing amazing content for you. Check back soon to explore
          new ideas and tutorials!
        </p>
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmFjbHI4aWl6NHdteHl2bzR3Z2VmaW1zbWdlenNyb291MWZlcmtsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26hiu3mZVquuykwhy/giphy.gif"
          alt="Work in progress GIF"
          className="z-10 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-lg shadow-black/30 ring-2 ring-[var(--color-primary)] opacity-75"
        />
        <div
          className={`absolute z-0 ${styles.blogBackground} w-full h-full`}
        ></div>
      </main>
      <Footer />
    </div>
  );
}
