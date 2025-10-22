import { Moon, Sun, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

type ThemeMode = "light" | "dark" | "auto";

export const ThemeToggle = () => {
  const [mode, setMode] = useState<ThemeMode>("light");
  const [actualTheme, setActualTheme] = useState<"light" | "dark">("light");

  const getAutoTheme = (): "light" | "dark" => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? "light" : "dark";
  };

  const applyTheme = (theme: "light" | "dark") => {
    setActualTheme(theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") as ThemeMode | null;
    const initialMode = savedMode || "auto";
    setMode(initialMode);

    if (initialMode === "auto") {
      applyTheme(getAutoTheme());
      
      // Update theme every minute when in auto mode
      const interval = setInterval(() => {
        if (localStorage.getItem("themeMode") === "auto") {
          applyTheme(getAutoTheme());
        }
      }, 60000);
      
      return () => clearInterval(interval);
    } else {
      applyTheme(initialMode);
    }
  }, []);

  const cycleTheme = () => {
    let newMode: ThemeMode;
    if (mode === "light") {
      newMode = "dark";
    } else if (mode === "dark") {
      newMode = "auto";
    } else {
      newMode = "light";
    }
    
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
    
    if (newMode === "auto") {
      applyTheme(getAutoTheme());
    } else {
      applyTheme(newMode);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={cycleTheme}
      className="rounded-full transition-transform hover:scale-110 relative group"
      title={mode === "auto" ? "Auto (6AM-6PM Light)" : mode === "light" ? "Light Mode" : "Dark Mode"}
    >
      {mode === "light" ? (
        <Sun className="h-5 w-5" />
      ) : mode === "dark" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Clock className="h-5 w-5" />
      )}
      {mode === "auto" && (
        <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-primary rounded-full border-2 border-background" />
      )}
    </Button>
  );
};
