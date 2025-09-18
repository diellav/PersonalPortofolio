"use client";
import React, { useState, useEffect, useRef } from "react";

function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    for (let i = 0; i < 250; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: 0.1 + Math.random() * 0.3,
        opacity: Math.random(),
        opacitySpeed: 0.005 + Math.random() * 0.015,
        opacityDirection: Math.random() > 0.5 ? 1 : -1, 
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let star of stars) {
  
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.speed;
        if (star.x > canvas.width) {
          star.x = 0;
          star.y = Math.random() * canvas.height;
        }

        star.opacity += star.opacitySpeed * star.opacityDirection;
        if (star.opacity <= 0 || star.opacity >= 1) {
          star.opacityDirection *= -1; 
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
    />
  );
}
function Hero() {
  
  return (
    <header className="p-8 overflow-hidden">
       <StarsBackground />
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center justify-items-center lg:grid-cols-2">
        <div className="relative typewriter  row-start-1 sm:row-start-1 md:row-start-1 lg:row-auto sm:w-[90%] text-start">
               <h1 className="font-futuristic bg-gradient-to-r from-purple-700 via-purple-400 to-gray-400 mb-4 text-3xl font-bold leading-tight  bg-clip-text text-transparent lg:text-5xl">
            Hi, I'm Diella Veliu !
          </h1>

          <p className="type font-mono mb-4 leading-loose text-lg text-text md:pr-16 xl:pr-28 text-shadow-[0_0_5px_rgba(0,120,255,0.5)]">
              Welcome to my little corner of the internet where I share my projects, experiences and what I’m learning along the way in becoming a software developer.
          </p>
          <a href="#projects"
            className="block shadow-[0_0_10px_rgba(255,0,240,0.5)] w-fit mt-8 px-6 py-3 border-2 
             border-purple-500 hover:border-4 text-white rounded-xl font-futuristic transition-transform 
             transform hover:-translate-y-1  lg:self-start"> View Projects
          </a>
        </div>
        <img
  width={1024}
  height={1024}
  alt="team work"
  src="/images/headshotPortofolio.png"
  className="row-start-2 sm:row-start-2 md:row-start-2 lg:row-auto w-full
    md:w-[20rem] md:h-[20rem] 
    lg:w-[22rem] lg:h-[25rem] 
  rounded-xl object-cover justify-self-center
custom-img shadow-[0_0_10px_rgba(0,120,255,0.5)]"
/>

</div>
    </header>
  );
}

export default Hero;
