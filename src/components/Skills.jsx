import React from 'react';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'Three.js', level: 75 },
  { name: 'AI/ML', level: 65 },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-black text-white py-20 px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skill, i) => (
            <div key={i} className="bg-gradient-to-br from-violet-700/30 to-fuchsia-600/20 p-6 rounded-lg shadow-md border border-white/10">
              <h3 className="text-xl mb-2">{skill.name}</h3>
              <div className="w-full h-2 bg-white/10 rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pulse Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-fuchsia-400/10 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
