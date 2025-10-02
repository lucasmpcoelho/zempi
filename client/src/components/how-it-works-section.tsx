import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Conversas Proativas",
    description: "O Zempi inicia conversas ao longo do dia para entender como você está se sentindo, seus sintomas, alimentação e experiências com a medicação. Não precisa lembrar de reportar - nós perguntamos para você.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Interface de chat inteligente",
    gradient: "from-primary/10 to-secondary/10",
    reverse: false
  },
  {
    number: 2,
    title: "Análise Inteligente",
    description: "Nossa IA analisa suas respostas, identifica padrões e correlações entre seus sintomas, alimentação e medicação. Cada experiência é usada para entender melhor o seu caso único.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Análise de dados médicos",
    gradient: "from-secondary/10 to-accent/10",
    reverse: true
  },
  {
    number: 3,
    title: "Orientação Personalizada",
    description: "Com base na análise, fornecemos orientações específicas e em tempo real: dicas de alimentação, manejo de efeitos colaterais, quando procurar ajuda médica e como otimizar seu tratamento.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Recomendações personalizadas de saúde",
    gradient: "from-accent/10 to-primary/10",
    reverse: false
  },
  {
    number: 4,
    title: "Acompanhamento Contínuo",
    description: "O Zempi continua aprendendo com você ao longo do tempo, ajustando as orientações conforme seu corpo se adapta ao tratamento. Celebramos suas conquistas e te ajudamos nos desafios.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Dashboard de progresso de saúde",
    gradient: "from-primary/10 to-secondary/10",
    reverse: true
  }
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="how-it-works-title">
            Como o <span className="gradient-text">Zempi funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="how-it-works-description">
            Um assistente inteligente que aprende com você e te acompanha em cada etapa do seu tratamento com GLP-1.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`flex flex-col md:flex-row gap-8 items-center ${step.reverse ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                data-testid={`step-${step.number}`}
              >
                <div className="md:w-1/2">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-xl">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-8`}>
                    <img 
                      src={step.image} 
                      alt={step.alt} 
                      className="rounded-xl shadow-lg w-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action in Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-block bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Pronto para ter seu médico-assistente de IA?</h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de pacientes que já estão tendo uma experiência melhor e mais segura com o tratamento GLP-1.
            </p>
            <Button 
              size="lg"
              className="px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
              data-testid="button-comecar-agora-gratuito"
            >
              Começar Agora Gratuitamente
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
