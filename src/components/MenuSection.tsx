"use client";

import { useState } from "react";
import Image from "next/image";
import { MENU_ITEMS, SAINIK_HOTEL_DATA, MenuItem } from "@/data/hotelData";
import { Phone, UtensilsCrossed, ExternalLink, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "ALL DISHES" },
    { id: "thalis", name: "THALIS" },
    { id: "maharashtrian", name: "MAHARASHTRIAN" },
    { id: "north_indian", name: "NORTH INDIAN" },
    { id: "chinese", name: "CHINESE" },
    { id: "snacks", name: "SNACKS & BEVERAGES" },
  ];

  const filteredItems = activeCategory === "all"
    ? MENU_ITEMS
    : activeCategory === "snacks"
    ? MENU_ITEMS.filter((item) => item.category === "snacks" || item.category === "beverages")
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const featuredItems = filteredItems.filter((item) => item.featured && item.image);

  // Group items by category for physical menu presentation
  const categoryLabels: Record<string, string> = {
    thalis: "THALIS & SPECIAL FEASTS",
    maharashtrian: "MAHARASHTRIAN SPECIALITIES",
    north_indian: "NORTH INDIAN CURRIES & BREADS",
    chinese: "CHINESE WOK & STARTERS",
    snacks: "SNACKS & REFRESHMENTS",
    beverages: "BEVERAGES & COOLERS",
  };

  const groupedCategories = Array.from(new Set(filteredItems.map(item => item.category)));

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4EFE6] border-b border-[#1D1B18]/10">
      
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Editorial Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#C8522A] uppercase font-bold">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>AUTHENTIC CUISINE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1D1B18] tracking-tight">
            The Restaurant Menu
          </h2>
          <p className="font-body text-sm text-[#7A6F64]">
            Generous portions, authentic spices, and home-style thalis prepared hot every day.
          </p>
        </div>

        {/* Category Navigation Bar (Sticky / Horizontal Scroll) */}
        <div className="sticky top-16 z-30 bg-[#F4EFE6]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:mx-0 sm:px-0 border-y border-[#1D1B18]/10 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-center min-w-max gap-2 sm:gap-3 mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-mono text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#C8522A] text-[#FAF7F2] shadow-xs"
                    : "bg-[#FAF7F2] text-[#1D1B18]/80 hover:bg-[#EADBCE] border border-[#1D1B18]/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Dish Editorial Spotlight ("FROM THE KITCHEN") */}
        {featuredItems.length > 0 && activeCategory === "all" && (
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C8522A]">FROM THE KITCHEN</span>
              <div className="h-[1px] bg-[#1D1B18]/15 flex-grow" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredItems.slice(0, 2).map((item) => (
                <div key={item.id} className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#1D1B18]/10 shadow-sm flex flex-col sm:flex-row gap-5 items-center">
                  <div className="relative aspect-[4/3] w-full sm:w-44 shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={item.image!}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="176px"
                    />
                  </div>
                  <div className="space-y-2 flex-grow">
                    {item.tag && (
                      <span className="text-[10px] font-mono font-bold text-[#C8522A] uppercase tracking-wider">
                        {item.tag}
                      </span>
                    )}
                    <h3 className="font-display font-bold text-xl text-[#1D1B18]">
                      {item.name}
                    </h3>
                    <p className="font-body text-xs text-[#7A6F64] leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-1 flex items-center justify-between font-mono text-xs text-[#1D1B18]">
                      <span className="font-bold text-[#C8522A]">₹200–400 MEAL</span>
                      <a href={SAINIK_HOTEL_DATA.contact.phoneTel} className="text-[#1D1B18] font-bold hover:underline">ORDER →</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Physical Menu Representation (2-Column Clean Editorial Layout) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FAF7F2] rounded-2xl p-8 sm:p-12 border border-[#1D1B18]/12 shadow-md space-y-12"
          >
            {groupedCategories.map((catKey) => {
              const catItems = filteredItems.filter((i) => i.category === catKey);
              if (catItems.length === 0) return null;

              return (
                <div key={catKey} className="space-y-6">
                  {/* Category Header */}
                  <div className="pb-2 border-b-2 border-[#C8522A]/30 flex items-center justify-between">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1D1B18] tracking-tight uppercase">
                      {categoryLabels[catKey] || catKey}
                    </h3>
                    <span className="font-mono text-xs text-[#7A6F64] font-semibold">FRESH PREPARATION</span>
                  </div>

                  {/* Physical Menu Items Grid (Two Column Desktop Layout) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {catItems.map((item) => (
                      <div key={item.id} className="space-y-1 group">
                        <div className="flex items-baseline">
                          <span className="font-display font-bold text-lg text-[#1D1B18] group-hover:text-[#C8522A] transition-colors">
                            {item.name}
                          </span>
                          <span className="menu-dot-leader" />
                          {item.tag && (
                            <span className="text-[10px] font-mono font-bold text-[#C8522A] uppercase tracking-wider mr-2">
                              {item.tag}
                            </span>
                          )}
                          <span className="font-mono text-xs font-semibold text-[#1D1B18] bg-[#F3ECE0] px-2 py-0.5 rounded">
                            ₹200–400
                          </span>
                        </div>
                        <p className="font-body text-xs text-[#7A6F64] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Menu Bottom Action Strip */}
        <div className="bg-[#1D1B18] text-[#FAF7F2] p-8 rounded-2xl border border-[#1D1B18] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="font-mono text-xs text-[#C8522A] font-bold uppercase tracking-widest">
              DAILY SPECIALS BOARD
            </span>
            <h3 className="font-display font-bold text-2xl text-[#FAF7F2]">
              Looking for today&apos;s rotating thali selection?
            </h3>
            <p className="font-body text-xs text-[#FAF7F2]/70">
              Call Sainik Hotel directly for daily specials and instant takeaway packages.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href={SAINIK_HOTEL_DATA.contact.phoneTel}
              className="bg-[#C8522A] hover:bg-[#B34520] text-[#FAF7F2] font-semibold text-xs px-6 py-3 rounded-md uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>CALL 088119 94491</span>
            </a>
            
            <a
              href={SAINIK_HOTEL_DATA.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAF7F2] hover:bg-[#EADBCE] text-[#1D1B18] font-semibold text-xs px-6 py-3 rounded-md uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <span>GOOGLE MAPS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
