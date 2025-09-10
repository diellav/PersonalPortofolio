"use client";
import React from "react";

export function SkillCard({ icon: Icon, color, title }) {
  return (
    <div className="bg-transparent shadow-none justify-self-center">
      <div className="p-[4px]  w-35 justify-center text-center  rounded-2xl bg-gradient-to-r from-pink-700 via-purple-600 to-blue-700
      shadow-[0_0_15px_rgba(255,0,240,0.5)]">
        <div className="bg-amber-100 p-2 rounded-[inherit]">
          <Icon className="h-20 w-30 " style={{ color }} />
          <h3 className="font-mono mt-4 text-x0 font-semibold text-slate-800">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
