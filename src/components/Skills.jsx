import React from 'react';
import htmlIcon from "../assets/tech/html5.svg"
import cssIcon from "../assets/tech/css3.svg"
import javascriptIcon from "../assets/tech/javascript.svg"
import reactIcon from "../assets/tech/react.svg"
import pythonIcon from "../assets/tech/python.svg"
import mysqlIcon from "../assets/tech/mysql.svg"
import electronIcon from "../assets/tech/electron.svg"
import threeIcon from "../assets/tech/threejs.svg"
import socketIcon from "../assets/tech/socket.svg"
import openIcon from "../assets/tech/openai.svg"
import tailwindIcon from "../assets/tech/tailwind.svg"
import bootstrapIcon from "../assets/tech/bootstrap.svg"
import gitIcon from "../assets/tech/git.svg"
import githubIcon from "../assets/tech/github.svg"
import viteIcon from "../assets/tech/vite.svg"

const skills = [
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "React", icon: reactIcon },
  { name: "Vite", icon: viteIcon },
  { name: "Python", icon: pythonIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "Electron", icon: electronIcon },
  { name: "TailwindCSS", icon: tailwindIcon },
  { name: "Bootstrap", icon: bootstrapIcon},
  { name: "Three.js", icon: threeIcon },
  { name: "Socket.io", icon: socketIcon },
  { name: "OpenAI API", icon: openIcon },
];

const Skills = () => {
  return (
    <section id="tech" className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 text-white">
      <p className="text-center text-sm text-gray-400 mb-2">TECH STACK</p>
      <h2 className="text-center text-4xl font-bold mb-22">Skills</h2>      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 place-items-center">
        {skills.map((tech, index) => (
          <div key={index} className="flex flex-col items-center group">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <p className="mt-2 text-sm text-white/70 group-hover:text-white">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
