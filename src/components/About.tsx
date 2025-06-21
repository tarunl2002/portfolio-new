'use client';

import { motion } from 'framer-motion';

export default function About() {
  const techStack = [
    'Go', 'C++', 'JavaScript', 'Python', 'Node.js', 'React',
    'Laravel', 'Next.js', 'TypeScript', 'MongoDB', 'MySQL', 'AWS', 'TensorFlow', 'Flask', 'Socket.IO',
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-20 bg-[#0f172a] text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Personal Overview */}
        <motion.div
          className="space-y-6 text-slate-300 leading-relaxed"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            I'm <span className="text-white font-semibold">Tarun Lalwani</span>, a Full-Stack Developer and Software Engineer passionate about building scalable apps, solving real-world problems, and leading tech initiatives.
          </p>
          <p>
            Currently a <span className="text-white font-semibold">Software Developer Intern</span> at Modgenics, where I re-architected major features and improved performance by over 35%. Previously, I interned at Pie Cloud LLP, creating real-time tools and REST APIs using Laravel and React.
          </p>
          <p>
            As the <span className="text-white font-semibold">Co-Lead of Google Developer Student Clubs (AKGEC)</span>, I've led workshops, hosted hackathons, and mentored 200+ students on technologies like Google Cloud, Flutter, and AI.
          </p>
          <p>
            I'm also a <span className="text-white font-semibold">4x Hackathon Winner</span> and have built award-winning apps like <span className="text-white font-semibold">Brain Bridge</span>, <span className="text-white font-semibold">Swachh</span>, and <span className="text-white font-semibold">BrewCraft</span>.
          </p>
        </motion.div>

        {/* Skills & Tech Stack */}
        <motion.div
          className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Tech Stack & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-[#1e293b] text-white px-3 py-1 rounded-full text-sm hover:bg-[#334155] transition"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="font-semibold text-white mb-2">Current Focus</h4>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
              <li>Optimizing large-scale full-stack applications</li>
              <li>Machine Learning in mental health & sustainability</li>
              <li>Developer Advocacy through GDSC & open source</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
