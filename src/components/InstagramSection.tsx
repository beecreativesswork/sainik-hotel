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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121110] relative bg-grain border-b-4 border-[#FF5722]">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b-2 border-dashed border-[#F5EFE4]/20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#FF5722] tracking-widest uppercase">
              <InstagramIcon className="w-4 h-4" />
              <span>OFFICIAL SOCIAL CHANNEL</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-extrabold uppercase font-display tracking-tight text-[#F5EFE4]">
              FOLLOW THE <span className="text-[#FF5722]">HOTEL</span>
            </h2>
            <span className="font-mono text-lg font-black text-[#FF5722] block mt-1">
              {SAINIK_HOTEL_DATA.contact.instagramHandle}
            </span>
          </div>

          <a
            href={SAINIK_HOTEL_DATA.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF5722] text-[#121110] font-black text-sm px-6 py-3.5 uppercase tracking-wider border-2 border-[#F5EFE4] shadow-[4px_4px_0px_#F5EFE4] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 font-display shrink-0"
          >
            <span>FOLLOW ON INSTAGRAM →</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Instagram Photo Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {instaPosts.map((post, idx) => (
            <motion.a
              key={idx}
              href={SAINIK_HOTEL_DATA.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#1C1A17] p-2 border-3 border-[#F5EFE4] shadow-[6px_6px_0px_#FF5722] hover:shadow-[10px_10px_0px_#FF5722] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-square w-full overflow-hidden border border-[#F5EFE4]/20">
                <Image
                  src={post.src}
                  alt={`Sainik Hotel Instagram post ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Hover Overlay with Likes/Comments */}
                <div className="absolute inset-0 bg-[#121110]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 font-mono text-sm font-bold text-[#F5EFE4]">
                  <div className="flex items-center gap-1.5 text-[#FF5722]">
                    <Heart className="w-5 h-5 fill-current" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between font-mono text-[11px] font-bold text-[#F5EFE4]/70 px-1">
                <span>{post.tag}</span>
                <InstagramIcon className="w-3.5 h-3.5 text-[#FF5722]" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>

    </section>
  );
}
