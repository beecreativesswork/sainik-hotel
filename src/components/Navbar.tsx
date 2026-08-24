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
    { name: "REVIEWS", href: "#reviews" },
    { name: "LOCATION", href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md py-3 border-b border-[#1D1B18]/10 shadow-xs"
          : "bg-[#FAF7F2]/80 backdrop-blur-xs py-4.5 border-b border-[#1D1B18]/08"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo / Typography */}
          <a
            href="#"
            className="group flex flex-col"
          >
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#1D1B18] group-hover:text-[#C8522A] transition-colors">
                SAINIK HOTEL
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-[#7A6F64] uppercase font-semibold -mt-1">
              CHIKHALI · PIMPRI-CHINCHWAD
            </span>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-widest text-[#1D1B18]/80 hover:text-[#C8522A] transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Section: Dynamic Status & Phone CTA */}
          <div className="hidden md:flex items-center gap-5">
            {/* Dynamic Open Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3ECE0] border border-[#1D1B18]/10 text-xs font-mono text-[#1D1B18]">
              <span
                className={`w-2 h-2 rounded-full ${
                  status.isOpen ? "bg-emerald-600 animate-pulse" : "bg-amber-600"
                }`}
              />
              <span className="font-semibold text-[11px] uppercase tracking-wider">{status.text}</span>
            </div>

            {/* Call Now Button */}
            <a
              href={SAINIK_HOTEL_DATA.contact.phoneTel}
              className="inline-flex items-center gap-2 bg-[#C8522A] text-[#FAF7F2] hover:bg-[#B34520] font-semibold text-xs px-5 py-2.5 rounded-md uppercase tracking-wider transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>CALL NOW</span>
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Small status dot for mobile */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#F3ECE0] border border-[#1D1B18]/10 text-[11px] font-mono rounded-full text-[#1D1B18]">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? "bg-emerald-600 animate-pulse" : "bg-amber-600"}`} />
              <span className="font-bold text-[10px]">{status.isOpen ? "OPEN" : "CLOSED"}</span>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1D1B18] hover:text-[#C8522A] transition-colors"
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
            className="md:hidden bg-[#FAF7F2] border-b border-[#1D1B18]/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-5">
              <div className="flex flex-col space-y-3 border-b border-[#1D1B18]/10 pb-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-semibold tracking-wider text-[#1D1B18] hover:text-[#C8522A] flex items-center justify-between py-1.5"
                  >
                    <span>{link.name}</span>
                    <span className="text-[#C8522A] text-sm">→</span>
                  </a>
                ))}
              </div>

              {/* Mobile Info Strip */}
              <div className="space-y-2 text-xs font-mono text-[#7A6F64]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C8522A]" />
                  <span>{status.text} · {status.subtext}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C8522A]" />
                  <span>Chikhali, Pimpri-Chinchwad (Thermax Chowk)</span>
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={SAINIK_HOTEL_DATA.contact.phoneTel}
                  className="w-full text-center bg-[#C8522A] text-[#FAF7F2] font-semibold text-xs py-3 uppercase tracking-wider rounded-md flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>CALL</span>
                </a>
                <a
                  href={SAINIK_HOTEL_DATA.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#F3ECE0] text-[#1D1B18] border border-[#1D1B18]/15 font-semibold text-xs py-3 uppercase tracking-wider rounded-md flex items-center justify-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5" />
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
