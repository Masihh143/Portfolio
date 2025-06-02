import React from 'react';

export default function TopNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="text-xl font-bold tracking-widest">MASIH</div>
        <nav className="flex gap-6">
          <a href="#hero" className="hover:text-fuchsia-400 transition">Home</a>
          <a href="#about" className="hover:text-fuchsia-400 transition">About</a>
          <a href="#skills" className="hover:text-fuchsia-400 transition">Skills</a>
          <a href="#experience" className="hover:text-fuchsia-400 transition">Experience</a>
          <a href="#projects" className="hover:text-fuchsia-400 transition">Projects</a>
          <a href="#contact" className="hover:text-fuchsia-400 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
