"use client";

import { SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { Phone, Navigation, Flame, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#C8522A] text-[#FAF7F2] relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        
        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-[#FAF7F2]/10 backdrop-blur-xs font-mono font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest text-[#FAF7F2] border border-[#FAF7F2]/20"
        >
          <Flame className="w-3.5 h-3.5" />
          <span>YOUR NEXT MEAL AWAITS</span>
        </motion.div>

        {/* Editorial Headline */}
        <h2 className="font-display type-section font-bold tracking-tight">
          Hungry Yet? Visit Us Today.
        </h2>

        <p className="font-body text-base sm:text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto leading-relaxed">
          BhagyaLaxmi Thermo Dies Compound, Mhetre Wadi, Chikhali, Pimpri-Chinchwad.
          Near Thermax Chowk & ICICI Bank.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
          <a
            href={SAINIK_HOTEL_DATA.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#FAF7F2] hover:bg-[#F3ECE0] text-[#1D1B18] font-semibold text-xs py-4 px-8 rounded-md uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 font-body shadow-sm"
          >
            <Navigation className="w-4 h-4 fill-current text-[#C8522A]" />
            <span>GET DIRECTIONS</span>
          </a>

          <a
            href={SAINIK_HOTEL_DATA.contact.phoneTel}
            className="w-full sm:w-auto bg-[#1D1B18] hover:bg-[#2D2A26] text-[#FAF7F2] font-semibold text-xs py-4 px-8 rounded-md uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 font-body shadow-sm"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>CALL {SAINIK_HOTEL_DATA.contact.phoneDisplay}</span>
          </a>
        </div>

        {/* Address Footer Line */}
        <div className="pt-8 border-t border-[#FAF7F2]/20 flex items-center justify-center gap-2 font-mono text-xs uppercase text-[#FAF7F2]/80">
          <MapPin className="w-3.5 h-3.5" />
          <span>SAINIK HOTEL · CHIKHALI · PIMPRI-CHINCHWAD · ₹200–400 / PERSON</span>
        </div>

      </div>

    </section>
  );
}
