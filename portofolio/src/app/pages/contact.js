"use client";
import React from "react";

function Contact() {
  return (

<>
      <div className="container mx-auto grid h-full min-h-[70vh] w-full grid-cols-1 items-center gap-16 sm:grid-cols-2 sm:gap-2">
 <div className="flex justify-center items-center">
  <div className="relative flex items-center justify-center 
                          w-64 h-64 md:w-52 md:h-52 sm:w-40 sm:h-40">
    <div className="loading scale-100 md:scale-90 sm:scale-75">
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
        <div className="flex flex-col justify-center space-y-3 p-6" >
          <h1 className="font-futuristic text-accent mb-4 text-3xl font-bold lg:text-4xl">
            Contact Me
          </h1>

          <h4 className="text-text text-lg lg:text-xl font-mono text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">Email: diellaveliu@gmail.com</h4>
          <h4 className="text-text text-lg lg:text-xl font-mono text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">Instagram: diellaveliu</h4>
          <h4 className="text-text text-lg lg:text-xl font-mono text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">LinkedIn: linkd/diellaveliu</h4>
          <h4 className="text-text text-lg lg:text-xl font-mono text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">GitHub: diellav</h4>
        </div>


      </div>
  </>
  );
}

export default Contact;
