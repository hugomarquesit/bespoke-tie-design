import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Ricardo Montenegro",
      title: "Cirurgião Cardiovascular",
      content: "A qualidade é incomparável. Minha gravata personalizada se tornou minha marca registrada em congressos médicos. O acabamento é impecável e o atendimento, excepcional.",
      rating: 5
    },
    {
      name: "Alexandre Ferreira",
      title: "CEO & Empresário",
      content: "Desde que descobri as gravatas personalizadas, nunca mais usei outro fornecedor. Cada peça conta uma história e transmite a elegância que minha posição exige. Recomendo sem hesitar.",
      rating: 5
    },
    {
      name: "João Carlos Mendes",
      title: "Advogado Sênior",
      content: "Para meu casamento, queria algo único que representasse minha personalidade. O resultado superou todas as expectativas. Uma obra de arte que guardo com carinho.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            A Voz da Elegância: Nossos Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Descobra por que homens exigentes escolhem nossas gravatas personalizadas para momentos especiais
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-card rounded-lg p-8 shadow-elegant hover:shadow-luxury transition-all duration-300 border border-border/50 h-full">
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-5 h-5 text-accent fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-6">
                  <h4 className="font-serif text-xl font-semibold text-foreground mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground font-medium">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Mais de 500 clientes satisfeitos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>15 anos de experiência</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>100% artesanal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;