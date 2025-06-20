'use client';
import { ReactNode } from 'react';
export default function Card({
  title,
  description,
  icon,
}: { title: string; description: string; icon?: ReactNode }) {
  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 max-w-md mx-auto">
      {icon && <div className="text-3xl text-white mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  );
}
