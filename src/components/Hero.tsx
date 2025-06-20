'use client';
import { useEffect, useState } from 'react';

const titles = [
  'Software Engineer',
  'Full Stack Developer',
  'Hackathon Winner',
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
        Hey, I’m <span className="text-indigo-500">Tarun Lalwani</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-300">
        {titles[index]}
      </p>
      <div className="mt-6">
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 transition"
        >
          See My Work
        </a>
      </div>
    </section>
  );
}
