import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white py-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-10 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <form className="flex flex-col gap-5">
          <input type="text" placeholder="Name" className="bg-zinc-800 border border-zinc-600 rounded-md p-3 text-white placeholder:text-zinc-400" />
          <input type="email" placeholder="Email" className="bg-zinc-800 border border-zinc-600 rounded-md p-3 text-white placeholder:text-zinc-400" />
          <textarea placeholder="Message" rows="4" className="bg-zinc-800 border border-zinc-600 rounded-md p-3 text-white placeholder:text-zinc-400" />

          <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-purple-600 hover:to-pink-600 transition py-3 rounded-md font-semibold text-white shadow-md">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
