"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div
        className="
            dark:bg-slate-900
            dark:text-slate-200
            bg-white
            text-slate-600
            select-none
            min-h-screen
            transition-colors
            duration-300"
      >
        {children}
      </div>
    </ThemeProvider>
  );
}
