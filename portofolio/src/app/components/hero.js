"use client";
import React, { useState, useEffect } from "react";

function Hero() {
  
  return (
    <header className="p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1 className="mb-4 text-3xl lg:text-5xl font-bold leading-tight text-gray-900">
          Hi, I am Diella Veliu !  Welcome to My Portfolio
          </h1>

          <p className="mb-4 text-lg text-gray-500 md:pr-16 xl:pr-28">
            I&apos;m Lily Smith, a passionate web developer based in USA. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </p>

          <div className="grid">
            <label className="mb-2 text-gray-900 font-medium">Lorem</label>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
             
            </div>
          </div>

          <p className="font-normal text-gray-500">
         
          </p>
        </div>
        <img
  width={1024}
  height={1024}
  alt="team work"
  src="/images/headshotPortofolio.png"
  className="w-full lg:w-[25rem] h-[30rem] lg:h-[35rem] rounded-xl object-cover justify-self-center"
/>

      </div>
    </header>
  );
}

export default Hero;
