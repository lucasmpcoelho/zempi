import { ArrowRight, Shield, Clock, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 gradient-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-border">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">Acompanhamento 24/7 disponível</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight" data-testid="hero-title">
              Seu <span className="gradient-text">médico-assistente de IA</span> para tratamento com GLP-1
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="hero-description">
              Para pacientes de GLP-1 no Brasil, o Zempi é o único assistente de IA que te acompanha 24/7, iniciando conversas proativas para entender suas experiências diárias e fornecendo orientação personalizada em tempo real.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                data-testid="button-comecar-acompanhamento"
              >
                Começar Meu Acompanhamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-4 bg-white text-foreground rounded-xl font-semibold text-lg hover:bg-muted transition-colors border border-border"
                data-testid="button-ver-como-funciona"
              >
                Ver Como Funciona
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="text-primary h-6 w-6" />
                <span className="text-sm font-medium text-muted-foreground">100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <UserCheck className="text-secondary h-6 w-6" />
                <span className="text-sm font-medium text-muted-foreground">Supervisão Médica</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-accent h-6 w-6" />
                <span className="text-sm font-medium text-muted-foreground">24/7 Disponível</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
                alt="Monitoramento de saúde no celular" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                data-testid="hero-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
