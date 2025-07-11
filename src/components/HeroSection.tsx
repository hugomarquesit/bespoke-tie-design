import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProcess = () => {
    const processSection = document.getElementById('process');
    processSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            A Essência da Elegância.
            <br />
            <span className="text-accent">Sua Gravata. Seu Estilo.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in-up font-light leading-relaxed">
            Confeccionadas com os mais nobres tecidos, cada gravata é uma obra de arte personalizada para o homem que valoriza a distinção.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in-up">
            <Button 
              onClick={scrollToContact}
              variant="gold" 
              size="xl" 
              className="font-serif text-lg tracking-wide shadow-2xl"
            >
              Solicite Sua Peça Exclusiva
            </Button>
            
            <Button 
              onClick={scrollToProcess}
              variant="ghost_outline" 
              size="xl" 
              className="font-serif text-lg tracking-wide"
            >
              Conheça o Processo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;