import React from 'react';
import Spline from '@splinetool/react-spline';
import { FaArrowDown } from 'react-icons/fa';


export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen pt-140 bg-black overflow-hidden flex items-center justify-center">
      {/* Spline Robot */}
      <div className="absolute inset-0 z-0">
        {/* <Spline scene="https://prod.spline.design/YOUR-ROBOT-URL/scene.splinecode" /> */}
      </div>

      {/* Overlay HUD Text */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide">Hi, I'm MASIH</h1>
        <p className="mt-4 text-lg md:text-2xl bg-[linear-gradient(90deg,rgb(63,0,126),rgba(150,100,200,1),rgb(63,0,126))] bg-clip-text text-transparent font-mono">Futuristic Full-Stack Developer & AI Explorer</p>
        <div className="mt-10 flex flex-col items-center justify-center text-white bounce-slow">
            <span className="text-sm tracking-wide mb-2">Scroll Down</span>
            <FaArrowDown className="text-xl text-violet-700" />
        </div>
      </div>
    </section>
  );
}
