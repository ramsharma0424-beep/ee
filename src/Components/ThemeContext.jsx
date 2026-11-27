import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    let next = "dark";
    try {
      next = localStorage.getItem("ee-theme") === "light" ? "light" : "dark";
    } catch {
      next = "dark";
    }
    document.documentElement.classList.toggle("site-light", next === "light");
    return next;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("site-light", theme === "light");
    try {
      localStorage.setItem("ee-theme", theme);
    } catch {
      /* storage can be unavailable in private mode */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
