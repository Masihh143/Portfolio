import React from 'react';

export default function TopNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="text-xl font-bold tracking-widest">MASIH</div>
        <nav className="hidden md:flex gap-6">
          <a href="#hero" className="hover:text-fuchsia-400 transition">Home</a>
          <a href="#about" className="hover:text-fuchsia-400 transition">About</a>
          <a href="#skills" className="hover:text-fuchsia-400 transition">Skills</a>
          <a href="#experience" className="hover:text-fuchsia-400 transition">Experience</a>
          <a href="#projects" className="hover:text-fuchsia-400 transition">Projects</a>
          <a href="#contact" className="hover:text-fuchsia-400 transition">Contact</a>
        </nav>
        <a
          href="#contact"
          className="md:hidden block px-4 py-2 uppercase font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md shadow-lg
          hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_10px_#00fff7] active:scale-95 transition-all duration-300 ease-in-out text-center"
        >
          <span className="relative z-10">Contact</span>
        </a>

      </div>
    </header>
  );
}
