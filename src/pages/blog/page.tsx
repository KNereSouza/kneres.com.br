import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import styles from "./styles.module.css";

export function Blog() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-secondary)]">
      <Header />
      <main className="relative flex-grow flex flex-col items-center justify-center text-center text-[var(--color-primary)] font-sans-serif gap-8 md:gap-12 px-6">
        <h1 className="font-bold text-xl md:text-2xl z-10">
          Blog in Development... {":("}
        </h1>
        <p className="text-white z-10 text-base md:text-lg">
          This section is currently under construction. Please check back soon!
        </p>
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmFjbHI4aWl6NHdteHl2bzR3Z2VmaW1zbWdlenNyb291MWZlcmtsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26hiu3mZVquuykwhy/giphy.gif"
          alt="Work in progress GIF"
          className="z-10 w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg"
        />
        <div
          className={`absolute z-0 ${styles.blogBackground} w-full h-full`}
        ></div>
      </main>
      <Footer />
    </div>
  );
}
