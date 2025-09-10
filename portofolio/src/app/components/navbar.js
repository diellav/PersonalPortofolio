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

function NavItem({ name, href , scrolled}) {
  return (
    <li>
      <a
        href={href || "#"}
        className={`font-medium block py-2 ${
          scrolled? "text-purple-100 font-bold hover:text-purple-300"
    :"text-purple-400 hover:text-purple-100"
  }`}
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
    scrolled ? "bg-purple-600/10 backdrop-blur-md shadow-md" : "bg-transparent"
  }`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="font-futuristic text-3xl font-bold text-purple-400">
          DiellaVeliu.
        </a>

        <ul className="font-mono hidden lg:flex gap-8 text-word">
          {NAV_MENU.map((item) => (
            <NavItem key={item.name} name={item.name} href={item.href} scrolled={scrolled}  />
          ))}
        </ul>

        <IconButton
          variant="text"
          onClick={handleOpen}
          className="lg:hidden"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </IconButton>
      </div>

     {open && (
  <Collapse className="lg:hidden">
    <ul className="flex flex-col gap-2 px-4 pb-4 bg-auto text-mini">
      {NAV_MENU.map((item) => (
        <NavItem key={item.name} name={item.name} href={item.href}  scrolled={scrolled} />
      ))}
    </ul>
  </Collapse>
)}
    </MTNavbar>
  );
}
