"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiReact, SiJavascript, SiTailwindcss, SiGit, SiLaravel, SiPhpmyadmin, SiMysql, SiNodedotjs } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { SkillCard } from "@/app/components/skillcard";

const SKILLS = [
  { icon: SiHtml5, color: "#E34F26", title: "HTML" },
  { icon: SiCss3, color: "#1572B6", title: "CSS" },
  { icon: SiReact, color: "#61DAFB", title: "ReactJS" },
  { icon: SiJavascript, color: "#F7DF1E", title: "JavaScript" },
  { icon: DiJava, color: "#007396", title: "Java" },
  { icon: SiGit, color: "#F05032", title: "Git" },
  { icon: SiTailwindcss, color: "#38B2AC", title: "TailwindCSS" },
  { icon: SiLaravel, color: "#FF2D20", title: "PHPLaravel" },
  { icon: SiPhpmyadmin, color: "#003545", title: "phpMyAdmin" },
  { icon: SiMysql, color: "#4479A1", title: "SQL" },
  { icon: SiNodedotjs, color: "#339933", title: "Node.js" },
];

export function About() {
  const containerRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [firstRowWidth, setFirstRowWidth] = useState(0);
  const [secondRowWidth, setSecondRowWidth] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (firstRowRef.current) {
      setFirstRowWidth(firstRowRef.current.scrollWidth / 3);
    }
    if (secondRowRef.current) {
      setSecondRowWidth(secondRowRef.current.scrollWidth / 3);
    }
  }, [isMobile]);

  const first = SKILLS.slice(0, 6);
  const second = SKILLS.slice(6);

  const firstDuration = isMobile ? 8 : 20;
  const secondDuration = isMobile ? 9 : 22;

  return (
    <section ref={containerRef} className="px-2 mt-20">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="font-futuristic mb-4 text-4xl font-bold text-accent">About Me</h2>
  <p className=" font-mono leading-loose mx-auto w-full text-text text-shadow-[0_0_5px_rgba(0,120,255,0.5)] lg:w-10/12 lg:text-lg sm:text-base text-base">
      I’m a <span className="text-gray-200">Computer Science and Engineering</span> student from Prishtina, and
  I started this journey by building small and simple projects for my college courses, and over time that turned into a passion to <span className="text-gray-200">dive deeper into the expansive world that is web development and software engineering</span>. 
  Turning simple ideas into something real and functional is the main reason why I enjoy being part of this field.
Outside of classes, I spend a lot of time experimenting with new tools and try to keep up with new tech trends, while also collaborating with others to further improve my skills. 
</p>
<br></br>
<br></br>
<br></br>
<div className="relative z-10 font-mono leading-loose mx-auto w-full text-text lg:w-10/12">
  <h3 className="font-bold text-xl text-accent mb-2">Education & Professional Development</h3>
  <br></br>
   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-self-center w-96 h-96 bg-purple-800 rounded-full opacity-20 blur-3xl z-0 pointer-events-none"></div>
  <ul className="list-none w-full z-20 justify-self-center text-text lg:w-10/12">
    <li>
      <p className="text-mini lg:text-lg sm:text-base text-base text-gray-200">University of Business and Technology - UBT </p><p className="lg:text-base md:text-base text-base text-shadow-[0_0_3px_rgba(0,120,255,0.5)]">
        BSc in Computer Science and Engineering (Expected 2026)</p>
    </li>
    <br></br>
    <li>
      <p className="text-mini lg:text-lg sm:text-base text-base text-gray-200">Full Stack Development Internship @ Tectigon Academy (2025)</p>
        <p className="text-base lg:text-base md:text-base hover:underline inline-block cursor-pointer w-fit z-30" onClick={()=>window.open('/Tectigon.pdf','_blank')}>View Certification</p>
    </li>
    <br></br>
     <li>
      <p className="text-mini lg:text-lg sm:text-base text-base text-gray-200">C# Programming & SQL Databases Course @ Prishtina REA (2024)</p>
        <p className="text-base lg:text-base md:text-base hover:underline inline-block cursor-pointer w-fit z-30" onClick={()=>window.open('/C.pdf','_blank')}>View Certification</p>
    </li>
  </ul>
</div>
      </div>

      <div className="relative w-full overflow-hidden py-6">
          <p className="justify-self-center mb-8 font-futuristic font-bold text-accent  text-center text-xl">MY SKILLS</p>
           <div className={`absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 ${isMobile ? "w-5" : "w-20"}`}/>
        <div className={`absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 ${isMobile ? "w-5" : "w-20"}`} />
        <motion.div
          ref={firstRowRef}
          className="flex gap-8"
          animate={{ x: isVisible ? [0, -firstRowWidth] : 0 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: firstDuration,
            repeatType: "loop",
          }}
        >
          {[...first, ...first, ...first].map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="flex-shrink-0"
            >
              <SkillCard {...skill} isMobile={isMobile} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden py-6">
     <div className={`absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 ${isMobile ? "w-5" : "w-20"}`}/>
        <div className={`absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 ${isMobile ? "w-5" : "w-20"}`} />
        <motion.div
          ref={secondRowRef}
          className="flex gap-8"
          animate={{ x: isVisible ? [-secondRowWidth,0] : 0 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: secondDuration,
            repeatType: "loop",
          }}
        >
          {[...second, ...second, ...second].map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="flex-shrink-0"
            >
              <SkillCard {...skill} isMobile={isMobile} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
