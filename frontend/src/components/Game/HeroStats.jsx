import React from 'react';
import { motion } from 'framer-motion';

const HeroStats = () => {
  return (
    <div className="pt-24 md:pt-32 pb-12 bg-transparent flex flex-col items-center px-4">
      
      {/* Game Window Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border-2 md:border-4 border-cyan-500 bg-slate-800/90 p-4 md:p-6 rounded-lg shadow-neon max-w-2xl w-full relative z-10"
      >
        {/* Header: Name & Level */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-slate-700 pb-4 mb-4 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-tighter uppercase">Priyanshi Dass</h1>
            <p className="text-slate-400 text-xs md:text-sm">Class: Full Stack Developer</p>
          </div>
          <div className="flex flex-row md:flex-col items-center md:items-end gap-2 md:gap-0">
            <span className="text-[10px] text-slate-500 uppercase">EXPERIENCE LEVEL</span>
            <span className="text-3xl md:text-4xl font-black text-yellow-500">05</span>
          </div>
        </div>

        {/* Stats Bars */}
        <div className="space-y-4">
          <StatBar label="REACT / JS" value={90} color="bg-cyan-500" shadow="shadow-cyan-500/50" />
          <StatBar label="PYTHON / DJANGO" value={70} color="bg-purple-500" shadow="shadow-purple-500/50" />
          <StatBar label="SQL" value={75} color="bg-emerald-500" shadow="shadow-emerald-500/50" />
        </div>

        {/* Quest Status Table */}
        <div className="mt-8 grid grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <p className="text-slate-500 mb-1 tracking-widest uppercase">Current Location</p>
            <p className="text-white">Indore, MP (Base Camp)</p>
          </div>
          <div className="bg-slate-900 p-3 rounded border border-slate-700">
            <p className="text-slate-500 mb-1 tracking-widest uppercase">Availability</p>
            <p className="text-green-400 font-bold underline decoration-2">IMMEDIATE JOINER</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Reusable Progress Bar Component
const StatBar = ({ label, value, color, shadow }) => (
  <div>
    <div className="flex justify-between text-xs mb-1 uppercase tracking-wider">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-700">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`h-full ${color} ${shadow} shadow-lg`}
      />
    </div>
  </div>
);

export default HeroStats;