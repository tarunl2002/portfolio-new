'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

type Project = {
  name: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  image: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [isMobile, setIsMobile] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleCardAction = () => {
    if (isMobile) setFlipped((prev) => !prev);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setFlipped(false);
  };

  return (
    <div
      className="w-full h-96 perspective cursor-pointer"
      onClick={handleCardAction}
      onMouseEnter={() => !isMobile && setFlipped(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg bg-[#1e293b] text-white flex flex-col">
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
              <p className="text-sm text-slate-300">{project.shortDesc}</p>
            </div>
          <div className="relative h-40 w-full">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-cyan-700 px-3 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl p-6 bg-slate-800 text-white shadow-xl flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
          <p className="text-slate-300 text-sm">{project.fullDesc}</p>
        </div>
      </div>
    </div>
  );
}
