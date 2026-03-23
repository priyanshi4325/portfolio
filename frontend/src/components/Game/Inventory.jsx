import React from 'react';
import { motion } from 'framer-motion';

const Inventory = () => {
  const gear = [
    { name: "React.js", type: "Frontend", rarity: "Epic", desc: "Main weapon for UI/UX composition." },
    { name: "Django", type: "Backend", rarity: "Epic", desc: "High-level framework for robust logic." },
    { name: "Python", type: "Core", rarity: "Legendary", desc: "Versatile engine for all operations." },
    { name: "SQL", type: "Database", rarity: "Rare", desc: "Persistent storage for player data." },
    { name: "Tailwind CSS", type: "Frontend", rarity: "Rare", desc: "Speed-buff for styling interfaces." },
    { name: "REST API", type: "Utility", rarity: "Common", desc: "Protocol for server communication." },
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Legendary': return 'text-orange-400 border-orange-400 shadow-[0_0_10px_#fb923c]';
      case 'Epic': return 'text-purple-400 border-purple-400 shadow-[0_0_10px_#c084fc]';
      case 'Rare': return 'text-blue-400 border-blue-400 shadow-[0_0_10px_#60a5fa]';
      default: return 'text-slate-400 border-slate-600';
    }
  };

  return (
    <section className="mt-20 max-w-5xl mx-auto px-4 scroll-mt-24" id='inventory'>
      <h2 className="text-2xl font-mono font-bold text-cyan-400 mb-8 flex items-center gap-4">
        <span className="h-px flex-1 bg-cyan-500/30"></span>
        INVENTORY_GEAR
        <span className="h-px flex-1 bg-cyan-500/30"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {gear.map((item, index) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.02, translateY: -5 }}
            className={`bg-slate-800/50 border-2 p-4 rounded-lg backdrop-blur-sm relative group cursor-help ${getRarityColor(item.rarity)}`}
          >
            {/* Item Header */}
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-black uppercase tracking-widest opacity-70 italic">[{item.rarity}]</span>
              <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded border border-slate-700">{item.type}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-2 tracking-tight">{item.name}</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.desc}</p>

            {/* Subtle "Slot" Decoration */}
            <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-30 transition-opacity">
              <div className="w-8 h-8 border-2 border-current rounded-full flex items-center justify-center">
                <span className="text-[10px]">✔</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Inventory;