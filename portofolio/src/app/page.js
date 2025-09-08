"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/app/components/hero";
import Projects from "@/app/pages/projects";
import About from "@/app/pages/about";
import Contact from "@/app/pages/contact";

import './globals.css'
export default function Home() {
  return (
    <div>
      <div id="home">
      <Hero></Hero></div>
           <div id="about">
      <About></About></div>
      <div id="projects">
      <Projects></Projects></div>
         <div id="contact">
      <Contact></Contact></div>
    </div>
   
  );
}
