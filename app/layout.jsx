import Providers from "./Providers";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./globals.css";

export const metadata = {
  title: "Movies DB",
  description: "Created By Elsayed Rapaa Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Navbar */}
          <Navbar />

          {/* Search */}
          <Search />

          {children}
        </Providers>
      </body>
    </html>
  );
}
