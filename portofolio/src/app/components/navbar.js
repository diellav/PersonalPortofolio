"use client";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NAV_MENU = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function NavItem({ name, href, scrolled, onClick }) {
  return (
    <li>
      <a
        href={href || "#"}
         onClick={onClick}
        className={`block py-2 px-4 font-medium ${
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

  const toggleOpen = () => setOpen((cur) => !cur);
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
    <nav
      className={`w-full sticky top-0 left-0 z-[9999] transition-colors duration-300 ${
        scrolled ? "bg-purple-600/10 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className={`text-3xl font-bold text-purple-400 font-futuristic  ${
        scrolled ? "visible" : "invisible"
      }`}
         onClick={()=>setOpen(false)}>
          DiellaVeliu.
        </a>

       
        <ul className="hidden lg:flex gap-8 font-mono">
          {NAV_MENU.map((item) => (
            <NavItem key={item.name} name={item.name} href={item.href} scrolled={scrolled}/>
          ))}
        </ul>

        <button
          onClick={toggleOpen}
          className="lg:hidden p-2 rounded-md text-white focus:outline-none "
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-purple-600/20 backdrop-blur-md shadow-md font-mono">
          <ul className="flex flex-col gap-2 px-4 py-4">
            {NAV_MENU.map((item) => (
              <NavItem key={item.name} name={item.name} href={item.href} scrolled={scrolled} 
         onClick={()=>setOpen(false)}/>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
