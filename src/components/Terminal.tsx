'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const commands = [
  { cmd: 'whoami', output: 'tarun-lalwani' },
  { cmd: 'ls skills/', output: 'react.js  node.js  go  python  aws' },
  { cmd: 'cat experience.txt', output: 'Software Engineer @ Modgenics\nGDSC Co-Lead @ AKGEC' },
  { cmd: 'git log --oneline', output: '4x Hackathon Winner 🏆\nBuilt Brain Bridge, Swachh, BrewCraft' },
];

export default function Terminal() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typeCommand = () => {
      const current = commands[currentCommand];
      let i = 0;
      const typing = setInterval(() => {
        if (i <= current.cmd.length) {
          setDisplayText(`$ ${current.cmd.slice(0, i)}`);
          i++;
        } else {
          clearInterval(typing);
          setTimeout(() => {
            setDisplayText(`$ ${current.cmd}\n${current.output}`);
            setTimeout(() => {
              setCurrentCommand((prev) => (prev + 1) % commands.length);
              setDisplayText('');
            }, 2000);
          }, 500);
        }
      }, 100);
    };

    typeCommand();
  }, [currentCommand]);

  useEffect(() => {
    const cursor = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(cursor);
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 right-6 w-80 h-48 bg-black/90 rounded-lg border border-cyan-400/30 p-4 font-mono text-sm z-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
    >
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-700">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-gray-400 text-xs ml-2">terminal</span>
      </div>
      <div className="text-green-400 whitespace-pre-wrap">
        {displayText}
        {showCursor && <span className="text-white">|</span>}
      </div>
    </motion.div>
  );
}