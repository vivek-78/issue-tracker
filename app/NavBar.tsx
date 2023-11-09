"use client";
import React from "react";
import { FaBug } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
function NavBar() {
  const currentPathName = usePathname();
  const links = [
    {
      href: "/dashboard",
      lable: "Dashboard",
    },
    {
      href: "/issues/list",
      lable: "Issues",
    },
  ];
  return (
    <nav className="flex space-x-6 p-5 mb-5 h-14 border-b items-center">
      <Link href="/" className="text-slate-950">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classNames({
                "text-zinc-900":currentPathName === link.href,
                "text-zinc-500":currentPathName !== link.href,
                "transition-colors": true
              })}
            >
              {link.lable}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
