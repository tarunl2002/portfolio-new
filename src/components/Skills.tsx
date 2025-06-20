'use client';
import { motion } from 'framer-motion';

export default function Skills() {
  const groupData = {
    'Languages': ['Go', 'C++', 'JavaScript', 'Java', 'Python'],
    'Frameworks': ['Node.js', 'React', 'Next.js', 'Express', 'Laravel'],
    'Cloud / DB': ['AWS', 'MongoDB', 'MySQL', 'Firebase', 'IPFS'],
    'AI / ML': ['TensorFlow', 'LangChain', 'OpenAI API', 'ChatGPT'],
  };

  return (
    <section id="skills" className="py-20 px-6">
      <motion.h2 className="text-4xl font-bold text-center text-white mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        Technical Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {Object.entries(groupData).map(([title, skills], i) => (
          <div key={i}>
            <h3 className="text-2xl mb-4 font-semibold text-slate-200">{title}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((s, idx) => (
                <motion.span
                  key={idx}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-white cursor-default"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(99,102,241,0.8)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
