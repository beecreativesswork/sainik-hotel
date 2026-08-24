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
      setCurrentTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }));
      setStatus(getLiveOperationalStatus());
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4EFE6] border-b border-[#1D1B18]/10">
      
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header & Live Calculated Badge */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#1D1B18]/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#C8522A] uppercase font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>HOURS & SERVICE SHIFTS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1D1B18] tracking-tight">
              Operational Schedule
            </h2>
          </div>

          {/* Live Status Pill */}
          <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#1D1B18]/10 shadow-xs flex items-center gap-4">
            <span
              className={`w-3 h-3 rounded-full shrink-0 ${
                status.isOpen ? "bg-emerald-600 animate-pulse" : "bg-amber-600"
              }`}
            />
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#C8522A] block">
                LIVE STATUS
              </span>
              <span className="font-display font-bold text-lg text-[#1D1B18] uppercase leading-tight block">
                {status.text}
              </span>
              <span className="font-body text-xs text-[#7A6F64]">
                {status.subtext} {currentTime && `· ${currentTime}`}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Timing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Lunch Shift */}
          <div className="p-8 bg-[#FAF7F2] rounded-2xl border border-[#1D1B18]/10 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#C8522A]/10 text-[#C8522A] flex items-center justify-center">
              <Sun className="w-5 h-5" />
            </div>
            <span className="font-mono text-[11px] font-bold text-[#C8522A] uppercase tracking-wider block">
              LUNCH SERVICE
            </span>
            <h3 className="font-display font-bold text-2xl text-[#1D1B18]">
              11:00 AM – 4:00 PM
            </h3>
            <p className="font-body text-xs text-[#7A6F64] leading-relaxed">
              Fresh Kolhapuri thalis, bhakri & rice served hot throughout lunchtime.
            </p>
          </div>

          {/* Dinner Shift */}
          <div className="p-8 bg-[#FAF7F2] rounded-2xl border border-[#1D1B18]/10 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#2D4030]/10 text-[#2D4030] flex items-center justify-center">
              <Moon className="w-5 h-5" />
            </div>
            <span className="font-mono text-[11px] font-bold text-[#2D4030] uppercase tracking-wider block">
              DINNER SERVICE
            </span>
            <h3 className="font-display font-bold text-2xl text-[#1D1B18]">
              7:00 PM – 11:00 PM
            </h3>
            <p className="font-body text-xs text-[#7A6F64] leading-relaxed">
              Reopens at 7:00 PM for open-air outdoor seating dinner & sizzled dishes.
            </p>
          </div>

          {/* Delivery Slot */}
          <div className="p-8 bg-[#FAF7F2] rounded-2xl border border-[#1D1B18]/10 space-y-4 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#8C7764]/15 text-[#1D1B18] flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <span className="font-mono text-[11px] font-bold text-[#1D1B18] uppercase tracking-wider block">
              LOCAL DELIVERY SHIFT
            </span>
            <h3 className="font-display font-bold text-2xl text-[#1D1B18]">
              7:00 PM – 8:30 PM
            </h3>
            <p className="font-body text-xs text-[#7A6F64] leading-relaxed">
              Direct phone delivery service available within Chikhali & Thermax Chowk areas.
            </p>
          </div>

        </div>

        {/* Operating Note Banner */}
        <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#1D1B18]/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#1D1B18]">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#C8522A]" />
            <span className="font-semibold">OPEN ALL 7 DAYS A WEEK (MONDAY TO SUNDAY)</span>
          </div>
          <a
            href={SAINIK_HOTEL_DATA.contact.phoneTel}
            className="text-[#C8522A] hover:underline font-bold flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>CALL 088119 94491 FOR TAKEAWAY</span>
          </a>
        </div>

      </div>

    </section>
  );
}
