import { useEffect } from "react";
import useLocalStorage from "./UseLocalStorage";

export default function LightDarkTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main className="w-screen h-screen flex items-center justify-center p-4 bg-background text-text ">
      <section className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-semibold">Hello World</h1>
        <button
          className="text-xl font-semibold p-3   cursor-pointer rounded-xl active:scale-[90%] bg-button text-btntext"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Change Theme
        </button>
      </section>
    </main>
  );
}
