import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">
              Gravatas de Requinte
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Criando gravatas personalizadas de luxo há mais de 15 anos. 
              Cada peça é uma obra de arte única, confeccionada com os mais 
              finos materiais e atenção excepcional aos detalhes.
            </p>
            <div className="w-24 h-1 bg-gradient-gold rounded-full"></div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">
                  contato@gravatasrequinte.com.br
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">
                  (11) 99999-9999
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">
                  São Paulo, SP - Brasil
                </span>
              </div>
            </div>
          </div>

          {/* Social & Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6">
              Conecte-se Conosco
            </h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-primary-foreground/60 text-sm space-y-2">
              <p>Horário de Atendimento:</p>
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 14h</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {currentYear} Gravatas de Requinte. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/40 text-sm mt-2">
            Desenvolvido com elegância e sofisticação
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;