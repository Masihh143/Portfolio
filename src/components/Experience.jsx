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
    <section
      id="experience"
      className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-20 px-6 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>

        {/* Vertical Path */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-fuchsia-700 rounded-full z-0" />

          <div className="flex flex-col space-y-20 relative z-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`w-full md:w-1/2 px-6 py-6 rounded-lg bg-zinc-800 shadow-xl transform transition-all duration-700 hover:scale-[1.02]
                ${i % 2 === 0 ? 'ml-auto origin-left' : 'mr-auto origin-right'} animate-fade-in-up`}
              >
                <div className="text-fuchsia-500 font-semibold text-sm mb-1">{exp.period}</div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-zinc-400">{exp.company}</p>
                <p className="text-zinc-300 mt-2">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
