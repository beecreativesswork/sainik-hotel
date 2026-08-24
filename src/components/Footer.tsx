"use client";

import { SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { Phone, MapPin, ArrowUp } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1D1B18] text-[#FAF7F2] pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#FAF7F2]/10">
      
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#FAF7F2]/10">
          
          {/* Brand Info & Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#C8522A] uppercase tracking-widest block font-bold">
                ESTABLISHED LOCAL DINER
              </span>
              <h3 className="font-display font-bold text-2xl tracking-wide uppercase text-[#FAF7F2]">
                Sainik Hotel
              </h3>
            </div>

            <p className="font-body text-xs text-[#A89F91] leading-relaxed max-w-sm">
              Legendary hospitality in Chikhali, Pimpri-Chinchwad. Serving authentic Kolhapuri thalis, Sukka, North Indian curry, and Chinese stir-fries.
            </p>

            {/* Contact details */}
            <div className="space-y-2.5 font-body text-xs text-[#FAF7F2]/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8522A] shrink-0 mt-0.5" />
                <span className="text-[#A89F91]">{SAINIK_HOTEL_DATA.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8522A] shrink-0" />
                <a href={SAINIK_HOTEL_DATA.contact.phoneTel} className="hover:text-[#C8522A] transition-colors font-semibold">
                  {SAINIK_HOTEL_DATA.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#C8522A] shrink-0" />
                <a
                  href={SAINIK_HOTEL_DATA.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8522A] transition-colors"
                >
                  {SAINIK_HOTEL_DATA.contact.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-[11px] font-bold text-[#C8522A] uppercase tracking-widest block">
              NAVIGATION
            </span>
            <ul className="space-y-2 font-body text-xs text-[#A89F91]">
              <li>
                <a href="#menu" className="hover:text-[#FAF7F2] transition-colors">
                  Full Restaurant Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF7F2] transition-colors">
                  Our Culinary Story
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#FAF7F2] transition-colors">
                  Chikhali Location & Map
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FAF7F2] transition-colors">
                  Verified Google Reviews (4.1 ★)
                </a>
              </li>
            </ul>
          </div>

          {/* Service & Rating Summary */}
          <div className="lg:col-span-4 space-y-4 bg-[#262320] p-6 rounded-xl border border-[#FAF7F2]/10">
            <span className="font-mono text-[11px] font-bold text-[#C8522A] uppercase tracking-widest block">
              BUSINESS INFO
            </span>
            <div className="space-y-2 font-body text-xs text-[#A89F91]">
              <p>• Cost: ₹200–400 per person</p>
              <p>• Google Rating: 4.1 ★ (195+ Diner Reviews)</p>
              <p>• Lunch: 11:00 AM – 4:00 PM | Dinner: 7:00 PM – 11:00 PM</p>
              <p>• Outdoor Seating & Takeaway Available</p>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-4 w-full bg-[#C8522A] hover:bg-[#B34520] text-[#FAF7F2] font-semibold text-xs py-2.5 rounded-md uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 font-body"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Mega Watermark Typography */}
        <div className="py-4 text-center select-none overflow-hidden">
          <h1 className="font-display text-[12vw] font-bold uppercase text-[#FAF7F2]/05 leading-none tracking-tight">
            SAINIK HOTEL
          </h1>
        </div>

        {/* Bottom Rights & Slogan */}
        <div className="pt-6 border-t border-[#FAF7F2]/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A89F91]">
          <p>© {new Date().getFullYear()} SAINIK HOTEL. ALL RIGHTS RESERVED. CHIKHALI, PIMPRI-CHINCHWAD.</p>
          <span className="text-[#C8522A] font-semibold uppercase tracking-wider text-[11px]">
            HOMESTYLE HOSPITALITY SINCE DAY ONE
          </span>
        </div>

      </div>

    </footer>
  );
}
