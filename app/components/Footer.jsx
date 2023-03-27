import React from "react";

export default function Footer() {
  return (
    <footer className="dark:bg-slate-800 bg-amber-200 dark:text-slate-200 py-4">
      <p className="text-center text-sm flex flex-col space-y-2">
        All Right Saved &copy; {new Date().getFullYear()}
        <span className="text-base">Created By ❤ Elsayed Rapaa Developer</span>
      </p>
    </footer>
  );
}
