import React from 'react';

const projects = [
  {
    title: 'Jarvis System Monitor',
    description: 'A real-time system monitor desktop app built using React, Node.js, and Electron.',
    tech: ['React', 'Electron', 'Tailwind', 'SystemInformation'],
    image: '/assets/project1.png', // Replace with actual images
  },
  {
    title: 'AI Portfolio Generator',
    description: 'An AI-powered resume and portfolio generator that adapts to user goals using GPT.',
    tech: ['Next.js', 'OpenAI API', 'Spline'],
    image: '/assets/project2.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <div key={i} className="group relative bg-zinc-900 rounded-lg overflow-hidden shadow-lg border border-zinc-800 hover:shadow-fuchsia-500/40 transition">
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover opacity-70 group-hover:opacity-40 transition" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-2xl font-bold mb-2 text-fuchsia-400">{project.title}</h3>
                <p className="text-zinc-300 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, index) => (
                    <span key={index} className="text-xs bg-fuchsia-700/30 border border-fuchsia-600 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
