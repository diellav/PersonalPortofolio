"use client";
import React, { useState, useEffect } from "react";
import { Navbar as MTNavbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NAV_MENU = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function NavItem({ name, href }) {
  return (
    <li>
      <a
        href={href || "#"}
        className="text-gray-700 hover:text-purple-500 font-medium block py-2"
      >
        {name}
      </a>
    </li>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScrolled(true);
    } else {
      setScrolled(false); 
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <MTNavbar shadow={false} fullWidth className={`sticky top-0 z-50 transition-colors duration-300 ${
    scrolled ? "bg-purple-500" : "bg-transparent"
  }`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4 ">
        <a href="#" className="text-lg font-bold text-blue-gray-900">
          Diella's Portofolio
        </a>

        <ul className="hidden lg:flex gap-8">
          {NAV_MENU.map((item) => (
            <NavItem key={item.name} name={item.name} href={item.href} />
          ))}
        </ul>

        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="lg:hidden"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </IconButton>
      </div>

     {open && (
  <Collapse className="lg:hidden">
    <ul className="flex flex-col gap-2 px-4 pb-4 bg-auto">
      {NAV_MENU.map((item) => (
        <NavItem key={item.name} name={item.name} href={item.href} />
      ))}
    </ul>
  </Collapse>
)}
    </MTNavbar>
  );
}
