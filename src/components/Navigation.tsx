import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Processo", id: "process" },
    { label: "Galeria", id: "gallery" },
    { label: "Depoimentos", id: "testimonials" },
    { label: "Contato", id: "contact" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-elegant border-b border-border/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="font-serif text-2xl font-bold cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <span className={`transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-primary-foreground'
            }`}>
              Elegância
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-300 hover:text-accent relative group ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <Button 
              onClick={() => scrollToSection('contact')}
              variant={isScrolled ? "gold" : "ghost_outline"}
              size="sm"
              className="ml-4"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border/20 animate-fade-in">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left font-medium text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="gold"
                size="sm"
                className="w-full mt-4"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;