"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ChevronRight, Globe, Shield, Activity, Fingerprint } from "lucide-react";

// --- 1. OPTIMIZED MOUSE TRAIL (High Performance) ---
const MouseTrail = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // useSpring kiy-khalli l-7araka smooth bla ma i-t9el l-page
  const springConfig = { damping: 25, stiffness: 250 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Circle li kiy-tbe3 l-souris (Smooth) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-red-600/50 rounded-full pointer-events-none z-[999]"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      />
      {/* Dot l-wsstani */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-red-600 rounded-full pointer-events-none z-[999]"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
};

export default function PunksArcFinal() {
  const [minted] = useState(1287);
  const supply = 3333;
  const images = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  return (
    <main className="bg-[#020202] text-white min-h-screen font-sans selection:bg-red-600/30 overflow-hidden cursor-none">
      
      <MouseTrail />

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-red-600/[0.05] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-blue-600/[0.03] blur-[120px] rounded-full" />
      </div>

      <nav className="relative z-[100] flex justify-between items-center px-12 py-8 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <Fingerprint size={20} className="text-red-600" />
          <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-60">Arc.Protocol_v10</span>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-widest opacity-30 uppercase">
          <span className="hover:opacity-100 cursor-pointer transition-all">Identity</span>
          <span className="hover:opacity-100 cursor-pointer transition-all">Terminal</span>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-12 px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-1 border border-red-600/20 rounded-full mb-8 bg-red-600/5">
            <span className="text-[9px] font-black tracking-[4px] text-red-500 uppercase text-shadow-glow">
              De-fragmenting Digital Soul_
            </span>
          </div>

          <h1 className="text-[11vw] md:text-[140px] font-[1000] leading-[0.8] tracking-[-0.06em] uppercase italic">
            PUNKS <br />
            <span className="text-transparent stroke-white opacity-40">ARC</span>
          </h1>
          
          <p className="mt-10 max-w-2xl mx-auto text-white/50 text-lg md:text-xl font-light leading-relaxed">
            More than a collection. <span className="text-white font-medium">ARC</span> is a neural experiment in 
            <span className="italic text-red-500"> on-chain permanence</span>. 
            3,333 generative architectures forged in the intersection of human chaos.
          </p>

          <div className="mt-12">
            <button className="group relative px-20 py-7 bg-white text-black rounded-full font-black text-xl uppercase tracking-tighter overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                Enter The Void <ChevronRight size={24} />
              </span>
              <motion.div 
                className="absolute inset-0 bg-red-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween", ease: "circOut" }}
              />
            </button>
          </div>
        </motion.div>

        {/* PROGRESS BAR */}
        <div className="mt-28 w-full max-w-md space-y-4">
          <div className="flex justify-between items-end">
            <div className="text-[9px] font-bold tracking-[4px] opacity-20 uppercase flex items-center gap-2">
              <Activity size={10} /> Extraction_Progress
            </div>
            <div className="text-2xl font-black italic text-red-600">{((minted/supply)*100).toFixed(1)}%</div>
          </div>
          <div className="h-[2px] w-full bg-white/5 relative rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(minted/supply)*100}%` }}
              className="absolute inset-0 bg-red-600"
            />
          </div>
        </div>
      </div>

      {/* INFINITE SLIDER */}
      <div className="relative mt-20 w-full overflow-hidden py-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-transparent to-[#020202] z-20 pointer-events-none" />
        <motion.div 
          animate={{ x: [0, -1400] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 px-10"
        >
          {[...images, ...images, ...images].map((id, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="relative min-w-[240px] h-[240px] md:min-w-[320px] md:h-[320px] rounded-[40px] overflow-hidden border border-white/5 bg-white/[0.02] transition-all duration-500 hover:border-red-600/40 group"
            >
              <img 
                src={`/punks/${id}.png`} 
                alt="arc-punk"
                className="w-full h-full object-cover pixelated grayscale group-hover:grayscale-0 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <footer className="mt-20 py-12 flex flex-col items-center gap-6 opacity-20 text-[9px] font-bold tracking-[0.4em] uppercase">
        <div className="flex gap-10">
          <div className="flex items-center gap-2"><Shield size={12} /> Encrypted_Node</div>
          <div className="flex items-center gap-2"><Globe size={12} /> Decentralized</div>
        </div>
        <span>©2026 ARC_Neural_System</span>
      </footer>

      <style jsx>{`
        .stroke-white { -webkit-text-stroke: 1px rgba(255,255,255,0.3); color: transparent; }
        .pixelated { image-rendering: pixelated; }
        .text-shadow-glow { text-shadow: 0 0 10px rgba(220, 38, 38, 0.5); }
      `}</style>
    </main>
  );
}