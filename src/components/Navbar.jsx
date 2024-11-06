"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Menu, X } from "lucide-react"
import Menuoverlay from "./Menuoverlay";


const links = [
  { href: "#about", title: "Sobre" },
  { href: "#projects", title: "Projetos" },
  { href: "#contact", title: "Contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-4">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold py-4 px-12"
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!isOpen ? (
            <button onClick={() => setIsOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-late-200 text-white hover:text-white hover:border-white">
              <Menu className="h-5 w-5"></Menu>
            </button>
          ) : (
            <button onClick={() => setIsOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-late-200 text-white hover:text-white hover:border-white">
              <X className="h-5 w-5"></X>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen && <Menuoverlay links={links} />}
    </nav>
  );
};

export default Navbar;
