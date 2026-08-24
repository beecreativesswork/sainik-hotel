"use client";

import { GOOGLE_REVIEWS, SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { Star, Quote, CheckCircle2, MessageSquare, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ReviewsSection() {
  const cardRotations = ["rotate-1", "-rotate-2", "rotate-2", "-rotate-1"];

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1C1A17] relative bg-grain border-b-4 border-[#FF5722]">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Rating Hero Metric Bar */}
        <div className="bg-[#121110] border-4 border-[#F5EFE4] p-8 shadow-[10px_10px_0px_#FF5722] mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-6 flex-wrap justify-center lg:justify-start">
            <div className="bg-[#FF5722] text-[#121110] p-4 border-2 border-[#F5EFE4] shadow-[4px_4px_0px_#F5EFE4] text-center">
              <span className="text-5xl font-extrabold font-display leading-none block">
                {SAINIK_HOTEL_DATA.metrics.rating}
              </span>
              <span className="text-xs font-mono font-black uppercase">OUT OF 5</span>
            </div>

            <div>
              <div className="flex text-[#F59E0B] mb-2 justify-center lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current stroke-[1.5]" />
                ))}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-[#F5EFE4]">
                {SAINIK_HOTEL_DATA.metrics.reviewsCount} GOOGLE REVIEWS
              </h2>
              <p className="font-mono text-xs text-[#F5EFE4]/70 mt-1">
                AUTHENTIC FEEDBACK FROM REAL LOCAL DINERS IN CHIKHALI
              </p>
            </div>
          </div>

          {/* Badge Sticker */}
          <div className="bg-[#C62828] text-[#F5EFE4] px-6 py-3 border-2 border-[#F5EFE4] shadow-[4px_4px_0px_#F5EFE4] font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2 transform -rotate-1 shrink-0">
            <CheckCircle2 className="w-5 h-5 text-[#F5EFE4]" />
            <span>VERIFIED LOCAL FAVORITE</span>
          </div>

        </div>

        {/* Postcard Review Wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GOOGLE_REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 bg-[#121110] border-3 border-[#F5EFE4] shadow-[8px_8px_0px_#FF5722] hover:shadow-[12px_12px_0px_#FF5722] hover:-translate-y-1 transition-all duration-300 transform ${cardRotations[idx % cardRotations.length]} flex flex-col justify-between`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#F5EFE4]/15 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#FF5722] text-[#121110] font-black font-display text-sm flex items-center justify-center border border-[#F5EFE4]">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-extrabold font-display text-base uppercase text-[#F5EFE4]">
                        {rev.author}
                      </h3>
                      <span className="font-mono text-[10px] text-[#F5EFE4]/60 block">
                        {rev.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex text-[#F59E0B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#FF5722]/30 absolute -top-2 -left-2 rotate-180" />
                  <p className="font-mono text-sm text-[#F5EFE4] leading-relaxed relative z-10 pl-4 italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>
              </div>

              {/* Review Card Footer Tag */}
              <div className="pt-3 border-t border-[#F5EFE4]/15 flex items-center justify-between text-xs font-mono">
                <span className="text-[#FF5722] font-bold bg-[#FF5722]/10 px-2.5 py-0.5 border border-[#FF5722]/30">
                  {rev.tag}
                </span>
                <span className="text-[#F5EFE4]/60 flex items-center gap-1 text-[11px]">
                  <ThumbsUp className="w-3.5 h-3.5 text-[#FF5722]" />
                  {rev.badge}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
