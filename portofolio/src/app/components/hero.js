"use client";
import React, { useState, useEffect } from "react";

function Hero() {
  
  return (
    <header className="p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="typewriter row-start-2 lg:row-auto ">
               <h1 className="font-futuristic bg-gradient-to-r from-purple-700 via-purple-400 to-gray-400 mb-4 text-3xl font-bold leading-tight  bg-clip-text text-transparent lg:text-5xl">
          Hi, I am Diella Veliu !
          </h1>

          <p className="type font-mono mb-4 text-lg text-text md:pr-16 xl:pr-28 text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">
            I&apos;m Lily Smith, a passionate web developer based in USA. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </p>

        </div>
        <img
  width={1024}
  height={1024}
  alt="team work"
  src="/images/headshotPortofolio.png"
  className="w-full
    md:w-[20rem] md:h-[20rem] 
    lg:w-[25rem] lg:h-[27rem] 
  rounded-xl object-cover justify-self-center
custom-img shadow-[0_0_10px_rgba(0,120,255,0.5)]"
/>

      </div>
    </header>
  );
}

export default Hero;
