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
            className="relative h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent blur-3xl"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-tl from-secondary/30 via-secondary/20 to-transparent blur-3xl" style={{ transform: 'translate(60px, -30px)' }}></div>
            </div>
            <div className="relative w-72 h-96 mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-white shadow-2xl border border-border overflow-hidden">
                <div className="h-14 bg-primary flex items-center px-4 space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 6 L16 6 L12 12 L16 12 L8 18 L11 12 L8 12 Z" fill="url(#miniGrad)" strokeWidth="1" stroke="url(#miniGrad)" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="miniGrad" x1="0" y1="0" x2="24" y2="24">
                          <stop stopColor="#25D366" />
                          <stop offset="1" stopColor="#128C7E" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Zempi AI</div>
                    <div className="text-white/80 text-xs">online</div>
                  </div>
                </div>
                <div className="p-4 bg-[#ECE5DD] h-[calc(100%-3.5rem)] relative whatsapp-pattern">
                  <div className="absolute top-4 left-4 right-4 space-y-2">
                    <div className="bg-white rounded-lg rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
                      <p className="text-sm text-gray-800">Olá! Como você está se sentindo hoje? 👋</p>
                      <span className="text-xs text-gray-500 block mt-1">9:30</span>
                    </div>
                    <div className="bg-[#DCF8C6] rounded-lg rounded-tr-sm px-4 py-3 shadow-sm ml-auto max-w-[85%]">
                      <p className="text-sm text-gray-800">Bem melhor, obrigada!</p>
                      <span className="text-xs text-gray-500 block mt-1 text-right">9:32</span>
                    </div>
                    <div className="bg-white rounded-lg rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
                      <p className="text-sm text-gray-800">Que bom! Lembre-se de tomar sua medicação 💊</p>
                      <span className="text-xs text-gray-500 block mt-1">9:33</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-white border-4 border-primary/30 shadow-lg flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 8 C10 8 8 12 8 16 C8 20 10 24 16 24 C22 24 24 20 24 16 C24 12 22 8 16 8 Z M12 14 L12 18 M16 12 L16 20 M20 14 L20 18" stroke="#25D366" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-white border-4 border-secondary/30 shadow-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8" stroke="#128C7E" strokeWidth="2" />
                  <path d="M9 12 L11 14 L15 10" stroke="#128C7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
