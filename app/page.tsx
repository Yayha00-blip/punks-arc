"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
// Icons safe bach l-build i-douz
import { Zap, ArrowUpRight, Fingerprint, Globe, Camera, Send, Terminal, ShieldAlert, Cpu, Activity, Database } from "lucide-react";

export default function ArcGenesisPunks() {
  const containerRef = useRef(null);
  const [liveMinted, setLiveMinted] = useState(2842);

  // Simulation dial live minting bach i-ban l-site "Alive"
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMinted(prev => (prev < 3333 ? prev + 1 : prev));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main ref={containerRef} className="bg-[#050505] text-white min-h-screen font-mono selection:bg-cyan-400 selection:text-black overflow-x-hidden relative">
      
      {/* 1. TECH OVERLAYS */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.05] bg-[url('https://res.cloudinary.com/dcb6m6j9j/image/upload/v1672224000/noise_shdf6e.gif')]" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* 2. TOP STATUS BAR (The "First on Arc" Flex) */}
      <div className="fixed top-0 w-full z-[110] bg-cyan-500 text-black py-2 px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><Activity size={12}/> Network: Arc Mainnet</span>
          <span className="hidden md:inline border-l border-black/20 pl-6">Block: #104,294,002</span>
        </div>
        <div className="animate-pulse flex items-center gap-2">
          <div className="w-2 h-2 bg-black rounded-full" /> Live Genesis Extraction
        </div>
      </div>

      <nav className="fixed top-12 w-full z-[110] flex justify-between items-center px-10">
        <div className="bg-white text-black p-4 skew-x-[-10deg] hover:skew-x-0 transition-transform cursor-pointer">
          <span className="text-3xl font-[1000] tracking-tighter uppercase leading-none">ARC_PUNKS</span>
        </div>
        <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black transition-all font-black text-xs uppercase tracking-[4px]">
          Link_Node
        </button>
      </nav>

      {/* 3. HERO: FIRST MOVER PROCLAMATION */}
      <section className="pt-52 px-10 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="px-3 py-1 bg-white/10 rounded border border-white/20 text-[10px] font-bold text-cyan-400 uppercase tracking-[4px]">
                History_In_The_Making
              </div>
              <div className="h-[1px] flex-grow bg-white/10" />
            </div>
            
            <h1 className="text-[10vw] lg:text-[140px] font-[1000] leading-[0.8] tracking-[-0.05em] uppercase mb-12">
              THE <span className="text-cyan-400">FIRST</span><br />
              <span className="italic">GENESIS</span> ON ARC
            </h1>

            <div className="grid md:grid-cols-2 gap-12 border-l-4 border-cyan-400 pl-10">
              <p className="text-xl font-bold leading-tight opacity-60 uppercase italic">
                We aren't just a collection. We are the <span className="text-white">Genesis Node</span>. The first 3,333 neural imprints ever deployed on the Arc Mainnet.
              </p>
              <div className="space-y-4">
                 <div className="flex justify-between text-xs opacity-40 uppercase font-black">
                    <span>Extraction Progress</span>
                    <span>{liveMinted}/3333</span>
                 </div>
                 <div className="w-full h-4 bg-white/5 border border-white/10 p-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(liveMinted/3333)*100}%` }}
                      className="h-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
                    />
                 </div>
                 <button className="w-full py-8 bg-white text-black text-4xl font-[1000] italic uppercase hover:bg-cyan-400 transition-all shadow-[10px_10px_0px_0px_rgba(34,211,238,0.3)]">
                    Mint_Now_Free
                 </button>
              </div>
            </div>
          </div>

          {/* TECH STATS (Information Density) */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 p-8 space-y-8 backdrop-blur-xl">
             <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Terminal className="text-cyan-400" size={20} />
                <span className="text-xs font-black uppercase tracking-widest">Core_Technical_Specs</span>
             </div>
             
             {[
               { label: "Contract", val: "0xARC...F92A", icon: <Cpu size={14}/> },
               { label: "Standard", val: "ARC-721G", icon: <Database size={14}/> },
               { label: "Royalty", val: "0%", icon: <Zap size={14}/> },
               { label: "Max_Per_Node", val: "1 NFT", icon: <Fingerprint size={14}/> }
             ].map((stat, i) => (
               <div key={i} className="flex justify-between items-center group cursor-help">
                  <div className="flex items-center gap-2 opacity-40 text-[10px] font-black uppercase tracking-widest group-hover:opacity-100 group-hover:text-cyan-400 transition-all">
                    {stat.icon} {stat.label}
                  </div>
                  <div className="text-sm font-black">{stat.val}</div>
               </div>
             ))}

             <div className="pt-6 border-t border-white/10">
                <div className="bg-red-500/10 border border-red-500/50 p-4 rounded text-red-500 text-[10px] font-bold uppercase leading-relaxed">
                   <ShieldAlert size={16} className="mb-2" />
                   Warning: High-Volatile Asset. First on-chain sequence detected. Neural sync required.
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. THE LIVE FEED (Dynamic Informational Chaos) */}
      <section className="py-40 px-10">
        <div className="flex justify-between items-end mb-10 border-b-4 border-white pb-6">
           <h2 className="text-6xl font-[1000] italic uppercase tracking-tighter">Live_Gallery</h2>
           <Globe className="text-cyan-400 animate-spin" size={40} />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
           {[1,2,3,4,5,6,1,2,3,4].map((id, i) => (
             <motion.div 
               key={i} 
               whileHover={{ scale: 1.05, y: -10 }}
               className="relative aspect-square border-2 border-white/10 group cursor-none overflow-hidden"
             >
                <img src={`/punks/${id}.png`} className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
                <div className="absolute bottom-0 left-0 w-full bg-cyan-400 text-black text-[9px] font-black p-1 translate-y-full group-hover:translate-y-0 transition-transform">
                   ARC_PUNK_#{284 + i}
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* 5. THE MANIFESTO / ROADMAP (Deep Information) */}
      <section className="py-40 bg-white text-black">
        <div className="max-w-[1400px] mx-auto px-10">
           <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-10">
                 <h3 className="text-8xl font-[1000] leading-none tracking-tighter uppercase italic underline decoration-cyan-400 decoration-[15px]">The Arc Path.</h3>
                 <p className="text-3xl font-bold leading-none tracking-tight">Phase 01: The Big Bang of Arc Network. We are the foundation.</p>
              </div>
              <div className="space-y-12">
                 {[
                   { t: "Q2 2026: Genesis Extraction", d: "First NFT collection to ever launch on Arc Mainnet. Secured foundation for the ecosystem." },
                   { t: "Q3 2026: Neural Staking", d: "Punks nodes become eligible for the $ARC token governance and ecosystem drops." },
                   { t: "Q4 2026: Arc Universe Expansion", d: "Integration with the first 3D metaverse protocols being built on Arc." }
                 ].map((step, i) => (
                   <div key={i} className="border-l-8 border-black pl-8 group">
                      <div className="text-xs font-black uppercase tracking-[4px] opacity-30 group-hover:opacity-100 transition-opacity">{step.t}</div>
                      <div className="text-xl font-bold mt-2 uppercase">{step.d}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      <footer className="py-20 px-10 flex flex-col md:flex-row justify-between items-center gap-10">
         <div className="flex gap-10">
            <a href="#" className="hover:text-cyan-400 transition-colors uppercase font-black tracking-widest border-b-2 border-white">Twitter_X</a>
            <a href="#" className="hover:text-cyan-400 transition-colors uppercase font-black tracking-widest border-b-2 border-white">Discord_Hub</a>
         </div>
         <div className="text-[10px] font-black opacity-20 uppercase tracking-[10px]">Neural_Genesis_Protocol_001</div>
      </footer>

    </main>
  );
}