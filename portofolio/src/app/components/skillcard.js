"use client";
import React from "react";

export function SkillCard({ icon: Icon, color, title, isMobile }) {
  return (
    <div className={`flex flex-col items-center justify-center p-2 md:p-4
     bg-white/0 backdrop-blur-sm rounded-xl border border-white/10  shadow-[0_0_5px_rgba(255,0,240,0.5)] hover:shadow-[0_0_10px_rgba(255,0,240,0.8)]">
     ${isMobile ? 'min-w-[80px] h-[80px]' : 'min-w-[100px] h-[100px]'} transition-all duration-300
     `}>
      <div className={`${isMobile ? 'text-2xl' : 'text-3xl'} mb-1 md:mb-2`} style={{ color }}>
        <Icon />
      </div>
      <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium font-futuristic text-white`}>{title}</span>
    </div>
  );
}

export default SkillCard;
