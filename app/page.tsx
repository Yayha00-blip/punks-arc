"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ShieldCheck, Activity, Terminal, ChevronRight } from "lucide-react";

export default function PunksArcNadiMotion() {
  const [minted, setMinted] = useState(1287);
  const supply = 3333;

  // Tes 5 images (1.png à 5.png) répétées pour le défilement infini
  const images = [1, 2, 3, 4, 5, 1, 2, 3];

  return (
    <main className="bg-[#020202] text-white min-h-screen overflow-hidden font-sans selection:bg-red-600">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-red-600/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      </div>

      {/* HEADER */}
      <nav className="relative z-[100] flex justify-between items-center px-8 py-8 border-b border-white/5 backdrop-blur-md">
        <div className="flex items-center gap-4">
           <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
           <span className="text-[10px] font-mono tracking-[4px] text-white/40">NETWORK_PUNKS_ARC.SYS</span>
        </div>
        <button className="relative group px-10 py-3 bg-white text-black text-[11px] font-black tracking-[4px] uppercase overflow-hidden hover:skew-x-[-10deg] transition-all duration-300">
           CONNECT_WLT
        </button>
      </nav>

      <div className="relative z-10 max-w-[1700px] mx-auto grid lg:grid-cols-2 gap-10 min-h-[calc(100vh-100px)] items-center">
        
        {/* LEFT COLUMN: THE NADI MOTION VISUAL (L'effet principal) */}
        <div className="relative h-[650px] flex items-center justify-center overflow-hidden border border-white/5 bg-black/40 group">
          {/* EFFET DE PERSPECTIVE ET DE PROFONDEUR */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20" />
          
          <motion.div 
            animate={{ y: [0, -1000] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="grid grid-cols-2 gap-6 p-10 transform skew-y-[-10deg] skew-x-[10deg] scale-110 blur-[1.5px] group-hover:blur-0 group-hover:skew-x-[0deg] transition-all duration-1000 ease-out"
          >
            {[...images, ...images, ...images].map((id, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, scale: 1.05 }}
                className="aspect-square border border-white/10 rounded-xl overflow-hidden bg-white/5 relative group"
              >
                <img 
                  src={`/punks/${id}.png`} 
                  alt={`Punk ${id}`}
                  className="w-full h-full object-cover pixelated opacity-50 hover:opacity-100 transition-all duration-500 blur-[0.5px] hover:blur-0"
                  style={{ imageRendering: 'pixelated' }}
                />
                <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 text-[9px] border border-red-500/30">
                  ID_#{2000 + i}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: MINT INTERFACE */}
        <div className="flex flex-col space-y-12 p-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="flex items-center gap-3 text-red-600 mb-6">
               <Activity size={18} />
               <span className="text-xs font-black tracking-[8px] uppercase">PROTOCOL_ARC</span>
            </div>

            {/* HIGH-LEVEL CUSTOM TITLE: PUNKS ARC */}
            <div className="relative group cursor-default">
              {/* Layer 1: Red Glitch */}
              <h1 className="text-[110px] md:text-[160px] font-[1000] leading-[0.85] tracking-[-0.07em] uppercase text-red-600/30 absolute top-1 left-1 group-hover:animate-ping">
                PUNKS<br/>ARC
              </h1>
              {/* Layer 2: Main White */}
              <h1 className="relative text-[110px] md:text-[160px] font-[1000] leading-[0.85] tracking-[-0.07em] uppercase italic text-transparent stroke-text-white">
                PUNKS<br/><span className="text-white fill-text">ARC</span>
              </h1>
            </div>

            <p className="mt-12 max-w-lg text-white/40 text-lg leading-relaxed font-light">
              Architecting the next generation of digital identity. 
              Built on the ruins of the old world. Only 3,333 TOTAL SUPPLY.
            </p>
          </motion.div>

          {/* MINT BOX */}
          <div className="p-10 bg-white/[0.03] border border-white/10 backdrop-blur-2xl rounded-sm relative shadow-[0_0_100px_rgba(220,38,38,0.05)]">
             <div className="flex justify-between items-end mb-10">
                <div>
                    <p className="text-white/40 text-[10px] tracking-[4px] uppercase mb-1">MINT STATUS</p>
                    <div className="text-5xl font-black italic tracking-tighter text-red-600 animate-pulse">● LIVE</div>
                </div>
                <div className="text-right">
                    <p className="text-white/40 text-[10px] tracking-[4px] uppercase mb-1">Price</p>
                    <div className="text-3xl font-black font-mono">0.00 <span className="text-white/20">ETH</span></div>
                </div>
             </div>

             {/* PROGRESS BAR */}
             <div className="mb-10">
                <div className="flex justify-between text-[11px] font-bold mb-4 tracking-[2px]">
                   <span className="text-white/40">SYNC_PROGRESS</span>
                   <span>{((minted/supply)*100).toFixed(1)}%</span>
                </div>
                <div className="h-6 w-full bg-white/5 border border-white/10 p-1 rounded-full overflow-hidden relative">
                   <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(minted/supply)*100}%` }}
                        className="absolute h-[calc(100%-8px)] left-1 top-1 bg-gradient-to-r from-red-600 to-blue-600 shadow-[0_0_15px_rgba(220,38,38,0.8)] rounded-full"
                   />
                </div>
                <div className="flex justify-between mt-4 font-mono text-xl font-black text-white/60">
                    <span>{minted}</span>
                    <span className="text-white/20">/ {supply}</span>
                </div>
             </div>

             {/* BOUTON MINT */}
             <button className="group w-full relative py-6 bg-red-600 hover:bg-white transition-colors duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative z-10 flex items-center justify-center gap-3 text-black font-[1000] text-2xl uppercase italic tracking-tighter transition-colors group-hover:text-black">
                   Authorize_Mint <ChevronRight size={24} />
                </div>
             </button>
          </div>
        </div>

      </div>

      {/* FOOTER BAR */}
      <footer className="relative z-50 border-t border-white/5 bg-black px-10 py-6 flex justify-around text-[9px] font-bold tracking-[6px] text-white/30 uppercase">
          <span>Verified Contract</span>
          <span>OpenSea Listing Pending</span>
          <span>No Discord • No Roadmap • Only Vibes</span>
      </footer>

      {/* CUSTOM CSS FOR TEXT STROKE */}
      <style jsx>{`
        .stroke-text-white {
          -webkit-text-stroke: 2px white;
          color: transparent;
        }
        .fill-text {
          color: white;
          -webkit-text-stroke: 0px transparent;
        }
        .pixelated {
          image-rendering: pixelated;
        }
      `}</style>
    </main>
  );
}