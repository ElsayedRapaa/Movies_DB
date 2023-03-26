import Link from "next/link";

export default function NavbarItem({ title, link, icon }) {
  return (
    <li>
      <Link
        href={link}
        className="hover:text-amber-400 transition-colors duration-200 font-medium"
      >
        <span className="hidden sm:inline">{title}</span>
        {icon}
      </Link>
    </li>
  );
}
