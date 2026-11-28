"use client";

import { GOOGLE_REVIEWS, SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { Star, CheckCircle2, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#1D1B18]/10">
      
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Rating Hero Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#1D1B18]/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#C8522A] uppercase font-bold">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>GUEST EXPERIENCES</span>
            </div>
            <h2 className="font-display type-section font-bold text-[#1D1B18] tracking-tight">
              Customer Feedback
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-[#F3ECE0]/80 px-5 py-3 rounded-xl border border-[#1D1B18]/10 shrink-0">
            <div className="text-center pr-4 border-r border-[#1D1B18]/10">
              <span className="font-display text-3xl font-bold text-[#1D1B18] leading-none block">
                {SAINIK_HOTEL_DATA.metrics.rating}
              </span>
              <span className="text-[10px] font-mono font-bold text-[#7A6F64]">OUT OF 5</span>
            </div>
            <div>
              <div className="flex text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-mono text-xs font-bold text-[#1D1B18] uppercase">
                {SAINIK_HOTEL_DATA.metrics.reviewsCount} Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Refined Quote Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GOOGLE_REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-8 rounded-2xl bg-[#C8522A] border border-[#1D1B18]/10 flex flex-col justify-between space-y-6 hover:border-[#FAF7F2]/60 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-promo text-base text-[#FAF7F2] uppercase tracking-wider">
                    {rev.tag}
                  </span>
                </div>

                <p className="font-editorial type-quote italic text-[#FAF7F2]">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#FAF7F2]/25 flex items-center justify-between">
                <div>
                  <h3 className="font-body font-bold text-sm text-[#FAF7F2]">
                    {rev.author}
                  </h3>
                  <span className="font-mono text-[10px] text-[#FAF7F2]/75">
                    {rev.date} · Verified Google Diner
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-mono text-[#FAF7F2] font-bold bg-[#FAF7F2]/15 px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{rev.badge}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}