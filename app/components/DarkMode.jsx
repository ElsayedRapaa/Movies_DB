"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkMode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex items-center gap-4">
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          className="
                text-2xl
                hover:text-amber-400
                transition-colors
                duration-200
                cursor-pointer
                mt-1"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdDarkMode
          className="
                text-2xl
                hover:text-amber-400
                transition-colors
                duration-200
                cursor-pointer
                mt-1"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
