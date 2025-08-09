import { Header } from "../../components/header/Header";
import styles from "./styles.module.css";

export function Blog() {
  return (
    <>
      <Header />
      <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-[var(--color-secondary)] text-[var(--color-primary)] font-sans-serif gap-16">
        <h1 className="font-bold text-2xl z-10">
          Blog in Development... {":("}
        </h1>
        <p className="text-white z-10">
          This section is currently under construction. <br /> Please check back
          soon!
        </p>
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmFjbHI4aWl6NHdteHl2bzR3Z2VmaW1zbWdlenNyb291MWZlcmtsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26hiu3mZVquuykwhy/giphy.gif"
          alt="Myself"
          className="z-10"
        />
        <div
          className={`absolute z-0 ${styles.blogBackground} w-full h-full`}
        ></div>
      </div>
    </>
  );
}
