import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import MenuSection from "@/components/MenuSection";
import PhotoCollage from "@/components/PhotoCollage";
import ReviewsSection from "@/components/ReviewsSection";
import LocalSection from "@/components/LocalSection";
import HoursSection from "@/components/HoursSection";
import InstagramSection from "@/components/InstagramSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#1D1B18] overflow-x-hidden selection:bg-[#C8522A] selection:text-[#FAF7F2]">
      <Navbar />
      <Hero />
      <ExperienceSection />
      <MenuSection />
      <PhotoCollage />
      <ReviewsSection />
      <LocalSection />
      <HoursSection />
      <InstagramSection />
      <CTASection />
      <Footer />
    </main>
  );
}
