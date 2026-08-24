"use client";

import { useState, useEffect } from "react";
import { SAINIK_HOTEL_DATA, getLiveOperationalStatus } from "@/data/hotelData";
import { Phone, Menu as MenuIcon, X, Clock, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [status, setStatus] = useState({ isOpen: true, text: "OPEN NOW", subtext: "Serving Today" });

  useEffect(() => {
    setStatus(getLiveOperationalStatus());
    const interval = setInterval(() => {
      setStatus(getLiveOperationalStatus());
    }, 60000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "MENU", href: "#menu" },
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "LOCATION", href: "#location" },
    { name: "REVIEWS", href: "#reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#121110]/95 backdrop-blur-md py-3 border-b border-[#F5EFE4]/15 shadow-xl"
          : "bg-[#121110]/80 backdrop-blur-sm py-4 border-b border-[#F5EFE4]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Typography */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-transform duration-200 hover:scale-105"
          >
            <div className="bg-[#FF5722] text-[#121110] font-extrabold px-3 py-1 text-xl sm:text-2xl tracking-tighter border-2 border-[#F5EFE4] shadow-[3px_3px_0px_#F5EFE4] transform -rotate-1 group-hover:rotate-0 transition-transform">
              SAINIK
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-widest text-[#F5EFE4] uppercase leading-none font-display">
                HOTEL
              </span>
              <span className="text-[10px] tracking-widest text-[#FF5722] font-mono font-bold uppercase mt-0.5">
                CHIKHALI • PUNE
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold tracking-widest text-[#F5EFE4]/80 hover:text-[#FF5722] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF5722] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Section: Status Indicator & Phone CTA */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Dynamic Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1A17] border border-[#F5EFE4]/20 text-xs font-mono">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  status.isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                }`}
              />
              <span className="font-bold text-[#F5EFE4] uppercase">{status.text}</span>
            </div>

            {/* Call Now Button */}
            <a
              href={SAINIK_HOTEL_DATA.contact.phoneTel}
              className="group relative inline-flex items-center gap-2 bg-[#FF5722] text-[#121110] font-black text-sm px-5 py-2.5 uppercase tracking-wider border-2 border-[#F5EFE4] shadow-[3px_3px_0px_#F5EFE4] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#F5EFE4] transition-all"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>CALL NOW</span>
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Small status dot for mobile */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#1C1A17] border border-[#F5EFE4]/20 text-[11px] font-mono rounded-full">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`} />
              <span className="font-bold">{status.isOpen ? "OPEN" : "CLOSED"}</span>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-[#1C1A17] text-[#F5EFE4] border-2 border-[#F5EFE4] shadow-[2px_2px_0px_#FF5722] active:translate-x-0.5"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#161412] border-b-4 border-[#FF5722] overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="flex flex-col space-y-4 border-b border-[#F5EFE4]/15 pb-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-black tracking-wider text-[#F5EFE4] hover:text-[#FF5722] flex items-center justify-between py-1"
                  >
                    <span>{link.name}</span>
                    <span className="text-[#FF5722] font-mono text-sm">→</span>
                  </a>
                ))}
              </div>

              {/* Mobile Info Strip */}
              <div className="space-y-4 text-sm font-mono text-[#F5EFE4]/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF5722]" />
                  <span>{status.text} • {status.subtext}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF5722]" />
                  <span>Chikhali, Pimpri-Chinchwad (Thermax Chowk)</span>
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={SAINIK_HOTEL_DATA.contact.phoneTel}
                  className="w-full text-center bg-[#FF5722] text-[#121110] font-extrabold text-sm py-3 uppercase border-2 border-[#F5EFE4] shadow-[3px_3px_0px_#F5EFE4] flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>CALL</span>
                </a>
                <a
                  href={SAINIK_HOTEL_DATA.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#1C1A17] text-[#F5EFE4] font-extrabold text-sm py-3 uppercase border-2 border-[#F5EFE4] shadow-[3px_3px_0px_#FF5722] flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>DIRECTIONS</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
