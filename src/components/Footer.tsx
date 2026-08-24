"use client";

import { SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { Phone, MapPin, Globe, Heart, ArrowUp } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#121110] text-[#F5EFE4] pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative bg-grain overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b-2 border-dashed border-[#F5EFE4]/20">
          
          {/* Brand Info & Address */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#FF5722] text-[#121110] font-extrabold px-4 py-1.5 text-2xl tracking-tighter border-2 border-[#F5EFE4] shadow-[3px_3px_0px_#F5EFE4] transform -rotate-1">
                SAINIK
              </div>
              <span className="font-extrabold text-2xl tracking-widest text-[#F5EFE4] uppercase font-display">
                HOTEL
              </span>
            </div>

            <p className="font-mono text-sm text-[#F5EFE4]/70 max-w-md leading-relaxed">
              Legendary roadside hotel dining in Chikhali, Pimpri-Chinchwad. Serving hearty Maharashtrian thalis, Kolhapuri sukka, North Indian & Chinese delicacies with honest pricing.
            </p>

            {/* Contact details */}
            <div className="space-y-3 font-mono text-xs text-[#F5EFE4]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5722] shrink-0 mt-0.5" />
                <span>{SAINIK_HOTEL_DATA.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF5722] shrink-0" />
                <a href={SAINIK_HOTEL_DATA.contact.phoneTel} className="hover:text-[#FF5722] font-bold">
                  {SAINIK_HOTEL_DATA.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#FF5722] shrink-0" />
                <a
                  href={SAINIK_HOTEL_DATA.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5722]"
                >
                  {SAINIK_HOTEL_DATA.contact.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs font-bold text-[#FF5722] uppercase tracking-widest block">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2 font-mono text-sm font-bold">
              <li>
                <a href="#menu" className="hover:text-[#FF5722] transition-colors">
                  ➔ MENU & DISHES
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FF5722] transition-colors">
                  ➔ ABOUT SAINIK HOTEL
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#FF5722] transition-colors">
                  ➔ THE EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#FF5722] transition-colors">
                  ➔ CHIKHALI LOCATION
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FF5722] transition-colors">
                  ➔ GOOGLE REVIEWS (4.1 ★)
                </a>
              </li>
            </ul>
          </div>

          {/* Service & Rating Summary */}
          <div className="lg:col-span-3 space-y-4 bg-[#1C1A17] p-6 border-2 border-[#F5EFE4]/20">
            <span className="font-mono text-xs font-bold text-[#FF5722] uppercase tracking-widest block">
              SERVICE DETAILS
            </span>
            <div className="space-y-2 font-mono text-xs text-[#F5EFE4]/80">
              <p>• Cost: ₹200–400 per person</p>
              <p>• Rating: 4.1 ★ (195+ Reviews)</p>
              <p>• All You Can Eat Thalis</p>
              <p>• Outdoor Seating & Delivery</p>
              <p>• Landmark: Thermax Chowk</p>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-4 w-full bg-[#FF5722] text-[#121110] font-black text-xs py-2 uppercase tracking-wider border border-[#F5EFE4] flex items-center justify-center gap-2 font-display hover:bg-[#F5EFE4] transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Mega Backdrop Typography */}
        <div className="py-8 text-center select-none overflow-hidden">
          <h1 className="font-extrabold text-[15vw] uppercase font-display text-[#F5EFE4]/10 leading-none tracking-tighter">
            SAINIK HOTEL
          </h1>
        </div>

        {/* Bottom Decorative Slogan & Copyright */}
        <div className="pt-6 border-t border-[#F5EFE4]/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#F5EFE4]/60">
          <p>© {new Date().getFullYear()} SAINIK HOTEL. ALL RIGHTS RESERVED. CHIKHALI, PIMPRI-CHINCHWAD.</p>
          <div className="bg-[#FF5722] text-[#121110] px-3 py-1 font-black text-[11px] uppercase tracking-widest border border-[#F5EFE4]">
            GOOD FOOD. GOOD PEOPLE. GOOD TIMES.
          </div>
        </div>

      </div>

    </footer>
  );
}
