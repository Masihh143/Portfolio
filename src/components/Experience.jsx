import React from "react";

const experiences = [
  {
    title: "Full–Stack Developer",
    company: "Hackathon",
    duration: "Jan 2025",
    responsibilities: [
      "Led the integration of native system-level APIs within a React + Electron environment, enabling seamless real-time tracking of CPU, memory, and process performance metrics directly on the desktop interface.",
      "Spearheaded the development of an immersive 3D user experience using Three.js, crafting custom camera movements, dynamic lighting effects, and orbital controls to provide an intuitive and visually rich interface.",
      "Built a collaborative whiteboard feature using WebSockets and the Canvas API, ensuring real-time drawing synchronization across multiple users with zero noticeable lag, supporting simultaneous input handling and broadcast updates.",
      "Designed and implemented AI-driven analytics features by integrating the OpenAI API alongside financial REST APIs, creating a responsive and intelligent dashboard that offered predictive insights, trend forecasting, and conversational querying capabilities.",
    ],
  },
  // Add more experience entries here if needed
];

const Experience = () => {
  return (
    <section id="experience" className=" min-h-screen relative py-20 px-6 text-white">
      <p className="text-center text-sm text-gray-400 mb-2">
        WHAT I HAVE DONE SO FAR
      </p>
      <h2 className="text-center text-4xl font-bold mb-16">Work Experience.</h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-12">
  {experiences.map((exp, index) => (
    <div
      key={index}
      className="bg-black border-1 border-violet-900 inset-shadow-sm inset-shadow-indigo-700 backdrop-blur-md p-6"
    >
      {/* Optional Gloss Layer */}
      <div className="absolute top-0 left-0 w-full h-full rounded-sm pointer-events-none 
        bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_70%)]" />

      <h3 className="text-[25px] font-bold relative z-10">{exp.title}</h3>
      <p className="text-violet-600 text-[20px] relative z-10">{exp.company}</p>
      <p className="text-sm text-white/60 mb-4 relative z-10">{exp.duration}</p>
      <ul className="list-disc pl-5 text-l space-y-4 relative z-10">
        {exp.responsibilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

    </section>
  );
};

export default Experience;