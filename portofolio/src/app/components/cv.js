"use client";
import React from "react";
export default function CV() {
  return (
<>
<div className="bg-gradient-to-b from-[#111c37] via-[#313a80] to-[#111c37] 
  flex justify-around w-full h-100 items-center mt-30">
<div className="content">
   <div className="planet ">
      <div className="ring"></div>
         <div className="cover-ring"></div>
      <div className="spots">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>

      </div>
   </div>
   <p className="text-shadow-[0_0_10px_rgba(0,120,255,0.5)]">Orbit Through My Experience...</p>
</div>

    <div>
      <button type="button" className="btn"onClick={()=>window.open('/DiellaVeliuCV.pdf','_blank')}>
      <strong>MY CV</strong>
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
