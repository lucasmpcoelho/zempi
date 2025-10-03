import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

function ZempiLogo() {
  return (
    <img
      src="/logo.png"
      alt="Zempi"
      width={40}
      height={40}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = "/logo.svg";
      }}
    />
  );
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === '/';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 cursor-pointer" data-testid="logo-link">
            <ZempiLogo />
            <span className="text-2xl font-bold text-foreground">Zempi</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('beneficios')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-beneficios"
            >
              Benefícios
            </button>
            <button 
              onClick={() => handleNavClick('como-funciona')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-como-funciona"
            >
              Como Funciona
            </button>
            <Link 
              href="/quem-somos"
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-quem-somos"
            >
              Quem Somos
            </Link>
            <button 
              onClick={() => handleNavClick('contato')}
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
                onClick={() => handleNavClick('beneficios')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-beneficios"
              >
                Benefícios
              </button>
              <button 
                onClick={() => handleNavClick('como-funciona')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-como-funciona"
              >
                Como Funciona
              </button>
              <Link 
                href="/quem-somos"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
                data-testid="mobile-nav-quem-somos"
              >
                Quem Somos
              </Link>
              <button 
                onClick={() => handleNavClick('contato')}
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
