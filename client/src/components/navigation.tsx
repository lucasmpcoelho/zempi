import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "@/components/ui/drawer";

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
    <nav
      className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingRight: "env(safe-area-inset-right)",
        paddingLeft: "env(safe-area-inset-left)",
      }}
      role="navigation"
      aria-label="Main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 cursor-pointer" data-testid="logo-link">
            <ZempiLogo />
            <span className="hidden sm:inline text-2xl font-bold text-foreground">Zempi</span>
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
              className="px-6 py-2.5 rounded-lg font-semibold transition-colors"
              variant="default"
              onClick={() => handleNavClick('waitlist')}
              data-testid="button-comecar-agora-nav"
            >
              Começar Agora
            </Button>
          </div>

          <div className="md:hidden">
            <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DrawerTrigger asChild>
                <button 
                  className="p-3 rounded-md hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                  aria-expanded={isMenuOpen}
                  data-testid="button-menu-toggle"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </DrawerTrigger>
              <DrawerContent className="border-t border-border bg-background pb-[env(safe-area-inset-bottom)]">
                <div className="px-4 pt-2 pb-3 space-y-1">
                  <button 
                    onClick={() => handleNavClick('beneficios')}
                    className="block px-3 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors w-full text-left"
                    data-testid="mobile-nav-beneficios"
                  >
                    Benefícios
                  </button>
                  <button 
                    onClick={() => handleNavClick('como-funciona')}
                    className="block px-3 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors w-full text-left"
                    data-testid="mobile-nav-como-funciona"
                  >
                    Como Funciona
                  </button>
                  <Link 
                    href="/quem-somos"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors w-full text-left"
                    data-testid="mobile-nav-quem-somos"
                  >
                    Quem Somos
                  </Link>
                  <button 
                    onClick={() => handleNavClick('contato')}
                    className="block px-3 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors w-full text-left"
                    data-testid="mobile-nav-contato"
                  >
                    Contato
                  </button>
                  <DrawerClose asChild>
                    <Button 
                      className="w-full mt-4"
                      variant="default"
                      onClick={() => handleNavClick('waitlist')}
                      data-testid="mobile-button-comecar-agora"
                    >
                      Começar Agora
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        
      </div>
    </nav>
  );
}
