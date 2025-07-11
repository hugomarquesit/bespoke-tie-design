import tiesGallery from "@/assets/ties-gallery.jpg";

const GallerySection = () => {
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

  return (
    <section className="py-20 bg-background">
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
          <div className="relative max-w-5xl mx-auto">
            <img 
              src={tiesGallery} 
              alt="Coleção de gravatas personalizadas de luxo"
              className="w-full h-auto rounded-lg shadow-luxury"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"></div>
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
    </section>
  );
};

export default GallerySection;