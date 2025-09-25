'use client';

import { motion } from 'framer-motion';

export default function About() {
  const techStack = [
    'Go', 'C++', 'JavaScript', 'Python', 'Node.js', 'React',
    'Laravel', 'Next.js', 'TypeScript', 'MongoDB', 'MySQL', 'AWS', 'TensorFlow', 'Flask', 'Socket.IO',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-24 px-6 md:px-20 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl top-20 left-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full blur-2xl bottom-20 right-20"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      <motion.h2
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div 
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Personal Overview */}
        <motion.div
          className="space-y-6 text-slate-300 leading-relaxed relative"
          variants={itemVariants}
        >
          {/* Decorative Line */}
          <motion.div
            className="absolute -left-4 top-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          
          <motion.p variants={itemVariants}>
            I am <motion.span 
              className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Tarun Lalwani
            </motion.span>, a Full-Stack Developer and Software Engineer passionate about building scalable apps, solving real-world problems, and leading tech initiatives.
          </motion.p>
          <motion.p variants={itemVariants}>
            Currently a <span className="text-cyan-400 font-semibold">Software Developer Intern</span> at Modgenics, where I re-architected major features and improved performance by over 35%. Previously, I interned at Pie Cloud LLP, creating real-time tools and REST APIs using Laravel and React.
          </motion.p>
          <motion.p variants={itemVariants}>
            As the <span className="text-purple-400 font-semibold">Co-Lead of Google Developer Student Clubs (AKGEC)</span>, I&apos;ve led workshops, hosted hackathons, and mentored 200+ students on technologies like Google Cloud, Flutter, and AI.
          </motion.p>
          <motion.p variants={itemVariants}>
            I&apos;m also a <span className="text-pink-400 font-semibold">4x Hackathon Winner</span> and have built award-winning applications like <span className="text-cyan-400 font-semibold">Brain Bridge</span>, <span className="text-purple-400 font-semibold">Swachh</span>, and <span className="text-pink-400 font-semibold">BrewCraft</span>.
          </motion.p>
        </motion.div>

        {/* Skills & Tech Stack */}
        <motion.div
          className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl backdrop-blur-sm relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ scale: 1.02, boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(6,182,212,0.1) 0%, rgba(139,92,246,0.1) 100%)',
                'linear-gradient(225deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0.1) 100%)',
                'linear-gradient(45deg, rgba(6,182,212,0.1) 0%, rgba(139,92,246,0.1) 100%)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <motion.h3 
            className="text-xl font-semibold text-white mb-4 relative z-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Tech Stack & Tools
          </motion.h3>
          
          <div className="flex flex-wrap gap-3 relative z-10">
            {techStack.map((tech, idx) => (
              <motion.span
                key={tech}
                className="bg-gradient-to-r from-[#1e293b] to-[#334155] text-white px-3 py-1 rounded-full text-sm border border-white/10 relative overflow-hidden group cursor-default"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, type: 'spring' }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(6, 182, 212, 0.2)',
                  boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)'
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">{tech}</span>
              </motion.span>
            ))}
          </div>

          <motion.div 
            className="mt-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-3 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Current Focus</h4>
            <ul className="space-y-2">
              {[
                'Optimizing large-scale full-stack applications',
                'Machine Learning in mental health & sustainability',
                'Developer Advocacy through GDSC & open source'
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  className="text-slate-300 text-sm flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.span 
                    className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3 flex-shrink-0"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
