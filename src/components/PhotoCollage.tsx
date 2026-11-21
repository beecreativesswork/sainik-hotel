"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";

export default function PhotoCollage() {
  const photos = [
    {
      src: "/images/hero_thali.jpg",
      alt: "Sainik Hotel Signature Thali Platter",
      caption: "SIGNATURE THALI",
      location: "CHIKHALI",
      colSpan: "lg:col-span-7",
      aspect: "aspect-[16/10]",
    },
    {
      src: "/images/menu_sukka.jpg",
      alt: "Kolhapuri Chicken Sukka & Bhakri",
      caption: "HOT & FRESH",
      location: "KOLHAPURI SPICE",
      colSpan: "lg:col-span-5",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/images/dining_rush.jpg",
      alt: "Outdoor dining rush at Sainik Hotel",
      caption: "OUTDOOR DINING",
      location: "CHIKHALI ATMOSPHERE",
      colSpan: "lg:col-span-5",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/images/menu_chinese.jpg",
      alt: "Wok Fired Hakka Noodles and Paneer Chilli",
      caption: "CHINESE SPECIALS",
      location: "WOK SELECTION",
      colSpan: "lg:col-span-7",
      aspect: "aspect-[16/9]",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#1D1B18]/10">
      
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#1D1B18]/10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#C8522A] uppercase font-bold">
              <Camera className="w-3.5 h-3.5" />
              <span>VISUAL GALLERY</span>
            </div>
            <h2 className="font-display type-section font-bold text-[#1D1B18] tracking-tight">
              Life at Sainik
            </h2>
          </div>

          <p className="font-body text-sm text-[#7A6F64] max-w-sm">
            Real food, real atmosphere, and daily moments captured at our restaurant.
          </p>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {photos.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${item.colSpan} group relative bg-[#F3ECE0]/60 p-3 rounded-2xl border border-[#1D1B18]/10 hover:border-[#C8522A]/40 transition-all shadow-xs`}
            >
              <div className={`relative ${item.aspect} w-full rounded-xl overflow-hidden`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1B18]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[#FAF7F2]">
                  <span className="bg-[#C8522A] px-3 py-1 rounded-md font-promo text-sm uppercase tracking-wider">
                    {item.caption}
                  </span>
                  <span className="text-white/80 text-[11px] font-semibold">
                    {item.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
