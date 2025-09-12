"use client";
import React from "react";
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Contact() {
  return (

<>
      <div className="container mx-auto flex h-full flex-col min-h-[40vh] w-full items-center justify-items-center">
        <div className="flex flex-col space-y-3 p-6  mt-8" >
          <h1 className="font-futuristic text-accent mb-4 text-3xl font-bold lg:text-4xl text-center">
            Contact
          </h1>
          <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col gap-16 lg:gap-0 md:gap-10 justify-around p-6 mt-8 ">
          <div className="w-full lg:w-[40%] md:w-[80%] sm:w-[99%] flex items-center"><h4 className="leading-loose text-text items-center text-lg lg:text-xl font-mono text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">
            Interested in collaborating on a project or have an opportunity to discuss? I’d be happy to connect!</h4></div>
          <div className="w-[99%] sm:[99%] md:[90%] lg:w-[40%] space-y-6 justify-self-center">
          <h4 className="flex flex-row items-center gap-x-5 text-text text-lg lg:text-xl font-mono text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">
            <HiOutlineMail className="h-5 w-5 text-text" />{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=diellaveliu@gmail.com"
              className="hover:underline"   
               target="_blank"
               rel="noopener noreferrer">
              diellaveliu@gmail.com</a></h4>
          <h4 className="flex flex-row items-center gap-x-5 text-text text-lg lg:text-xl font-mono text-shadow-[0_0_10px_rgba(0,120,255,0.5)]"> <FaLinkedin className="h-5 w-5 text-text" /> {" "}<a  href="https://linkedin.com/in/diella-veliu"
              className="hover:underline"  target="_blank"   rel="noopener noreferrer">linkedin.com/in/diella-veliu</a></h4>
          <h4 className="flex flex-row items-center gap-x-5 text-text text-lg lg:text-xl font-mono text-shadow-[0_0_10px_rgba(0,120,255,0.5)]"><FaGithub className="h-5 w-5 text-text" /> {" "}<a  href="https://github.com/diellav"
              className="hover:underline"  target="_blank"   rel="noopener noreferrer">diellav</a></h4>
        </div>
      </div>
      </div>
      </div>
      <a href="#home"
        className="block mb-8 shadow-[0_0_10px_rgba(255,0,240,0.5)] w-fit mt-8 px-4 py-3 border-2 border-purple-500 hover:border-4
        text-white rounded-xl justify-self-center
      transition-transform transform hover:-translate-y-1"><ArrowUpIcon className="h-6 w-6 text-text font-mono text-shadow-[0_0_10px_rgba(0,120,255,0.5)]"/>
      </a>
      <p className="font-futuristic text-text justify-self-center mb-5 text-xs ">Diella Veliu @2025</p>
  </>
  );
}

export default Contact;
