import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

function ZempiLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="url(#logoGradient)" />
      <path d="M14 12 L26 12 L20 20 L26 20 L14 28 L18 20 L14 20 Z" fill="white" strokeWidth="1.5" stroke="white" strokeLinejoin="round" />
      <circle cx="30" cy="12" r="3" fill="white" fillOpacity="0.9" />
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#25D366" />
          <stop offset="1" stopColor="#128C7E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <ZempiLogo />
            <span className="text-2xl font-bold text-foreground">Zempi</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-beneficios"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-como-funciona"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-contato"
            >
              Contato
            </button>
          </div>
          
          <div className="hidden md:block">
            <Button 
              className="px-6 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              data-testid="button-comecar-agora-nav"
            >
              Começar Agora
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-beneficios"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-como-funciona"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-contato"
              >
                Contato
              </button>
              <Button 
                className="w-full mt-4 bg-accent text-accent-foreground"
                data-testid="mobile-button-comecar-agora"
              >
                Começar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
