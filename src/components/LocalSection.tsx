"use client";

import { SAINIK_HOTEL_DATA } from "@/data/hotelData";
import { MapPin, Navigation, Compass, ExternalLink, Phone, Building2 } from "lucide-react";

export default function LocalSection() {
  return (
    <section id="location" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121110] relative bg-grain border-b-4 border-[#F5EFE4]">
      
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Editorial Address & Landmark Information */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 font-mono text-xs font-bold text-[#FF5722] tracking-widest uppercase">
                <Compass className="w-4 h-4" />
                <span>LOCAL LANDMARK & NEIGHBORHOOD</span>
              </div>
              <h2 className="text-5xl sm:text-7xl font-extrabold uppercase font-display tracking-tight text-[#F5EFE4] mb-6">
                RIGHT HERE IN <br />
                <span className="text-[#FF5722]">CHIKHALI.</span>
              </h2>

              <p className="font-mono text-sm text-[#F5EFE4]/80 leading-relaxed mb-8">
                Located right near major transit arteries in Pimpri-Chinchwad, Sainik Hotel serves industrial workers, local families, and daily travelers looking for authentic taste at ₹200–400.
              </p>

              {/* Exact Address Box */}
              <div className="bg-[#1C1A17] border-3 border-[#F5EFE4] p-6 shadow-[6px_6px_0px_#FF5722] mb-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#FF5722] shrink-0 mt-1" />
                  <div>
                    <span className="font-mono text-xs text-[#FF5722] font-bold uppercase block">PRIMARY LOCATION</span>
                    <p className="font-extrabold text-lg font-display uppercase text-[#F5EFE4]">
                      {SAINIK_HOTEL_DATA.address.line1}
                    </p>
                    <p className="font-mono text-sm text-[#F5EFE4]/80">
                      {SAINIK_HOTEL_DATA.address.line2}, {SAINIK_HOTEL_DATA.address.area}
                    </p>
                    <p className="font-mono text-sm text-[#F5EFE4]/80">
                      {SAINIK_HOTEL_DATA.address.city}, {SAINIK_HOTEL_DATA.address.state} {SAINIK_HOTEL_DATA.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F5EFE4]/15 flex items-center justify-between text-xs font-mono text-[#F5EFE4]/70">
                  <span className="font-bold text-[#F5EFE4]">LANDMARK:</span>
                  <span className="text-[#FF5722] font-bold">{SAINIK_HOTEL_DATA.address.landmark}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={SAINIK_HOTEL_DATA.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF5722] text-[#121110] font-black text-base px-8 py-4 uppercase tracking-wider border-2 border-[#F5EFE4] shadow-[4px_4px_0px_#F5EFE4] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-3 font-display"
              >
                <Navigation className="w-5 h-5 fill-current" />
                <span>GET DIRECTIONS →</span>
              </a>

              <a
                href={SAINIK_HOTEL_DATA.contact.phoneTel}
                className="bg-[#1C1A17] text-[#F5EFE4] font-black text-base px-8 py-4 uppercase tracking-wider border-2 border-[#F5EFE4] shadow-[4px_4px_0px_#FF5722] hover:bg-[#F5EFE4] hover:text-[#121110] transition-all flex items-center justify-center gap-3 font-display"
              >
                <Phone className="w-5 h-5 text-[#FF5722]" />
                <span>CALL HOTEL</span>
              </a>
            </div>

          </div>

          {/* Right Column: Stylized Route / Landmark Pins Board */}
          <div className="lg:col-span-6 bg-[#1C1A17] border-4 border-[#F5EFE4] p-8 shadow-[10px_10px_0px_#C62828] relative overflow-hidden flex flex-col justify-between">
            
            <div className="absolute top-0 right-0 bg-[#C62828] text-[#F5EFE4] font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
              CHIKHALI ROUTE MAP
            </div>

            <div>
              <div className="flex items-center justify-between border-b-2 border-dashed border-[#F5EFE4]/20 pb-4 mb-6">
                <h3 className="text-2xl font-extrabold font-display uppercase text-[#F5EFE4]">
                  NEARBY ACCESS POINTS
                </h3>
                <span className="font-mono text-xs text-[#FF5722] font-bold">
                  PIMPRI-CHINCHWAD
                </span>
              </div>

              {/* Landmark Pins */}
              <div className="space-y-4">
                {SAINIK_HOTEL_DATA.landmarks.map((lm, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#121110] border border-[#F5EFE4]/20 flex items-center justify-between gap-4 hover:border-[#FF5722] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FF5722] text-[#121110] font-black font-display text-sm flex items-center justify-center shrink-0 border border-[#F5EFE4]">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="font-extrabold font-display text-lg uppercase text-[#F5EFE4]">
                          {lm.name}
                        </h4>
                        <p className="font-mono text-xs text-[#F5EFE4]/60">
                          {lm.detail}
                        </p>
                      </div>
                    </div>

                    <span className="font-mono text-xs font-bold text-[#FF5722] bg-[#FF5722]/10 px-2.5 py-1 border border-[#FF5722]/30 shrink-0">
                      {lm.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stylized Footer Map Note */}
            <div className="mt-8 pt-6 border-t-2 border-dashed border-[#F5EFE4]/20 flex items-center justify-between text-xs font-mono text-[#F5EFE4]/70">
              <span>BHAGYALAXMI THERMO DIES CMPND</span>
              <span className="text-[#FF5722] font-bold">PIN 411062</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
