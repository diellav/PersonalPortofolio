"use client";
import React from "react";

function Contact() {
  return (
    <header className="p-8">
      <div className="container mx-auto grid h-full gap-16 min-h-[70vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto flex flex-col justify-center space-y-3">
          <h1 className="font-futuristic text-accent mb-4 text-4xl font-bold lg:text-6xl">
            Contact Me
          </h1>

          <h4 className="text-text text-lg lg:text-xl font-mono text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">Email: diellaveliu@gmail.com</h4>
          <h4 className="text-text text-lg lg:text-xl font-mono text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">Instagram: diellaveliu</h4>
          <h4 className="text-text text-lg lg:text-xl font-mono text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">LinkedIn: linkd/diellaveliu</h4>
          <h4 className="text-text text-lg lg:text-xl font-mono text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">GitHub: diellav</h4>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-64 h-64 rounded-xl flex items-center justify-center ">
        
<div className="loading">
  <div className="loading-wide">
    <div className="l1 color"></div>
    <div className="l2 color"></div>
    <div className="e1 color animation-effect-light"></div>
    <div className="e2 color animation-effect-light-d"></div>
    <div className="e3 animation-effect-rot">X</div>
    <div className="e4 color animation-effect-light"></div>
    <div className="e5 color animation-effect-light-d"></div>
    <div className="e6 animation-effect-scale">*</div>
    <div className="e7 color"></div>
    <div className="e8 color"></div>
  </div>
</div>

          </div>
        </div>

      </div>
    </header>
  );
}

export default Contact;
