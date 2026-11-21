"use client";

import { useState } from "react";
import Image from "next/image";
import { MENU_ITEMS, SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { Phone, UtensilsCrossed, ExternalLink } from "lucide-react";
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

  // Preserve the menu's category order while applying the active filter.
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
      
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Editorial Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#C8522A] uppercase font-bold">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>AUTHENTIC CUISINE</span>
          </div>
          <h2 className="font-display type-section font-bold text-[#1D1B18] tracking-tight">
            The Restaurant Menu
          </h2>
          <p className="font-body text-sm text-[#7A6F64]">
            Generous portions, authentic spices, and home-style thalis prepared hot every day.
          </p>
        </div>

        {/* Category Navigation Bar (Sticky / Horizontal Scroll) */}
        <div className="sticky top-16 z-30 bg-[#F4EFE6]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:mx-0 sm:px-0 border-y border-[#1D1B18]/10 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-start sm:justify-center min-w-max gap-2 sm:gap-3 mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={activeCategory === cat.id}
                className={`font-body text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider transition-all ${
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {featuredItems.slice(0, 2).map((item) => (
                <article key={item.id} className="group bg-[#FAF7F2] rounded-2xl border border-[#1D1B18]/10 shadow-sm overflow-hidden">
                  <div className="relative aspect-[12/5] w-full overflow-hidden">
                    <Image
                      src={item.image!}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-3 sm:p-4 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        {item.tag && (
                          <span className="font-body text-[10px] font-semibold text-[#C8522A] uppercase tracking-wider">
                            {item.tag}
                          </span>
                        )}
                        <h3 className="font-body font-bold text-base sm:text-lg text-[#1D1B18] leading-snug group-hover:text-[#C8522A] transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <span className="font-body text-xs font-semibold text-[#C8522A] bg-[#F3ECE0] px-2.5 py-1 rounded-md whitespace-nowrap">
                        ₹200–400
                      </span>
                    </div>
                    <p className="font-body text-sm text-[#7A6F64] leading-relaxed">
                      {item.description}
                    </p>
                    <a
                      href={SAINIK_HOTEL_DATA.contact.phoneTel}
                      className="inline-flex items-center gap-1 font-body text-xs font-bold text-[#1D1B18] hover:text-[#C8522A] transition-colors"
                    >
                      ORDER <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Grouped Menu Categories */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FAF7F2] rounded-2xl border border-[#1D1B18]/10 shadow-sm divide-y divide-[#1D1B18]/15 overflow-hidden"
          >
            {groupedCategories.map((catKey) => {
              const catItems = filteredItems.filter((i) => i.category === catKey);
              if (catItems.length === 0) return null;

              return (
                <section key={catKey} className="px-6 py-7 sm:px-12 sm:py-9">
                  {/* Category Header */}
                  <div className="pb-4 border-b border-[#1D1B18]/15 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1D1B18] tracking-tight">
                      {categoryLabels[catKey] || catKey}
                    </h3>
                    <span className="font-body text-[11px] sm:text-xs text-[#7A6F64] font-semibold uppercase tracking-wider">
                      Fresh preparation
                    </span>
                  </div>

                  <div className="mt-4 divide-y divide-[#1D1B18]/15">
                    {catItems.map((item) => (
                      <article key={item.id} className="group py-5 first:pt-5 last:pb-0">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                          <div className="min-w-0">
                            <h4 className="font-body font-semibold text-lg sm:text-xl text-[#1D1B18] leading-snug group-hover:text-[#C8522A] transition-colors">
                              {item.name}
                            </h4>
                            {item.tag && (
                              <span className="inline-flex mt-2 font-body text-[10px] sm:text-[11px] font-semibold text-[#C8522A] bg-[#C8522A]/10 px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <span className="font-body shrink-0 self-start sm:self-auto text-sm sm:text-base font-semibold text-[#1D1B18] bg-[#F3ECE0] px-3 py-1.5 rounded-md whitespace-nowrap">
                            ₹200–400
                          </span>
                        </div>
                        <p className="font-body mt-2 text-sm sm:text-base text-[#7A6F64] leading-relaxed">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
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
