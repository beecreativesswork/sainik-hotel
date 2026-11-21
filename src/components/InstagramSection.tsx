"use client";

import Image from "next/image";
import { SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { ArrowUpRight, Heart, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import { motion } from "framer-motion";

export default function InstagramSection() {
  const instaPosts = [
    {
      src: "/images/hero_thali.png",
      likes: "1,240",
      comments: "84",
      tag: "#SainikThali"
    },
    {
      src: "/images/menu_sukka.png",
      likes: "950",
      comments: "42",
      tag: "#KolhapuriSukka"
    },
    {
      src: "/images/dining_rush.png",
      likes: "1,820",
      comments: "110",
      tag: "#ChikhaliVibes"
    },
    {
      src: "/images/menu_chinese.png",
      likes: "780",
      comments: "39",
      tag: "#WokFired"
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#1D1B18]/10">
      
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#1D1B18]/10 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#C8522A] uppercase font-bold">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>INSTAGRAM JOURNAL</span>
            </div>
            <h2 className="font-display type-section font-bold text-[#1D1B18] tracking-tight">
              Follow {SAINIK_HOTEL_DATA.contact.instagramHandle}
            </h2>
          </div>

          <a
            href={SAINIK_HOTEL_DATA.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1D1B18] hover:bg-[#C8522A] text-[#FAF7F2] font-semibold text-xs py-3.5 px-6 rounded-md uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 font-body shadow-xs shrink-0"
          >
            <span>VIEW ON INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Instagram Photo Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {instaPosts.map((post, idx) => (
            <motion.a
              key={idx}
              href={SAINIK_HOTEL_DATA.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group relative bg-[#F3ECE0]/50 p-2.5 rounded-2xl border border-[#1D1B18]/10 hover:border-[#C8522A]/40 transition-all shadow-xs overflow-hidden"
            >
              <div className="relative aspect-square w-full rounded-xl overflow-hidden">
                <Image
                  src={post.src}
                  alt={`Sainik Hotel Instagram post ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#1D1B18]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 font-mono text-xs font-bold text-[#FAF7F2]">
                  <div className="flex items-center gap-1.5 text-[#C8522A]">
                    <Heart className="w-4 h-4 fill-current" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between font-mono text-[11px] font-semibold text-[#7A6F64] px-1">
                <span>{post.tag}</span>
                <InstagramIcon className="w-3.5 h-3.5 text-[#C8522A]" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>

    </section>
  );
}
