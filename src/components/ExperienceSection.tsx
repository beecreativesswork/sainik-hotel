"use client";

import Image from "next/image";
import { SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { Utensils, Sun, Truck, Users, Clock, Award, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const highlights = [
    {
      title: "AFFORDABLE MEALS",
      desc: "₹200–400 per person for a wholesome feast. Quality dining without breaking the bank.",
      icon: Utensils,
      color: "bg-[#FF5722]",
    },
    {
      title: "GENEROUS PORTIONS",
      desc: "Full Maharashtrian & North Indian plates crafted to satisfy serious appetites.",
      icon: HeartHandshake,
      color: "bg-[#C62828]",
    },
    {
      title: "OUTDOOR SEATING",
      desc: "Enjoy your dinner under warm lights in our roadside open-air dining section.",
      icon: Sun,
      color: "bg-[#E65100]",
    },
    {
      title: "ALL YOU CAN EAT",
      desc: "Generous thali refills of rassa, curry, bhakri & rice cooked with local warmth.",
      icon: Award,
      color: "bg-[#D4AF37]",
    },
    {
      title: "QUICK DELIVERY",
      desc: "Hot meal delivery available in Chikhali (7:00 PM – 8:30 PM shift).",
      icon: Truck,
      color: "bg-[#1B4332]",
    },
    {
      title: "FAMILY FRIENDLY",
      desc: "Welcoming seating arrangements for family gatherings, friends & local work crews.",
      icon: Users,
      color: "bg-[#1C1A17]",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1C1A17] relative bg-halftone border-b-4 border-[#FF5722] overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Main Display Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="bg-[#FF5722] text-[#121110] font-mono font-black text-xs sm:text-sm px-4 py-1.5 uppercase tracking-widest border border-[#F5EFE4] shadow-[3px_3px_0px_#F5EFE4] inline-block mb-4 transform -rotate-1">
            THE SAINIK HOTEL EXPERIENCE
          </span>
          <h2 className="text-5xl sm:text-7xl font-extrabold uppercase font-display tracking-tight text-[#F5EFE4] leading-tight">
            COME HUNGRY. <br />
            <span className="text-[#FF5722] underline decoration-wavy decoration-[#C62828]">LEAVE HAPPY.</span>
          </h2>
          <p className="font-mono text-base text-[#F5EFE4]/80 mt-4 max-w-2xl mx-auto">
            Sainik Hotel isn&apos;t just a place to eat; it&apos;s a Chikhali landmark where roadside Dhaba character meets generous Maharashtrian hospitality.
          </p>
        </div>

        {/* Asymmetric Overlapping Photo Collage Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Collage Image 1: Outdoor Dining Rush */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative p-3 bg-[#121110] border-4 border-[#F5EFE4] shadow-[10px_10px_0px_#FF5722] group"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/dining_rush.png"
                alt="Outdoor dining rush at Sainik Hotel Chikhali"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Stamp Sticker */}
            <div className="absolute -bottom-5 -right-5 bg-[#FF5722] text-[#121110] font-display font-black text-sm px-4 py-2 uppercase tracking-widest border-2 border-[#F5EFE4] shadow-[4px_4px_0px_#121110] transform rotate-3">
              OUTDOOR SEATING VIBES
            </div>
          </motion.div>

          {/* Collage Image 2: Hotel Exterior Signboard */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative p-3 bg-[#121110] border-4 border-[#F5EFE4] shadow-[10px_10px_0px_#C62828] group"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/hotel_exterior.png"
                alt="Sainik Hotel exterior glowing signboard in Chikhali"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-transparent to-transparent" />
            </div>

            {/* Corner Badge */}
            <div className="absolute top-6 left-6 bg-[#121110] text-[#F5EFE4] font-mono text-xs font-bold px-3 py-1 border border-[#F5EFE4]/40">
              LOCATED IN MHETRE WADI
            </div>
          </motion.div>

        </div>

        {/* Highlights Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#121110] border-2 border-[#F5EFE4]/25 hover:border-[#FF5722] shadow-[5px_5px_0px_rgba(245,239,228,0.1)] hover:shadow-[6px_6px_0px_#FF5722] transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 ${item.color} text-[#121110] font-black border border-[#F5EFE4] shadow-[2px_2px_0px_#F5EFE4]`}>
                    <Icon className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h3 className="text-xl font-extrabold font-display uppercase tracking-tight text-[#F5EFE4] group-hover:text-[#FF5722] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="font-mono text-xs text-[#F5EFE4]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
