"use client";

import Image from "next/image";
import { SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { trackMenuVisit, trackPhoneClick } from "@/lib/analytics";
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand Info & Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#C8522A] uppercase tracking-widest block font-bold">
                ESTABLISHED LOCAL DINER
              </span>
              <div className="flex w-fit flex-col items-center gap-1">
                <Image
                  src="/images/sainik-soldier-mark.png"
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain brightness-0 invert"
                />
                <h3 lang="mr" className="font-logo-native font-bold text-2xl text-[#FAF7F2]">
                  सैनिक हॉटेल
                </h3>
              </div>
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
                <a
                  href={SAINIK_HOTEL_DATA.contact.phoneTel}
                  onClick={trackPhoneClick}
                  className="hover:text-[#C8522A] transition-colors font-semibold"
                >
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
                <a
                  href="#menu"
                  onClick={trackMenuVisit}
                  className="hover:text-[#FAF7F2] transition-colors"
                >
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

        {/* Bottom Rights & Slogan */}
        <div className="pt-6 border-t border-[#FAF7F2]/10">
          <div className="grid grid-cols-1 items-center gap-3 font-body text-[11px] text-[#A89F91] xl:grid-cols-3">
            <p className="order-2 text-center leading-4 tracking-normal xl:order-1 xl:text-left">
              <span className="block xl:inline">
                © {new Date().getFullYear()} SAINIK HOTEL. ALL RIGHTS RESERVED.
              </span>{" "}
              <span className="block xl:inline">CHIKHALI, PIMPRI-CHINCHWAD.</span>
            </p>
            <span className="order-1 text-center text-[#C8522A] font-semibold uppercase tracking-wider xl:order-2">
              HOMESTYLE HOSPITALITY SINCE DAY ONE
            </span>
            <p className="order-3 text-center text-[#A89F91] xl:text-right">
              Developed by <span className="italic text-[#FAF7F2]">BeeCreativess</span>
            </p>
          </div>
        </div>

      </div>

    </footer>
  );
}
