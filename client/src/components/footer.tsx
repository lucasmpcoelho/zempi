import { Heart, Instagram, Facebook, Linkedin, Youtube, Shield, Lock } from "lucide-react";

const footerSections = [
  {
    title: "Produto",
    links: [
      { name: "Benefícios", href: "#beneficios" },
      { name: "Como Funciona", href: "#como-funciona" },
      { name: "Preços", href: "#" },
      { name: "Perguntas Frequentes", href: "#" }
    ]
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre Nós", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Carreiras", href: "#" },
      { name: "Contato", href: "#" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacidade", href: "#" },
      { name: "Termos de Uso", href: "#" },
      { name: "Política de Cookies", href: "#" },
      { name: "LGPD", href: "#" }
    ]
  }
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" }
];

export default function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contato" className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Heart className="text-white h-5 w-5" />
              </div>
              <span className="text-2xl font-bold">Zempi</span>
            </div>
            <p className="text-white/70 mb-4">
              Seu médico-assistente de IA para tratamento com GLP-1. Acompanhamento 24/7 personalizado e seguro.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-white/70 hover:text-white transition-colors text-left"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Zempi. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-white/60 text-sm flex items-center">
                <Shield className="mr-2 h-4 w-4 text-primary" />
                Dados protegidos por LGPD
              </span>
              <span className="text-white/60 text-sm flex items-center">
                <Lock className="mr-2 h-4 w-4 text-primary" />
                Conexão segura
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
