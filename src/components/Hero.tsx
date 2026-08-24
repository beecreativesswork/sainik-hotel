"use client";

import Image from "next/image";
import { SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { Star, MapPin, ArrowUpRight, Flame, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-grain overflow-hidden flex flex-col justify-between border-b-4 border-[#FF5722]">
      
      {/* Background Vintage Line Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F5EFE4] to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF5722] to-transparent" />
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#F5EFE4] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        
        {/* Top Tag Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="bg-[#FF5722] text-[#121110] font-mono font-black text-xs sm:text-sm px-3 py-1 uppercase tracking-widest border-2 border-[#F5EFE4] shadow-[2px_2px_0px_#F5EFE4] transform -rotate-1">
            EST. • CHIKHALI • PIMPRI-CHINCHWAD
          </span>
          <span className="bg-[#1C1A17] text-[#F5EFE4] font-mono font-extrabold text-xs sm:text-sm px-3 py-1 uppercase tracking-widest border border-[#F5EFE4]/30 flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-[#FF5722]" />
            ₹200–400 PER PERSON
          </span>
          <span className="bg-[#C62828] text-[#F5EFE4] font-mono font-bold text-xs px-3 py-1 uppercase tracking-widest border border-[#F5EFE4]/30 hidden sm:inline-block">
            AUTHENTIC ROAD-SIDE HOTEL
          </span>
        </motion.div>

        {/* Oversized Editorial Typography Composition */}
        <div className="relative">
          
          {/* Main Huge Backdrop Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="leading-none select-none tracking-tighter"
          >
            <h1 className="font-extrabold text-[17vw] sm:text-[14vw] lg:text-[11vw] uppercase text-[#F5EFE4] font-display leading-[0.82] tracking-tighter drop-shadow-2xl">
              SAINIK
            </h1>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-extrabold text-[17vw] sm:text-[14vw] lg:text-[11vw] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] via-[#F5EFE4] to-[#FF5722] font-display leading-[0.82] tracking-tighter">
                HOTEL
              </span>
              
              {/* Floating Circular Badge */}
              <motion.div
                initial={{ rotate: -15, scale: 0 }}
                animate={{ rotate: 5, scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="hidden lg:flex flex-col items-center justify-center w-36 h-36 rounded-full bg-[#FF5722] text-[#121110] p-4 text-center border-4 border-[#F5EFE4] shadow-[5px_5px_0px_#F5EFE4] transform hover:scale-110 transition-transform cursor-pointer"
              >
                <ShieldCheck className="w-8 h-8 stroke-[2.5]" />
                <span className="font-black text-xs uppercase leading-tight font-display tracking-wider mt-1">
                  GOOD FOOD NO NONSENSE
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Overlapping Hero Food Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative -mt-12 sm:-mt-20 lg:-mt-32 max-w-2xl ml-auto z-20 group"
          >
            <div className="relative p-2 sm:p-3 bg-[#1C1A17] border-4 border-[#F5EFE4] shadow-[8px_8px_0px_#FF5722] sm:shadow-[12px_12px_0px_#FF5722] overflow-hidden transform group-hover:rotate-0 transition-transform duration-300">
              
              {/* Main Food Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/hero_thali.png"
                  alt="Authentic Sainik Hotel Thali Platter in Chikhali"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                />
                
                {/* Photo Tag Overlay */}
                <div className="absolute top-3 left-3 bg-[#121110]/90 backdrop-blur-sm border border-[#F5EFE4]/40 px-3 py-1 text-xs font-mono font-bold text-[#F5EFE4]">
                  SIGNATURE THALI • ₹200–400
                </div>

                {/* Corner Decorative Ribbon */}
                <div className="absolute bottom-3 right-3 bg-[#C62828] text-[#F5EFE4] font-black text-xs px-3 py-1 uppercase tracking-widest border border-[#F5EFE4]/50 shadow-md">
                  HOT & FRESH EVERYDAY
                </div>
              </div>
            </div>

            {/* Floating Editorial Callouts around Food */}
            <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-8 bg-[#F5EFE4] text-[#121110] p-3 border-2 border-[#121110] shadow-[4px_4px_0px_#FF5722] transform -rotate-6 z-30 hidden sm:block">
              <p className="font-extrabold text-xs tracking-wider uppercase font-mono">
                CHIKHALI SPECIALIST
              </p>
              <p className="text-[10px] font-bold text-[#FF5722]">
                ALL YOU CAN EAT THALIS
              </p>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-[#FF5722] text-[#121110] px-4 py-2 border-2 border-[#F5EFE4] shadow-[4px_4px_0px_#F5EFE4] transform rotate-3 z-30 font-black text-sm uppercase tracking-wider font-display hidden md:block">
              100% UNBEATABLE TASTE
            </div>
          </motion.div>

        </div>

        {/* Hero CTAs & Supporting Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-6 border-t border-[#F5EFE4]/15"
        >
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#menu"
              className="group bg-[#FF5722] text-[#121110] font-black text-lg px-8 py-4 uppercase tracking-widest border-2 border-[#F5EFE4] shadow-[5px_5px_0px_#F5EFE4] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#F5EFE4] transition-all flex items-center justify-center gap-3 font-display"
            >
              <span>EXPLORE MENU</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href={SAINIK_HOTEL_DATA.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#1C1A17] text-[#F5EFE4] font-black text-lg px-8 py-4 uppercase tracking-widest border-2 border-[#F5EFE4] shadow-[5px_5px_0px_#FF5722] hover:bg-[#F5EFE4] hover:text-[#121110] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#FF5722] transition-all flex items-center justify-center gap-3 font-display"
            >
              <MapPin className="w-5 h-5 text-[#FF5722] group-hover:text-[#121110]" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>

          {/* Quick Landmark Reference */}
          <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-[#F5EFE4]/80 bg-[#1C1A17]/80 p-3 border border-[#F5EFE4]/20 rounded-md">
            <MapPin className="w-5 h-5 text-[#FF5722] shrink-0" />
            <div>
              <p className="font-bold text-[#F5EFE4]">NEAR THERMAX CHOWK / ICICI BANK</p>
              <p className="text-[11px] text-[#F5EFE4]/60">Mhetre Wadi, Hanuman Nagar, Chikhali</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Information Metrics Strip */}
      <div className="mt-12 pt-4 border-t-2 border-dashed border-[#F5EFE4]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F5EFE4]">
          <div className="flex items-center gap-2">
            <div className="flex text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-[#FF5722] font-black text-base">{SAINIK_HOTEL_DATA.metrics.rating} ★</span>
            <span className="text-[#F5EFE4]/70">GOOGLE RATING</span>
          </div>

          <div className="h-4 w-[1px] bg-[#F5EFE4]/20 hidden sm:block" />

          <div>
            <span className="text-[#FF5722] font-black">{SAINIK_HOTEL_DATA.metrics.reviewsCount}</span>
            <span className="text-[#F5EFE4]/70"> VERIFIED GOOGLE REVIEWS</span>
          </div>

          <div className="h-4 w-[1px] bg-[#F5EFE4]/20 hidden sm:block" />

          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>OPEN TODAY • SERVING FRESH MEALS</span>
          </div>
        </div>
      </div>

    </section>
  );
}
