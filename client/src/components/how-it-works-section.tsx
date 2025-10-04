import { motion } from "framer-motion";
import { Smartphone, MessageSquare, LineChart, Trophy } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    number: "1",
    title: "Conecte seu WhatsApp",
    description: "Processo instantâneo, sem instalação de apps. Use o WhatsApp que você já tem."
  },
  {
    icon: MessageSquare,
    number: "2",
    title: "Conte sua história",
    description: "A IA personaliza o acompanhamento baseado no seu perfil, objetivos e histórico médico."
  },
  {
    icon: LineChart,
    number: "3",
    title: "Receba acompanhamento diário",
    description: "Check-ins automáticos, análise de refeições, alertas de sintomas e orientações personalizadas."
  },
  {
    icon: Trophy,
    number: "4",
    title: "Alcance resultados sustentáveis",
    description: "Dados mensuráveis, insights acionáveis e suporte contínuo para sucesso a longo prazo."
  }
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-32 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground tracking-tight" data-testid="how-it-works-title">
            Como funciona
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Comece em minutos e tenha suporte contínuo durante toda sua jornada
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`step-${index}`}
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 h-full hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                    <step.icon className="text-white h-7 w-7" />
                  </div>
                  <div className="text-6xl font-bold text-primary/20">{step.number}</div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-8 h-0.5 bg-primary/30 -translate-x-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
