"use client";

import { Flame, ShieldCheck, Banknote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AffordabilitySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FF5722] text-[#121110] border-b-4 border-[#F5EFE4] relative overflow-hidden select-none">
      
      {/* Background Halftone & Grain */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-grain" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Huge Editorial Headlines */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 bg-[#121110] text-[#F5EFE4] font-mono font-black text-xs sm:text-sm px-4 py-1.5 uppercase tracking-widest border border-[#F5EFE4] mb-4 shadow-[3px_3px_0px_#F5EFE4]">
              <Banknote className="w-4 h-4 text-[#FF5722]" />
              <span>UNBEATABLE VALUE EVERY DAY</span>
            </div>

            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase font-display leading-[0.88] tracking-tighter text-[#121110]">
              GOOD FOOD <br />
              <span className="text-[#F5EFE4] drop-shadow-[4px_4px_0px_#121110]">WITHOUT THE DAMAGE</span>
            </h2>
          </div>

          {/* Right Column: Giant Price Stamp Badge */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="bg-[#121110] text-[#F5EFE4] p-8 border-4 border-[#F5EFE4] shadow-[10px_10px_0px_#F5EFE4] transform -rotate-3 text-center max-w-sm w-full"
            >
              <span className="font-mono text-xs font-bold text-[#FF5722] tracking-widest uppercase block mb-1">
                AVERAGE COST PER MEAL
              </span>
              <div className="text-5xl sm:text-6xl font-extrabold font-display text-[#F5EFE4] tracking-tight leading-none my-2">
                ₹200–400
              </div>
              <span className="font-mono text-sm font-black text-[#FF5722] uppercase tracking-wider block">
                PER PERSON
              </span>

              <div className="mt-4 pt-4 border-t border-[#F5EFE4]/20 flex items-center justify-center gap-2 text-xs font-mono text-[#F5EFE4]/80">
                <ShieldCheck className="w-4 h-4 text-[#FF5722]" />
                <span>FULL THALIS & HUGE PORTIONS</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>

    </section>
  );
}
