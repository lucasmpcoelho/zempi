import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-3xl font-bold tracking-tight mb-6">REDE VIVA</h3>
            <p className="text-muted-foreground font-light max-w-sm">
              Investimento estratégico e tecnologia para o crescimento sustentável de clínicas de estética no Brasil.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#market" className="hover:text-primary transition-colors">Oportunidade</a></li>
              <li><a href="#technology" className="hover:text-primary transition-colors">Tecnologia</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans font-semibold text-sm uppercase tracking-widest mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>São Paulo, Brasil</li>
              <li>contato@redeviva.com.br</li>
              <li>
                <Button variant="link" className="p-0 h-auto font-normal text-muted-foreground hover:text-primary">LinkedIn</Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground font-light">
          <p>© {new Date().getFullYear()} Rede Viva. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Privacidade</a>
            <a href="#" className="hover:text-primary">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
