import Providers from "./Providers";
import Footer from "./components/Footer";
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

          {/* Footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
