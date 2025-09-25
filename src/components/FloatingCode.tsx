'use client';
import { motion } from 'framer-motion';

export default function FloatingCode() {
  const codeSnippets = [
    'const skills = ["React", "Node.js", "Go"];',
    'function buildAmazingApps() { return "success"; }',
    'if (passionate) { code(); }',
    'npm install awesome-portfolio',
    'git commit -m "Added new feature"',
    'const developer = new FullStackDev();',
    'while(learning) { grow(); }',
    'export default TarunLalwani;'
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {codeSnippets.map((code, i) => (
        <motion.div
          key={i}
          className="absolute text-xs md:text-sm font-mono text-cyan-400/20 whitespace-nowrap"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 80}%`,
          }}
        >
          {code}
        </motion.div>
      ))}
    </div>
  );
}