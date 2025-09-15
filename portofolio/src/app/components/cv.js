"use client";
import React from "react";
export default function CV() {
  return (
<>
<div className="bg-gradient-to-b from-[#0b1428] via-[#202755] to-[#0b1428] 
  flex w-full h-100 items-center lg:mt-17 mt-8 flex-col gap-y-14 justify-center">
    <div className="relative">
       <div className="absolute lg:-top-10 md:-top-10 sm:-top-5 -top-5 justify-self-start sm:w-80 w-80 sm:h-72 h-60 bg-pink-700 rounded-full opacity-20 blur-3xl z-0"></div>
       <div className="absolute lg:-top-30 md:-top-30 sm:-top-10 -top-10 justify-self-end  sm:w-80 w-80 sm:h-72 h-60 bg-violet-600 rounded-full opacity-20 blur-3xl z-0"></div>
       <p className="text-lg lg:text-2xl lg:w-[50%] md:w-[60%] sm:w-[80%] w-[80%] justify-self-center text-center leading-loose font-futuristic text-gray-200 z-30">
          Explore my journey in <span className="text-purple-400">web development</span>, 
          education, and projects.  
        </p>
    </div>
    <div>
      <button type="button" className="btn shadow-[0_0_15px_rgba(255,0,240,0.5)] text-sm md:text-lg lg:text-lg"onClick={()=>window.open('/DiellaVeliuCV.pdf','_blank')}>
      <strong className="font-futuristic">View CV</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
    
    </div>

</div>
</>
  );
}
