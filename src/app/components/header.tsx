"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Top",
    href: "/",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={`flex gap-4 p-4
      bg-neutral-950 border-neutral-800
      border-b-4`}
    >
      {links.map((link) => (
        <Link
          key={link.title}
          className={`${
            pathname == link.href ? "text-neutral-50" : "text-neutral-700"
          } text-xl duration-150`}
          href={link.href}
        >
          {link.title}
        </Link>
      ))}
    </header>
  );
}
