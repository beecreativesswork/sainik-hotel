"use client";

import { useState, useEffect } from "react";
import { SAINIK_HOTEL_DATA, getLiveOperationalStatus } from "@/data/hotelData";
import { Clock, Sun, Moon, Truck, Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function HoursSection() {
  const [status, setStatus] = useState({ isOpen: true, text: "OPEN NOW", subtext: "Serving Today" });
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setStatus(getLiveOperationalStatus());
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }));
      setStatus(getLiveOperationalStatus());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1C1A17] relative bg-halftone border-b-4 border-[#FF5722]">
      
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-[#121110] border-4 border-[#F5EFE4] p-8 sm:p-12 shadow-[12px_12px_0px_#FF5722]">
          
          {/* Header & Live Status */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b-2 border-dashed border-[#F5EFE4]/20 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#FF5722] tracking-widest uppercase">
                <Clock className="w-4 h-4" />
                <span>DAILY OPERATIONAL SCHEDULE</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-extrabold uppercase font-display tracking-tight text-[#F5EFE4]">
                TIMINGS & <span className="text-[#FF5722]">DELIVERY</span>
              </h2>
            </div>

            {/* Live Calculated Badge */}
            <div className="bg-[#1C1A17] border-3 border-[#F5EFE4] p-4 shadow-[4px_4px_0px_#F5EFE4] flex items-center gap-4">
              <div className={`w-4 h-4 rounded-full ${status.isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`} />
              <div>
                <span className="font-mono text-xs font-black uppercase text-[#FF5722] block">
                  LIVE BROWSER STATUS
                </span>
                <span className="font-extrabold text-lg sm:text-xl font-display uppercase text-[#F5EFE4] block">
                  {status.text}
                </span>
                <span className="font-mono text-xs text-[#F5EFE4]/70 block">
                  {status.subtext} {currentTime && `(${currentTime})`}
                </span>
              </div>
            </div>
          </div>

          {/* Timing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            
            {/* Lunch Shift */}
            <div className="p-6 bg-[#1C1A17] border-2 border-[#F5EFE4]/30 hover:border-[#FF5722] shadow-[4px_4px_0px_rgba(245,239,228,0.1)] transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#FF5722] text-[#121110] font-black border border-[#F5EFE4]">
                  <Sun className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="font-mono text-xs font-bold text-[#FF5722] bg-[#FF5722]/10 px-2.5 py-1 border border-[#FF5722]/30">
                  LUNCH SHIFT
                </span>
              </div>
              <h3 className="text-2xl font-extrabold font-display uppercase text-[#F5EFE4] mb-2">
                AFTERNOON SERVICE
              </h3>
              <p className="font-extrabold text-xl font-mono text-[#FF5722] mb-2">
                11:00 AM – 4:00 PM
              </p>
              <p className="font-mono text-xs text-[#F5EFE4]/70">
                Fresh Kolhapuri thalis, bhakri & rice served hot throughout lunchtime.
              </p>
            </div>

            {/* Dinner Shift */}
            <div className="p-6 bg-[#1C1A17] border-2 border-[#F5EFE4]/30 hover:border-[#FF5722] shadow-[4px_4px_0px_rgba(245,239,228,0.1)] transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#C62828] text-[#F5EFE4] font-black border border-[#F5EFE4]">
                  <Moon className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="font-mono text-xs font-bold text-[#FF5722] bg-[#FF5722]/10 px-2.5 py-1 border border-[#FF5722]/30">
                  DINNER SHIFT
                </span>
              </div>
              <h3 className="text-2xl font-extrabold font-display uppercase text-[#F5EFE4] mb-2">
                EVENING SERVICE
              </h3>
              <p className="font-extrabold text-xl font-mono text-[#FF5722] mb-2">
                7:00 PM – 11:00 PM
              </p>
              <p className="font-mono text-xs text-[#F5EFE4]/70">
                Reopens at 7:00 PM for open-air outdoor seating dinner & sizzled dishes.
              </p>
            </div>

            {/* Delivery Slot */}
            <div className="p-6 bg-[#1C1A17] border-2 border-[#F5EFE4]/30 hover:border-[#FF5722] shadow-[4px_4px_0px_rgba(245,239,228,0.1)] transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#1B4332] text-[#F5EFE4] font-black border border-[#F5EFE4]">
                  <Truck className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="font-mono text-xs font-bold text-[#FF5722] bg-[#FF5722]/10 px-2.5 py-1 border border-[#FF5722]/30">
                  DOORSTEP DELIVERY
                </span>
              </div>
              <h3 className="text-2xl font-extrabold font-display uppercase text-[#F5EFE4] mb-2">
                HOME DELIVERY SLOT
              </h3>
              <p className="font-extrabold text-xl font-mono text-[#FF5722] mb-2">
                7:00 PM – 8:30 PM
              </p>
              <p className="font-mono text-xs text-[#F5EFE4]/70">
                Direct phone delivery service available within Chikhali & Thermax Chowk areas.
              </p>
            </div>

          </div>

          {/* Operating Note Banner */}
          <div className="bg-[#FF5722] text-[#121110] p-4 border-2 border-[#F5EFE4] font-mono text-xs font-black uppercase tracking-wider flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>OPEN ALL 7 DAYS A WEEK (MONDAY TO SUNDAY)</span>
            </div>
            <a
              href={SAINIK_HOTEL_DATA.contact.phoneTel}
              className="hover:underline flex items-center gap-1 font-extrabold"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>CALL 088119 94491 FOR TAKEAWAY</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
