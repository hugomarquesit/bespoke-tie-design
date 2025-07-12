import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="process">
        <ProcessSection />
      </div>
      <GallerySection />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
