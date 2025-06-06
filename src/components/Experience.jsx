import React from "react";

const experiences = [
  {
    title: "Full–Stack Developer",
    company: "Hackathon",
    duration: "Jan 2023 – present",
    responsibilities: [
      "Led the integration of native system-level APIs within a React + Electron environment for real-time desktop performance tracking.",
      "Spearheaded the development of a 3D visual experience using Three.js, including custom camera, lighting, and orbital controls.",
      "Engineered a real-time collaboration tool using WebSockets and Canvas API to ensure multi-user drawing sync with zero lag.",
      "Designed and implemented AI-driven financial analytics by integrating OpenAI and REST APIs into a responsive dashboard."
    ],
  },
  // You can add more experience items here
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 px-6 text-white">
      <p className="text-center text-sm text-gray-400 mb-2">WHAT I HAVE DONE SO FAR</p>
      <h2 className="text-center text-4xl font-bold mb-22">Work Experience.</h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-white/30 rounded-full transform -translate-x-1/2" />

        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start mb-20">
            {/* Card on the left */}
            <div className="w-1/2 pr-10 flex justify-end">
              <div className="bg-violet-800/40 backdrop-blur-md p-6 rounded-xl shadow-md w-full max-w-md">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-violet-300 text-sm mb-4">{exp.company}</p>
                <ul className="list-disc pl-5 text-sm space-y-3">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            
            <div className="absolute left-1/2 ml-17 top-0 transform -translate-x-1/2 flex items-center mt-4">
              <div className="w-7 h-7 rounded-full border-2 border-white bg-violet-600 z-10" />
              <div className="text-sm text-white ml-4 whitespace-nowrap">{exp.duration}</div>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default Experience;
