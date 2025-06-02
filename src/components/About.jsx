import React from 'react';
import Spline from '@splinetool/react-spline';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      
      {/* Spline Hologram Interface */}
      <div className="w-full md:w-1/2 relative z-10">
        {/* <Spline scene="https://prod.spline.design/YOUR-HOLOGRAM-URL/scene.splinecode" /> */}
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 z-10 mt-10 md:mt-0 md:mr-30">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-zinc-300 leading-relaxed">
          I’m Masih, a tech visionary building the future with code. My expertise lies in crafting immersive frontends,
          intelligent systems, and real-time experiences. With a passion for AI and human-machine symbiosis, I aim to build
          tech that pushes humanity forward — think Jarvis, but real.
        </p>
        <p className="mt-4 text-zinc-400">
          Fluent in React, Python, 3D interfaces, and always experimenting with emerging technologies.
        </p>
      </div>

      {/* Light glow background */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-fuchsia-500 opacity-10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />
    </section>
  );
}
