import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-40 pb-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground tracking-tight" data-testid="hero-title">
            O que falta no seu tratamento GLP-1: suporte contínuo e inteligente
          </h1>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light" data-testid="hero-description">
            Médico assistente de IA 24/7 pelo WhatsApp que maximiza resultados, previne perda muscular e garante aderência ao Ozempic e Mounjaro
          </p>
          
          <div className="pt-6">
            <Button 
              size="lg"
              onClick={scrollToWaitlist}
              className="px-12 py-7 rounded-full font-semibold text-xl transition-all hover:scale-105"
              variant="default"
              data-testid="button-comecar-acompanhamento"
            >
              Entrar na Lista de Espera
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            🔒 Criptografia de ponta a ponta • 🇧🇷 100% em português • ⚡ Respostas instantâneas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
