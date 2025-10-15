import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "@/components/ui/drawer";

function ZempiLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0,1024) scale(0.1,-0.1)" fill="currentColor" stroke="none">
        <path d="M3227 7590 c-131 -22 -264 -126 -328 -255 -33 -68 -34 -72 -34 -195
0 -120 1 -128 32 -192 31 -67 100 -150 157 -191 16 -11 58 -32 94 -47 l66 -26
3 -345 c5 -400 11 -439 93 -606 61 -123 166 -241 284 -318 l76 -49 0 -606 c0
-371 4 -630 11 -670 44 -278 242 -542 504 -673 318 -159 691 -135 986 63 92
62 216 193 273 288 60 100 111 248 126 362 8 59 10 391 7 1070 l-3 985 -23 80
c-94 330 -327 575 -646 678 -504 163 -1043 -128 -1202 -650 -25 -85 -27 -99
-32 -393 l-6 -305 -70 70 c-82 82 -136 177 -165 291 -18 69 -20 111 -20 404
l0 327 43 13 c127 38 226 123 285 247 36 76 37 81 37 193 0 109 -2 119 -32
183 -93 196 -300 303 -516 267z m207 -215 c93 -45 150 -134 149 -235 0 -77
-17 -123 -69 -180 -72 -80 -165 -106 -270 -75 -106 31 -194 146 -194 254 0
104 75 204 185 248 43 18 152 11 199 -12z m1363 -605 c253 -60 460 -251 550
-506 l28 -79 3 -512 3 -511 -761 0 -760 1 0 482 c0 446 1 487 20 559 25 97 49
151 104 234 182 274 506 406 813 332z"/>
        <path d="M6369 6329 c-230 -33 -436 -185 -538 -394 -66 -134 -69 -161 -75
-625 -3 -228 -1 -435 3 -459 10 -51 41 -81 86 -81 17 0 107 24 200 52 l170 52
505 6 c492 6 507 7 575 29 263 87 441 274 506 532 28 109 23 289 -11 389 -89
263 -301 448 -570 496 -85 15 -753 18 -851 3z m864 -194 c188 -49 343 -204
391 -391 32 -123 17 -246 -43 -369 -63 -128 -164 -219 -306 -276 -60 -24 -61
-24 -565 -29 l-505 -5 -122 -38 c-67 -20 -127 -37 -133 -37 -8 0 -10 106 -8
373 4 356 5 375 26 431 59 158 180 275 344 330 73 25 73 25 468 26 319 0 407
-3 453 -15z"/>
        <path d="M6307 5700 c-53 -42 -56 -130 -7 -175 25 -23 92 -31 130 -15 52 21
75 95 49 153 -25 55 -122 76 -172 37z"/>
        <path d="M6721 5704 c-61 -43 -60 -147 2 -184 59 -36 141 -19 165 35 27 60 8
127 -45 154 -32 16 -95 13 -122 -5z"/>
        <path d="M7127 5700 c-34 -27 -48 -79 -36 -126 18 -63 103 -93 168 -60 68 36
68 156 0 192 -41 21 -102 18 -132 -6z"/>
      </g>
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
