"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/app/components/hero";
import Projects from "@/app/pages/projects";
import About from "@/app/pages/about";
import Contact from "@/app/pages/contact";
import CV from "@/app/components/cv";
import './globals.css'
export default function Home() {
  return (
    <div>
      <div id="home" className="scroll-mt-24">
      <Hero></Hero></div>
           <div id="about" className="px-8 mt-20 scroll-mt-24">
      <About></About></div>
      <CV></CV>
      <div id="projects">
      <Projects></Projects></div>
         <div id="contact">
      <Contact></Contact></div>
    </div>
   
  );
}
