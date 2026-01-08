import { useState, useEffect } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border/50 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-serif font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity cursor-pointer">
            LYVE
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/#about">Sobre</NavLink>
          <NavLink href="/#market">Oportunidade</NavLink>
          <NavLink href="/#technology">Tecnologia</NavLink>
          <Link href="/contato">
            <Button variant="outline" className="rounded-full px-6 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium text-sm tracking-wide">
              Fale Conosco
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="/#about">Sobre</MobileNavLink>
          <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="/#market">Oportunidade</MobileNavLink>
          <MobileNavLink onClick={() => setIsMobileMenuOpen(false)} href="/#technology">Tecnologia</MobileNavLink>
          <Link href="/contato" onClick={() => setIsMobileMenuOpen(false)}>
            <Button className="w-full mt-4">Fale Conosco</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-lg font-serif font-medium text-foreground py-2 border-b border-border/50"
    >
      {children}
    </a>
  );
}
