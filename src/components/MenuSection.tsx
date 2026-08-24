"use client";

import { useState } from "react";
import Image from "next/image";
import { MENU_ITEMS, SAINIK_HOTEL_DATA, MenuItem } from "@/data/hotelData";
import { Phone, ArrowUpRight, Flame, UtensilsCrossed, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "ALL SPECIALS" },
    { id: "thalis", name: "THALIS" },
    { id: "maharashtrian", name: "MAHARASHTRIAN" },
    { id: "north_indian", name: "NORTH INDIAN" },
    { id: "chinese", name: "CHINESE WOK" },
    { id: "snacks", name: "SNACKS & BEVERAGES" },
  ];

  const filteredItems = activeCategory === "all"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const featuredItems = filteredItems.filter((item) => item.featured);
  const regularItems = filteredItems.filter((item) => !item.featured);

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121110] relative bg-grain border-b-4 border-[#F5EFE4]">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-2 border-dashed border-[#F5EFE4]/20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#FF5722] tracking-widest uppercase">
              <UtensilsCrossed className="w-4 h-4" />
              <span>FRESHLY COOKED EVERY DAY</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-extrabold uppercase font-display tracking-tight text-[#F5EFE4]">
              WHAT&apos;S <span className="text-[#FF5722]">COOKING</span>
            </h2>
          </div>

          <div className="max-w-md text-sm font-mono text-[#F5EFE4]/70">
            <p>
              Generous portions, fiery Kolhapuri spices, sizzled woks, and home-style thalis. Serving Chikhali with genuine food and no non-sense pricing.
            </p>
            <div className="mt-2 text-[#FF5722] font-bold">
              ★ MEAL COST: ₹200–400 / PERSON
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-mono text-xs sm:text-sm font-extrabold px-4 sm:px-6 py-2.5 uppercase tracking-wider transition-all border-2 ${
                activeCategory === cat.id
                  ? "bg-[#FF5722] text-[#121110] border-[#F5EFE4] shadow-[3px_3px_0px_#F5EFE4] -translate-y-0.5"
                  : "bg-[#1C1A17] text-[#F5EFE4] border-[#F5EFE4]/30 hover:border-[#FF5722] hover:text-[#FF5722]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Featured Asymmetric Grid Composition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-16"
          >
            
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative bg-[#1C1A17] border-3 border-[#F5EFE4] p-4 flex flex-col justify-between shadow-[6px_6px_0px_#FF5722] hover:shadow-[10px_10px_0px_#FF5722] hover:-translate-y-1 transition-all duration-300 ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  {/* Item Badge */}
                  {item.tag && (
                    <div className="absolute top-6 left-6 z-20 bg-[#FF5722] text-[#121110] font-mono font-black text-[11px] px-3 py-1 uppercase tracking-wider border border-[#121110] shadow-[2px_2px_0px_#121110]">
                      {item.tag}
                    </div>
                  )}

                  {/* Photo Container */}
                  {item.image && (
                    <div className={`relative w-full overflow-hidden border-2 border-[#F5EFE4]/30 mb-5 ${
                      index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17] via-transparent to-transparent opacity-60" />
                    </div>
                  )}

                  {/* Card Content */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-display uppercase tracking-tight text-[#F5EFE4] group-hover:text-[#FF5722] transition-colors">
                        {item.name}
                      </h3>
                      <span className="shrink-0 font-mono font-bold text-xs bg-[#FF5722]/20 text-[#FF5722] px-2.5 py-1 border border-[#FF5722]/30">
                        ₹200–400 MEAL
                      </span>
                    </div>

                    <p className="text-sm font-mono text-[#F5EFE4]/70 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="pt-4 border-t border-[#F5EFE4]/15 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#F5EFE4]/60 uppercase flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-[#FF5722]" /> FRESH PREPARATION
                    </span>
                    <a
                      href={SAINIK_HOTEL_DATA.contact.phoneTel}
                      className="font-mono text-xs font-bold text-[#FF5722] hover:text-[#F5EFE4] flex items-center gap-1 uppercase"
                    >
                      <span>ORDER BY PHONE</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              ))}
            </div>

            {/* Editorial List Items for Secondary Dishes */}
            {regularItems.length > 0 && (
              <div className="bg-[#1C1A17] border-3 border-[#F5EFE4] p-6 sm:p-8 shadow-[8px_8px_0px_#C62828]">
                <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-dashed border-[#F5EFE4]/20">
                  <h3 className="text-2xl font-extrabold font-display uppercase text-[#F5EFE4]">
                    MORE LOCAL DELICACIES & BEVERAGES
                  </h3>
                  <span className="font-mono text-xs text-[#FF5722] uppercase font-bold">
                    PREPARED HOT ON ORDER
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {regularItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 border border-[#F5EFE4]/15 hover:border-[#FF5722] bg-[#121110]/50 transition-colors flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h4 className="font-extrabold font-display text-lg uppercase text-[#F5EFE4]">
                          {item.name}
                        </h4>
                        <span className="font-mono text-xs text-[#FF5722] font-bold">
                          FARM FRESH
                        </span>
                      </div>
                      <p className="text-xs font-mono text-[#F5EFE4]/70 mb-3">
                        {item.description}
                      </p>
                      {item.tag && (
                        <span className="inline-block text-[10px] font-mono font-bold text-[#FF5722] bg-[#FF5722]/10 px-2 py-0.5 border border-[#FF5722]/30 w-max">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

        {/* Menu Bottom Action Box */}
        <div className="mt-16 bg-[#FF5722] text-[#121110] p-8 border-4 border-[#F5EFE4] shadow-[8px_8px_0px_#F5EFE4] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono font-black text-xs uppercase tracking-widest bg-[#121110] text-[#F5EFE4] px-3 py-1">
              FULL MENU AVAILABLE AT RESTAURANT
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-tight mt-2">
              WANT TO CHECK TODAY&apos;S SPECIAL MENU BOARD?
            </h3>
            <p className="font-mono text-sm font-bold text-[#121110]/80 mt-1">
              Call Sainik Hotel front desk directly for daily rotating thalis & takeaway packages.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={SAINIK_HOTEL_DATA.contact.phoneTel}
              className="bg-[#121110] text-[#F5EFE4] font-black text-sm px-6 py-3.5 uppercase tracking-wider border-2 border-[#F5EFE4] shadow-[3px_3px_0px_#F5EFE4] hover:bg-[#F5EFE4] hover:text-[#121110] transition-all flex items-center justify-center gap-2 font-display"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>CALL 088119 94491</span>
            </a>
            
            <a
              href={SAINIK_HOTEL_DATA.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F5EFE4] text-[#121110] font-black text-sm px-6 py-3.5 uppercase tracking-wider border-2 border-[#121110] shadow-[3px_3px_0px_#121110] hover:bg-[#FF5722] hover:text-[#F5EFE4] transition-all flex items-center justify-center gap-2 font-display"
            >
              <span>VIEW ON GOOGLE MAPS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
