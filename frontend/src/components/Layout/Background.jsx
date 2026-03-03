import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950">
      {/* 1. The Moving Grid Layer */}
      <motion.div 
        initial={{ bgPosition: "0px 0px" }}
        animate={{ backgroundPosition: ["0px 0px", "0px 50px"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(to right, #22d3ee 1px, transparent 1px), 
                            linear-gradient(to bottom, #22d3ee 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* 2. The Radial "Glow" (Focuses light in the center) */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 20%, #020617 80%)'
        }}
      />

      {/* 3. Subtle Animated Scanline */}
      <motion.div 
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent z-10"
      />
    </div>
  );
};

export default Background;