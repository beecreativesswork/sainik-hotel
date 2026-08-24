"use client";

import { SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { MapPin, Navigation, Compass, ExternalLink, Phone, Building2 } from "lucide-react";

export default function LocalSection() {
  return (
    <section id="location" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#1D1B18]/10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1D1B18]/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#C8522A] uppercase font-bold">
              <MapPin className="w-3.5 h-3.5" />
              <span>LOCATION & DIRECTIONS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1D1B18] tracking-tight">
              Find Sainik Hotel
            </h2>
          </div>
          <p className="font-body text-sm text-[#7A6F64] max-w-md">
            Conveniently located near Thermax Chowk in Chikhali, serving local industrial workers, families, and travelers.
          </p>
        </div>

        {/* 2 Column Editorial Map & Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Location Details & Landmarks */}
          <div className="lg:col-span-5 space-y-8 bg-[#F3ECE0]/70 p-8 rounded-2xl border border-[#1D1B18]/10">
            
            {/* Full Address */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] font-bold text-[#C8522A] uppercase tracking-widest">STREET ADDRESS</span>
              <h3 className="font-display font-bold text-xl text-[#1D1B18]">
                {SAINIK_HOTEL_DATA.address.line1}
              </h3>
              <p className="font-body text-xs text-[#7A6F64] leading-relaxed">
                {SAINIK_HOTEL_DATA.address.line2}, {SAINIK_HOTEL_DATA.address.area}, {SAINIK_HOTEL_DATA.address.city}, {SAINIK_HOTEL_DATA.address.state} {SAINIK_HOTEL_DATA.address.pincode}
              </p>
            </div>

            {/* Key Landmarks */}
            <div className="space-y-3 pt-6 border-t border-[#1D1B18]/10">
              <span className="font-mono text-[11px] font-bold text-[#C8522A] uppercase tracking-widest">NEARBY LANDMARKS</span>
              <ul className="space-y-2 font-body text-xs text-[#1D1B18]">
                {SAINIK_HOTEL_DATA.landmarks.map((lm, i) => (
                  <li key={i} className="flex items-center justify-between py-1 border-b border-[#1D1B18]/05">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8522A]" />
                      <span className="font-semibold">{lm.name}</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#7A6F64]">{lm.distance}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phone & Contact */}
            <div className="space-y-2 pt-6 border-t border-[#1D1B18]/10">
              <span className="font-mono text-[11px] font-bold text-[#C8522A] uppercase tracking-widest">CONTACT PHONE</span>
              <p className="font-display font-bold text-xl text-[#1D1B18]">
                {SAINIK_HOTEL_DATA.contact.phoneDisplay}
              </p>
              <p className="font-body text-xs text-[#7A6F64]">
                Call ahead for table availability or takeaway orders.
              </p>
            </div>

            {/* Action Directions Button */}
            <a
              href={SAINIK_HOTEL_DATA.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#C8522A] hover:bg-[#B34520] text-[#FAF7F2] font-semibold text-xs py-3.5 px-6 rounded-md uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 font-body shadow-xs"
            >
              <Navigation className="w-4 h-4 fill-current" />
              <span>OPEN IN GOOGLE MAPS</span>
            </a>

          </div>

          {/* Right: Embedded Google Maps Container */}
          <div className="lg:col-span-7 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md border border-[#1D1B18]/12 bg-[#F3ECE0]">
            <iframe
              title="Sainik Hotel Google Maps Location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(SAINIK_HOTEL_DATA.address.fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[20%] contrast-[1.05]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
