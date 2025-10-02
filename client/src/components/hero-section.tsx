import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground" data-testid="hero-title">
            Navegue sua jornada com Mounjaro e Ozempic com mais segurança e sucesso
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto" data-testid="hero-description">
            O Zempi é seu médico assistente de IA que te acompanha 24/7, garantindo que você atinja seus objetivos sem imprevistos no tratamento
          </p>
          
          <div className="pt-4">
            <Button 
              size="lg"
              className="px-10 py-6 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors"
              data-testid="button-comecar-acompanhamento"
            >
              Começar Agora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
