import { useState } from "react";
import tiesGallery from "@/assets/ties-gallery.jpg";
import Lightbox from "@/components/Lightbox";

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryImages = [
    {
      src: tiesGallery,
      alt: "Coleção de gravatas personalizadas de luxo",
      title: "Coleção Principal",
      description: "Nossa seleção de gravatas artesanais em sedas nobres"
    }
  ];

  const tieStyles = [
    {
      title: "Clássica Navy",
      description: "Padrão dourado em seda premium"
    },
    {
      title: "Burgundy Elegante", 
      description: "Textura sutil em seda italiana"
    },
    {
      title: "Charcoal Moderna",
      description: "Detalhes prata em tecido nobre"
    },
    {
      title: "Royal Blue",
      description: "Padrão geométrico exclusivo"
    },
    {
      title: "Forest Green",
      description: "Paisley tradicional refinado"
    },
    {
      title: "Black Premium",
      description: "Acentos dourados discretos"
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Galeria de Inspirações
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Explore nossa coleção de gravatas personalizadas, cada uma contando uma história única de estilo e sofisticação
          </p>
        </div>

        {/* Main Gallery Image */}
        <div className="mb-12 animate-scale-in">
          <div className="relative max-w-5xl mx-auto group cursor-pointer">
            <img 
              src={tiesGallery} 
              alt="Coleção de gravatas personalizadas de luxo"
              className="w-full h-auto rounded-lg shadow-luxury transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]"
              onClick={() => openLightbox(0)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg group-hover:from-primary/20 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 text-primary font-semibold shadow-lg">
                Clique para ampliar
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tieStyles.map((style, index) => (
            <div 
              key={index}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-lg p-6 shadow-elegant hover:shadow-luxury transition-all duration-300 transform hover:-translate-y-2 border border-border/50">
                <div className="w-full h-32 bg-gradient-subtle rounded-md mb-4 flex items-center justify-center group-hover:bg-gradient-gold transition-all duration-300">
                  <div className="w-8 h-20 bg-gradient-luxury rounded-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {style.title}
                </h3>
                <p className="text-muted-foreground">
                  {style.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Cada gravata é única. Sua história pessoal merece uma peça exclusiva.
          </p>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"></div>
        </div>
      </div>

      <Lightbox
        images={galleryImages}
        isOpen={lightboxOpen}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
};

export default GallerySection;