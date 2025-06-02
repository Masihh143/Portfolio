import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import systemMonitorDesktop from '../assets/systemMonitor1.png'
import systemMonitorTablet from '../assets/systemMonitor2.png'
import systemMonitorMobile from '../assets/systemMonitor3.png'
import finai from '../assets/finai.png'
import whiteboard from '../assets/whiteboard.png'
import visualizer from '../assets/visualizer.png'

const projects = [
  {
    title: "System Monitor (Electron App)",
    description:
      "A real-time system monitoring desktop app displaying CPU, memory, and hardware stats, built with React and Electron using systeminformation APIs.",
    tech: ["React", "Electron", "Node.js", "systeminformation"],
    image: {
      mobile: systemMonitorMobile,
      tablet: systemMonitorMobile,
      desktop: systemMonitorDesktop,
    },
    demo: "#",
    code: "https://github.com/your-username/system-monitor-electron",
  },
  {
    title: "3D Model Visualizer",
    description:
      "A real-time interactive 3D model visualizer built with Three.js, allowing users to rotate, zoom, and explore through the solar system in a browser-based environment.",
    tech: ["JavaScript", "Three.js", "HTML5", "CSS3"],
    image: {
      mobile: visualizer,
      tablet: visualizer,
      desktop: visualizer,
    },
    demo: "#",
    code: "https://github.com/your-username/3d-visualizer",
  },
  {
    title: "Collaborative Whiteboard",
    description:
      "An online whiteboard tool for real-time multi-user collaboration with drawing, shapes, and cursor sync using WebSockets.",
    tech: ["React", "Socket.io", "Node.js", "Canvas API"],
    image: {
      mobile: whiteboard,
      tablet: whiteboard,
      desktop: whiteboard,
    },
    demo: "#",
    code: "https://github.com/your-username/collaborative-whiteboard",
  },
  {
    title: "FinAI - Personal Finance Assistant",
    description:
      "A smart finance dashboard app integrating API data to track expenses, analyze spending patterns, and offer AI-driven insights.",
    tech: ["HTML5", "CSS3", "OpenAI API", "REST APIs"],
    image: {
      mobile: finai,
      tablet: finai,
      desktop: finai,
    },
    demo: "#",
    code: "https://github.com/your-username/finai-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Quantum Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden bg-black/50 border border-violet-500/20 backdrop-blur-sm hover:border-violet-500/40 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <picture>
                  <source media="(min-width: 1024px)" srcSet={project.image.desktop} />
                  <source media="(min-width: 640px)" srcSet={project.image.tablet} />
                  <img
                    src={project.image.mobile}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-violet-400 mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-2 py-1 border border-cyan-500/50 text-cyan-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 text-sm border border-violet-500 text-violet-400 rounded hover:bg-violet-500/20 transition"
                  >
                    <FiExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 text-sm border border-cyan-500 text-cyan-400 rounded hover:bg-cyan-500/20 transition"
                  >
                    <FaCode className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-300 opacity-10 blur-[160px] rounded-full -translate-x-1/4 -translate-y-1/4 z-0" />
      </section>
  );
};

export default Projects;
