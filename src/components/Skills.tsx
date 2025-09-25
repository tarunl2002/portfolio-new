'use client';
import { motion } from 'framer-motion';

export default function Skills() {
  const groupData = {
    'Languages': ['Go', 'C++', 'JavaScript', 'Java', 'Python'],
    'Frameworks': ['Node.js', 'React', 'Next.js', 'Express', 'Laravel'],
    'Cloud / DB': ['AWS', 'MongoDB', 'MySQL', 'Firebase', 'IPFS'],
    'AI / ML': ['TensorFlow', 'LangChain', 'OpenAI API', 'ChatGPT'],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl top-10 right-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <motion.h2 
        className="text-4xl font-bold text-center text-white mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" 
        initial={{ opacity: 0, y: 30, scale: 0.8 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      <motion.div 
        className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {Object.entries(groupData).map(([title, skills], i) => (
          <motion.div key={i} variants={itemVariants} className="relative">
            <motion.h3 
              className="text-2xl mb-6 font-semibold text-slate-200 relative"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {title}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
              />
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((s, idx) => (
                <motion.span
                  key={idx}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-white cursor-default border border-white/10 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
                    borderColor: 'rgba(6, 182, 212, 0.5)',
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">{s}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
