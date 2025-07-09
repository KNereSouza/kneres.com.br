import { Header } from "../../components/header/Header";

export function Blog() {
  return (
    <>
      <Header />
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-[var(--color-secondary)] text-[var(--color-primary)] font-sans-serif gap-16">
        <h1 className="font-bold text-2xl">Blog in Development... {":("}</h1>
        <p className="text-white">
          This section is currently under construction. <br /> Please check back
          soon!
        </p>
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmFjbHI4aWl6NHdteHl2bzR3Z2VmaW1zbWdlenNyb291MWZlcmtsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26hiu3mZVquuykwhy/giphy.gif"
          alt="Myself"
        />
      </div>
    </>
  );
}
