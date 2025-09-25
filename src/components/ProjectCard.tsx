'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    let timeoutId: NodeJS.Timeout;
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkIsMobile, 100);
    };

    checkIsMobile();
    window.addEventListener('resize', throttledResize);
    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleCardAction = () => {
    if (isMobile) setFlipped((prev) => !prev);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!isMobile) setFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isMobile) setFlipped(false);
  };

  return (
    <div
      className="w-full h-96 perspective cursor-pointer relative"
      onClick={handleCardAction}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl"
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1e293b] to-[#334155] text-white flex flex-col border border-white/10">
          <div className="flex-1 p-4 flex flex-col justify-between relative overflow-hidden">
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : ['0% 0%'],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, #06b6d4 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)',
                backgroundSize: '100% 100%',
              }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {project.name}
              </motion.h3>
              <p className="text-sm text-slate-300">{project.shortDesc}</p>
            </div>
            
            <motion.div 
              className="relative h-40 w-full rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
            
            <div className="flex flex-wrap gap-2 mt-4 relative z-10">
              {project.tags.map((tag, idx) => (
                <motion.span
                  key={tag}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 px-3 py-1 rounded-full text-xs font-medium shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, type: 'spring' as const }}
                  whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(6, 182, 212, 0.5)' }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* BACK */}
        <motion.div 
          className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl p-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-2xl flex flex-col justify-center border border-white/10 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: flipped ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 0% 0%, #06b6d4 0%, transparent 50%)',
                'radial-gradient(circle at 100% 100%, #8b5cf6 0%, transparent 50%)',
                'radial-gradient(circle at 0% 100%, #06b6d4 0%, transparent 50%)',
                'radial-gradient(circle at 100% 0%, #8b5cf6 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <motion.h3 
            className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: flipped ? 0 : 20, opacity: flipped ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.name}
          </motion.h3>
          <motion.p 
            className="text-slate-300 text-sm leading-relaxed relative z-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: flipped ? 0 : 20, opacity: flipped ? 1 : 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.fullDesc}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
