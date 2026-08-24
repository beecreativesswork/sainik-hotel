"use client";

import Image from "next/image";
import { Camera, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function PhotoCollage() {
  const photos = [
    {
      src: "/images/hero_thali.png",
      alt: "Sainik Hotel Signature Thali Platter",
      caption: "SIGNATURE THALI",
      location: "CHIKHALI",
      colSpan: "lg:col-span-8",
      aspect: "aspect-[16/10]",
      rotate: "-rotate-1",
      border: "border-[#FF5722]"
    },
    {
      src: "/images/menu_sukka.png",
      alt: "Kolhapuri Chicken Sukka & Bhakri",
      caption: "HOT & FRESH",
      location: "KOLHAPURI SPICE",
      colSpan: "lg:col-span-4",
      aspect: "aspect-[4/3]",
      rotate: "rotate-2",
      border: "border-[#F5EFE4]"
    },
    {
      src: "/images/dining_rush.png",
      alt: "Outdoor dining rush at Sainik Hotel",
      caption: "LUNCH RUSH",
      location: "OUTDOOR SEATING",
      colSpan: "lg:col-span-5",
      aspect: "aspect-[4/3]",
      rotate: "-rotate-2",
      border: "border-[#C62828]"
    },
    {
      src: "/images/menu_chinese.png",
      alt: "Wok Fired Hakka Noodles and Paneer Chilli",
      caption: "TABLE FOR FOUR",
      location: "CHINESE SPECIALS",
      colSpan: "lg:col-span-7",
      aspect: "aspect-[16/9]",
      rotate: "rotate-1",
      border: "border-[#FF5722]"
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121110] relative bg-grain border-b-4 border-[#F5EFE4]">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b-2 border-dashed border-[#F5EFE4]/20 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#FF5722] tracking-widest uppercase">
              <Camera className="w-4 h-4" />
              <span>SNAP SHOTS FROM THE HOTEL</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-extrabold uppercase font-display tracking-tight text-[#F5EFE4]">
              LIFE AT <span className="text-[#FF5722]">SAINIK</span>
            </h2>
          </div>

          <p className="font-mono text-sm text-[#F5EFE4]/70 max-w-sm">
            Real food, real atmosphere, and daily moments captured right at our Chikhali restaurant.
          </p>
        </div>

        {/* Asymmetrical Overlapping Photo Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {photos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`${item.colSpan} relative bg-[#1C1A17] p-3 border-4 ${item.border} shadow-[10px_10px_0px_#121110] hover:shadow-[14px_14px_0px_#FF5722] hover:-translate-y-1 transition-all duration-300 transform ${item.rotate} group`}
            >
              <div className={`relative ${item.aspect} w-full overflow-hidden border-2 border-[#F5EFE4]/20`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </div>

              {/* Caption Stamp Badges */}
              <div className="mt-3 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider">
                <span className="bg-[#FF5722] text-[#121110] px-3 py-1 border border-[#121110]">
                  {item.caption}
                </span>
                <span className="text-[#F5EFE4]/70">
                  {item.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
