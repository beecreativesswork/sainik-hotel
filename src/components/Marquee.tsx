"use client";

import { Sparkles, Utensils, Star, Flame } from "lucide-react";

export default function Marquee() {
  const marqueeItemsRow1 = [
    "SAINIK HOTEL",
    "CHIKHALI",
    "GOOD FOOD NO NONSENSE",
    "GREAT PORTIONS",
    "EVERYDAY FRESH",
    "₹200–400 PER PERSON",
    "THERMAX CHOWK",
    "AUTHENTIC DHABA",
  ];

  const marqueeItemsRow2 = [
    "MAHARASHTRIAN THALIS",
    "KOLHAPURI SUKKA",
    "WOK-FIRED CHINESE",
    "ALL YOU CAN EAT",
    "OUTDOOR SEATING",
    "PIMPRI-CHINCHWAD",
    "DELIVERY AVAILABLE",
    "4.1 ★ GOOGLE RATED",
  ];

  return (
    <section className="bg-[#FF5722] text-[#121110] py-4 border-b-4 border-[#F5EFE4] overflow-hidden select-none">
      
      {/* Row 1: Leftward Marquee */}
      <div className="flex overflow-hidden py-1 border-b-2 border-[#121110]/20">
        <div className="animate-marquee-left flex items-center space-x-8 text-2xl sm:text-4xl font-extrabold font-display tracking-tight uppercase">
          {[...marqueeItemsRow1, ...marqueeItemsRow1, ...marqueeItemsRow1].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8 shrink-0">
              <span className="hover:text-[#F5EFE4] transition-colors">{item}</span>
              <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 stroke-[2.5] text-[#121110]" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward Marquee (Inverse Colors background) */}
      <div className="flex overflow-hidden py-1.5 bg-[#121110] text-[#F5EFE4]">
        <div className="animate-marquee-right flex items-center space-x-8 text-xl sm:text-3xl font-extrabold font-display tracking-tight uppercase">
          {[...marqueeItemsRow2, ...marqueeItemsRow2, ...marqueeItemsRow2].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8 shrink-0">
              <span className="text-[#FF5722]">{item}</span>
              <Flame className="w-4 h-4 sm:w-6 sm:h-6 text-[#F5EFE4]" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
