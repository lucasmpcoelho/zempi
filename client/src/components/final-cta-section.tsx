import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400" 
              alt="Profissional de saúde apoiando paciente com tecnologia" 
              className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
              loading="lazy"
              decoding="async"
              data-testid="final-cta-image"
            />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="final-cta-title">
            Comece sua jornada com o <span className="gradient-text">Zempi hoje</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto" data-testid="final-cta-description">
            Junte-se aos pacientes que já estão tendo uma experiência mais segura, informada e bem-sucedida com o tratamento GLP-1.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
              data-testid="button-teste-gratuito"
            >
              Começar Teste Gratuito de 14 Dias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-4 bg-white text-foreground rounded-xl font-semibold text-lg hover:bg-muted transition-colors border border-border"
              data-testid="button-agendar-demo"
            >
              Agendar Demonstração
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
              Sem cartão de crédito necessário
            </div>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
              Cancele quando quiser
            </div>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2 h-4 w-4" />
              Suporte em português
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
