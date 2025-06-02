import { useEffect, useState, useRef } from "react";
import click from '../assets/click.mp3'

const sections = ["Hero", "About", "Skills", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndexRef = useRef(0);
  const clickAudio = useRef(new Audio(click));

  useEffect(() => {
    const observers = [];

    sections.forEach((id, index) => {
      const el = document.getElementById(id.toLowerCase());
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (prevIndexRef.current !== index) {
              clickAudio.current.currentTime = 0;
              clickAudio.current.play();
              prevIndexRef.current = index;
            }
            setActiveIndex(index);
          }
        },
        {
          threshold: 0.4,
          rootMargin: "0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveIndex(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50 h-[90vh] w-20 flex items-center justify-center pointer-events-none">
      <div className="relative h-full w-full">

      <svg
          className="absolute left-4/3 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          width="200"
          height="400"
          viewBox="50 0 200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            d="M100 50 C50 150, 50 250, 100 350"
            stroke="rgba(255, 255, 255, 0.49)"
            strokeWidth="2"
            strokeLinecap="round"
            // className="animate-pulse"
          />
        </svg>

        {sections.map((label, index) => {
          const visibleRange = 2;
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);

          if (absOffset > visibleRange) return null;

          const navPositions = [
            { x: 0, y: -140 },
            { x: -20, y: -70 },
            { x: -35, y: 0 },
            { x: -20, y: 70 },
            { x: 0, y: 140 },
            { x: 20, y: 210 },
          ];

          const pos = navPositions[offset + visibleRange] || { x: 0, y: 0 };
          const x = pos.x;
          const y = pos.y;

          const scale = 1 - absOffset * 0.2;
          const opacity = 1 - absOffset * 0.4;

          return (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="absolute left-1/2 top-1/2 transition-all duration-500"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
                opacity,
                zIndex: 10 - absOffset,
                pointerEvents: "auto",
              }}
            >
              <div
                className={`px-4 py-2 rounded-full text-white text-sm transition-all duration-400 hover:scale-110 ring-1 ring-violet-400 ${
                  index === activeIndex
                    ? "bg-black shadow-xl shadow-violet-800/40"
                    : "bg-white/15 text-white hover:text-white"
                }`}

                style={
                  index === activeIndex
                    ? {
                        boxShadow: '0 0 20px rgb(140, 0, 255)',
                      }
                    : {}
                }
              >
                {label}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
