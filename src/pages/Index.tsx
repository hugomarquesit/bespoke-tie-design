import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

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
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
            Pronto para Elevar Sua Elegância?
          </h2>
          <Button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="gold" 
            size="xl" 
            className="font-serif text-lg tracking-wide shadow-2xl"
          >
            Solicite Sua Peça Exclusiva
          </Button>
        </div>
      </section>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
