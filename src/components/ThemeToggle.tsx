import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="border px-3 py-1 rounded-xl text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      aria-label="Basculer le thème"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
