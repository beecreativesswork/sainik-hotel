"use client";

import { SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { Phone, Navigation, Flame, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FF5722] text-[#121110] relative bg-grain border-b-4 border-[#F5EFE4] overflow-hidden select-none">
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-[#121110] text-[#F5EFE4] font-mono font-black text-xs sm:text-sm px-5 py-2 uppercase tracking-widest border-2 border-[#F5EFE4] shadow-[4px_4px_0px_#F5EFE4] mb-6 transform -rotate-1"
        >
          <Flame className="w-4 h-4 text-[#FF5722]" />
          <span>YOUR NEXT MEAL IS READY</span>
        </motion.div>

        {/* Massive Poster Text */}
        <h2 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase font-display leading-[0.85] tracking-tighter text-[#121110] mb-4">
          HUNGRY YET? <br />
          <span className="text-[#F5EFE4] drop-shadow-[6px_6px_0px_#121110]">COME FIND US.</span>
        </h2>

        <p className="font-mono text-base sm:text-lg font-bold text-[#121110]/80 max-w-2xl mx-auto mb-10">
          BhagyaLaxmi Thermo Dies Compound, Mhetre Wadi, Hanuman Nagar, Chikhali, Pimpri-Chinchwad.
          Near Thermax Chowk & ICICI Bank.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
          <a
            href={SAINIK_HOTEL_DATA.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#121110] text-[#F5EFE4] font-black text-lg px-8 py-5 uppercase tracking-widest border-3 border-[#F5EFE4] shadow-[6px_6px_0px_#F5EFE4] hover:bg-[#F5EFE4] hover:text-[#121110] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-3 font-display"
          >
            <Navigation className="w-6 h-6 fill-current text-[#FF5722]" />
            <span>GET DIRECTIONS</span>
          </a>

          <a
            href={SAINIK_HOTEL_DATA.contact.phoneTel}
            className="w-full sm:w-auto bg-[#F5EFE4] text-[#121110] font-black text-lg px-8 py-5 uppercase tracking-widest border-3 border-[#121110] shadow-[6px_6px_0px_#121110] hover:bg-[#121110] hover:text-[#F5EFE4] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-3 font-display"
          >
            <Phone className="w-6 h-6 fill-current" />
            <span>CALL 088119 94491</span>
          </a>
        </div>

        {/* Address Footer Line */}
        <div className="mt-12 pt-6 border-t-2 border-dashed border-[#121110]/20 flex items-center justify-center gap-2 font-mono text-xs font-bold uppercase text-[#121110]">
          <MapPin className="w-4 h-4" />
          <span>SAINIK HOTEL • CHIKHALI • PIMPRI-CHINCHWAD • ₹200–400 / PERSON</span>
        </div>

      </div>

    </section>
  );
}
