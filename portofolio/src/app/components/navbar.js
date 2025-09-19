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
    <li className="list-none">
      <a
        href={href || "#"}
        onClick={onClick}
        className={`block py-2 px-4 font-medium ${
          scrolled
            ? "text-purple-100 font-bold hover:text-purple-300"
            : "text-purple-400 hover:text-purple-100"
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
    <>
    <nav
      className={`w-full sticky top-0 left-0 transition-all duration-300 ${
        scrolled || open
          ? "bg-purple-600/20 shadow-md"
          : "bg-transparent"
      }`}
      style={{ 
        zIndex: 9999,
        backdropFilter: (scrolled || open) ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: (scrolled || open) ? 'blur(12px)' : 'none'
      }}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a
          href="#home"
          className={`text-3xl font-bold text-purple-400 font-futuristic ${
            scrolled || open ? "visible" : "invisible"
          }`}
          onClick={() => setOpen(false)}
        >
          DiellaVeliu.
        </a>

        <ul className="hidden lg:flex gap-8 font-mono text-xl decoration-0">
          {NAV_MENU.map((item) => (
            <NavItem
              key={item.name}
              name={item.name}
              href={item.href}
              scrolled={scrolled}
            />
          ))}
        </ul>

        <button
          onClick={toggleOpen}
          className="lg:hidden p-2 rounded-md text-white focus:outline-none"
          style={{ zIndex: 9999 }}
        >
          {open ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>
</nav>
 {open && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/30"
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div
          className="lg:hidden fixed top-0 left-0 w-full h-screen bg-purple-600/20 shadow-2xl z-40 pt-16"
          style={{
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}
        >
          <div className="flex flex-col font-futuristic pt-12 px-0 text-2xl gap-6 items-center decoration-0">
            {NAV_MENU.map((item) => (
              <NavItem
                key={item.name}
                name={item.name}
                href={item.href}
                scrolled={true}
                onClick={() => setOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}