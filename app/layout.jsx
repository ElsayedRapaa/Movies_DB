import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Movies DB",
  description: "Created By Elsayed Rapaa Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-900 dark:text-slate-200">
        {/* Navbar */}
        <Navbar />

        {children}
      </body>
    </html>
  );
}
