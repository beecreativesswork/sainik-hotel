import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MenuSection from "@/components/MenuSection";
import ExperienceSection from "@/components/ExperienceSection";
import LocalSection from "@/components/LocalSection";
import AffordabilitySection from "@/components/AffordabilitySection";
import ReviewsSection from "@/components/ReviewsSection";
import PhotoCollage from "@/components/PhotoCollage";
import HoursSection from "@/components/HoursSection";
import InstagramSection from "@/components/InstagramSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121110] text-[#F5EFE4] overflow-x-hidden selection:bg-[#FF5722] selection:text-[#121110]">
      <Navbar />
      <Hero />
      <Marquee />
      
      {/* About / Intro Section */}
      <section id="about" className="py-16 px-4 bg-[#1C1A17] border-b-4 border-[#FF5722] text-center bg-halftone">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="bg-[#FF5722] text-[#121110] font-mono font-black text-xs px-3 py-1 uppercase tracking-widest border border-[#F5EFE4]">
            CHIKHALI&apos;S OWN ROAD-SIDE HOTEL
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-display tracking-tight text-[#F5EFE4]">
            A LEGENDARY LOCAL HOTEL REDESIGNED FOR THE MODERN AGE.
          </h2>
          <p className="font-mono text-sm sm:text-base text-[#F5EFE4]/80 leading-relaxed max-w-2xl mx-auto">
            From sizzling Kolhapuri thalis to late-night outdoor dining, Sainik Hotel brings you the rich culture of Pune roadside hotels without the premium price tag.
          </p>
        </div>
      </section>

      <MenuSection />
      <ExperienceSection />
      <LocalSection />
      <AffordabilitySection />
      <ReviewsSection />
      <PhotoCollage />
      <HoursSection />
      <InstagramSection />
      <CTASection />
      <Footer />
    </main>
  );
}
