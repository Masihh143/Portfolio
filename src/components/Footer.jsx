import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400 py-6 px-6 text-center">
      <div className="flex justify-center space-x-6 mb-3">
        <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer" className="hover:text-white transition">
          <FaGithub size={20} />
        </a>
        <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noreferrer" className="hover:text-white transition">
          <FaLinkedin size={20} />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="hover:text-white transition">
          <FaTwitter size={20} />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Alex. All rights reserved.</p>
    </footer>
  );
}
