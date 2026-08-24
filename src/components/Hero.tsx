"use client";

import Image from "next/image";
import { SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { Star, MapPin, ArrowRight, Utensils } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] overflow-hidden border-b border-[#1D1B18]/10">
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT: Typography & Calls to Action (~45% on desktop -> col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#C8522A] uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8522A]" />
              <span>SAINIK HOTEL · CHIKHALI</span>
            </div>

            {/* Large Editorial Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1D1B18] tracking-tight leading-[1.1]">
              Good food, <br />
              <span className="italic font-normal text-[#C8522A]">close to home.</span>
            </h1>

            {/* Existing Subtitle / Description */}
            <p className="font-body text-sm sm:text-base text-[#7A6F64] leading-relaxed max-w-lg">
              {SAINIK_HOTEL_DATA.subTagline}. Hearty Maharashtrian thalis, Kolhapuri sukka, and road-side dhaba favorites prepared fresh every day.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#menu"
                className="bg-[#C8522A] hover:bg-[#B34520] text-[#FAF7F2] font-semibold text-sm px-7 py-3.5 rounded-md uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2.5 shadow-sm font-body"
              >
                <span>VIEW MENU</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={SAINIK_HOTEL_DATA.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F3ECE0] hover:bg-[#EADBCE] text-[#1D1B18] border border-[#1D1B18]/15 font-semibold text-sm px-7 py-3.5 rounded-md uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 font-body"
              >
                <MapPin className="w-4 h-4 text-[#C8522A]" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>

            {/* Supporting Information Badges */}
            <div className="pt-6 border-t border-[#1D1B18]/10 flex flex-wrap items-center gap-6 text-xs font-mono text-[#7A6F64]">
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#C8522A]" />
                <span className="font-semibold text-[#1D1B18]">{SAINIK_HOTEL_DATA.metrics.priceRange}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C8522A]" />
                <span>Near Thermax Chowk</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Photography & Floating Rating Element (~55% on desktop -> col-span-7) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-[#1D1B18]/10 group">
              <Image
                src="/images/hero_thali.png"
                alt="Authentic Sainik Hotel Thali Platter in Chikhali"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1B18]/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Subtle Floating Information Overlay */}
            <div className="absolute -bottom-5 right-6 sm:bottom-6 sm:right-6 bg-[#FAF7F2]/95 backdrop-blur-md p-4 rounded-xl border border-[#1D1B18]/15 shadow-lg flex items-center gap-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#C8522A] text-[#FAF7F2] font-bold text-lg font-display">
                4.1
              </div>
              <div>
                <div className="flex text-amber-500 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="font-mono text-xs font-bold text-[#1D1B18] uppercase tracking-wider">
                  {SAINIK_HOTEL_DATA.metrics.reviewsCount} Google Reviews
                </p>
                <p className="text-[11px] text-[#7A6F64] font-body">Verified Local Favorite in Chikhali</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
}
