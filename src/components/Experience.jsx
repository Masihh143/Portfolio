import React from 'react';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'NeuroTech AI',
    period: 'Jan 2024 – Present',
    desc: 'Built AI tools using React and Flask. Created real-time dashboards for ML model training status.',
  },
  {
    role: 'Open Source Contributor',
    company: 'Three.js / Vite',
    period: '2023',
    desc: 'Contributed to WebGL visual tools and improved build pipeline performance by 15%.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
        <div className="relative border-l border-fuchsia-600 pl-8 space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <div className="absolute w-4 h-4 bg-fuchsia-500 rounded-full left-[-9px] top-1" />
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-zinc-400">{exp.company} • <span className="text-sm">{exp.period}</span></p>
              <p className="mt-2 text-zinc-300">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
