import Link from "next/link";
import NavbarItem from "./NavbarItem";
import { FiHome, FiInfo, FiTrendingUp } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto py-4 sm:px-12 px-4">
      <h2 className="logo sm:text-2xl text-xl font-bold">
        <Link href="/">
          <span className="bg-amber-400 px-2 pb-1 rounded-lg mr-1">MOVIES</span>
          <span className="sm:inline hidden">DB</span>
        </Link>
      </h2>
      <nav className="flex items-center">
        <ul className="flex items-center space-x-4">
          <NavbarItem
            title="HOME"
            link="/"
            icon={<FiHome className="sm:hidden inline text-2xl" />}
          />
          <NavbarItem
            title="ABOUT"
            link="/about"
            icon={<FiInfo className="sm:hidden inline text-2xl" />}
          />
          <NavbarItem
            title="TRENDING"
            link="/trending"
            icon={<FiTrendingUp className="sm:hidden inline text-2xl" />}
          />
          <NavbarItem
            title="TOP RATED"
            link="/top_rated"
            icon={<FaStar className="sm:hidden inline text-2xl" />}
          />
        </ul>
      </nav>
    </div>
  );
}
