import { Palette, Scissors, Award } from "lucide-react";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";

const ProcessSection = () => {
  const processes = [
    {
      icon: Palette,
      title: "Seleção Minuciosa",
      description: "Escolha entre os mais finos tecidos, cores exclusivas e padrões únicos, cuidadosamente selecionados para criar sua peça ideal."
    },
    {
      icon: Scissors,
      title: "Detalhes Sob Medida",
      description: "Bordados personalizados, largura perfeita e comprimento ideal. Cada detalhe é ajustado às suas preferências e estilo pessoal."
    },
    {
      icon: Award,
      title: "Entrega Impecável",
      description: "Produto final de qualidade superior, embalado com o requinte que sua gravata exclusiva merece, direto em suas mãos."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            O Artesanato por Trás da Sua Gravata
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Um processo cuidadoso e refinado que transforma sua visão em uma peça única de elegância
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Process Steps */}
          <div className="space-y-8">
            {processes.map((process, index) => (
              <div 
                key={index}
                className="flex items-start space-x-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                    <process.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src={craftsmanshipImage} 
                alt="Processo artesanal de confecção de gravatas"
                className="w-full h-auto rounded-lg shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;