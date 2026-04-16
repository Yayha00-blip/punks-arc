"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Globe, Shield, Activity, Fingerprint } from "lucide-react";

// --- 1. COMPOSANT MOUSE TRAIL (L'effet de trace) ---
const MouseTrail = () => {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrail((prev) => [...prev.slice(-12), newPoint]); // Trace de 12 cercles
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999]">
      <AnimatePresence>
        {trail.map((point) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute w-3 h-3 bg-red-600 rounded-full blur-[2px]"
            style={{ left: point.x, top: point.y, x: "-50%", y: "-50%" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default function PunksArcFinal() {
  const [minted] = useState(1287);
  const supply = 3333;
  const images = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // Slideshow images

  return (
    <main className="bg-[#020202] text-white min-h-screen font-sans selection:bg-red-600/30 overflow-hidden cursor-none">
      
      {/* EFFECT: MOUSE TRAIL */}
      <MouseTrail />

      {/* BACKGROUND: AMBIENT GLOW */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-red-600/[0.07] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-blue-600/[0.05] blur-[120px] rounded-full" />
      </div>

      {/* NAVIGATION */}
      <nav className="relative z-[100] flex justify-between items-center px-12 py-8 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <Fingerprint size={20} className="text-red-600" />
          <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-60">Arc.Protocol_v10</span>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-widest opacity-30 uppercase">
          <span className="hover:opacity-100 cursor-pointer transition-all">Identity</span>
          <span className="hover:opacity-100 cursor-pointer transition-all">Terminal</span>
          <span className="hover:opacity-100 cursor-pointer transition-all">Nodes</span>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-12 px-6">
        
        {/* HERO SECTION WITH PLUS VALUE COPYWRITING */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-block px-4 py-1 border border-red-600/20 rounded-full mb-8 bg-red-600/5">
            <span className="text-[9px] font-black tracking-[4px] text-red-500 uppercase">
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
            3,333 generative architectures forged in the intersection of human 
            chaos and machine precision.
          </p>

          <div className="mt-12 flex flex-col items-center gap-8">
            <button className="group relative px-20 py-7 bg-white text-black rounded-full font-black text-xl uppercase tracking-tighter overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
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
            
            <div className="flex items-center gap-12 opacity-30 uppercase font-mono">
              <div className="text-center">
                <div className="text-[9px] tracking-[3px] mb-1">MINT_PRICE</div>
                <div className="text-lg font-black italic">Free_Claim</div>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-[9px] tracking-[3px] mb-1">NETWORK</div>
                <div className="text-lg font-black italic">ARC_Chain</div>
              </div>
            </div>
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
              className="absolute inset-0 bg-red-600 shadow-[0_0_20px_#dc2626]"
            />
          </div>
        </div>
      </div>

      {/* INFINITE SLIDER (Visual Identity) */}
      <div className="relative mt-20 w-full overflow-hidden py-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-transparent to-[#020202] z-20 pointer-events-none" />
        <motion.div 
          animate={{ x: [0, -1400] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 px-10"
        >
          {[...images, ...images, ...images].map((id, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -15, scale: 1.05 }}
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

      {/* FOOTER */}
      <footer className="mt-20 py-12 flex flex-col items-center gap-6 opacity-20 text-[9px] font-bold tracking-[0.4em] uppercase">
        <div className="flex gap-10">
          <div className="flex items-center gap-2"><Shield size={12} /> Encrypted_Node</div>
          <div className="flex items-center gap-2"><Globe size={12} /> Decentralized</div>
        </div>
        <span>©2026 ARC_Neural_System • All Rights Reserved</span>
      </footer>

      {/* GLOBAL STYLES (Fixed Build Error) */}
      <style jsx>{`
        .stroke-white { 
          -webkit-text-stroke: 1px rgba(255,255,255,0.3); 
          color: transparent; 
        }
        .pixelated { 
          image-rendering: pixelated; 
        }
      `}</style>
    </main>
  );
}