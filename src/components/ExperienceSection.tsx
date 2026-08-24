"use client";

import Image from "next/image";
import { SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { Utensils, Sun, Truck, Users, HeartHandshake, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const highlights = [
    {
      title: "Affordable Meals",
      desc: "₹200–400 per person for a wholesome feast. Quality dining without breaking the bank.",
      icon: Utensils,
    },
    {
      title: "Generous Portions",
      desc: "Full Maharashtrian & North Indian plates crafted to satisfy serious appetites.",
      icon: HeartHandshake,
    },
    {
      title: "Outdoor Seating",
      desc: "Enjoy your dinner under warm lights in our roadside open-air dining section.",
      icon: Sun,
    },
    {
      title: "All You Can Eat",
      desc: "Generous thali refills of rassa, curry, bhakri & rice cooked with local warmth.",
      icon: Award,
    },
    {
      title: "Quick Delivery",
      desc: "Hot meal delivery available in Chikhali (7:00 PM – 8:30 PM shift).",
      icon: Truck,
    },
    {
      title: "Family Friendly",
      desc: "Welcoming seating arrangements for family gatherings, friends & local work crews.",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#1D1B18]/10">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Editorial Story Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hospitality Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#C8522A] uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8522A]" />
              <span>CHIKHALI · PIMPRI-CHINCHWAD</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1D1B18] tracking-tight leading-[1.15]">
              A place to eat well.
            </h2>

            <p className="font-body text-[#7A6F64] text-base leading-relaxed">
              From sizzling Kolhapuri thalis to late-night outdoor dining, Sainik Hotel brings you the rich culture of Pune roadside hotels without the premium price tag.
            </p>

            <p className="font-body text-[#7A6F64] text-base leading-relaxed">
              Sainik Hotel isn&apos;t just a place to eat; it&apos;s a Chikhali landmark where roadside Dhaba character meets generous Maharashtrian hospitality. Serving workers, travelers, and local families every single day.
            </p>

            <div className="pt-4 flex items-center gap-6 font-mono text-xs text-[#1D1B18]">
              <div className="border-l-2 border-[#C8522A] pl-4">
                <p className="font-bold uppercase tracking-wider text-[#C8522A]">AVG COST</p>
                <p className="text-sm text-[#1D1B18] font-bold">₹200–400 / Person</p>
              </div>
              <div className="border-l-2 border-[#2D4030] pl-4">
                <p className="font-bold uppercase tracking-wider text-[#2D4030]">RATING</p>
                <p className="text-sm text-[#1D1B18] font-bold">4.1 ★ (195+ Reviews)</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Existing Restaurant Photograph */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border border-[#1D1B18]/10 group">
              <Image
                src="/images/dining_rush.png"
                alt="Outdoor dining rush at Sainik Hotel Chikhali"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1B18]/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/90 backdrop-blur-xs p-3 rounded-lg border border-[#1D1B18]/10 text-xs font-mono text-[#1D1B18] flex items-center justify-between">
                <span className="font-semibold">Outdoor & Indoor Seating</span>
                <span className="text-[#C8522A] font-bold">Chikhali, MH</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Refined Features Grid */}
        <div className="pt-12 border-t border-[#1D1B18]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#F3ECE0]/60 border border-[#1D1B18]/08 hover:border-[#C8522A]/30 transition-colors space-y-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#C8522A]/10 text-[#C8522A] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#1D1B18]">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-[#7A6F64] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
