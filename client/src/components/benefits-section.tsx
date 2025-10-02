import { Clock, Brain, Shield, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Clock,
    title: "24/7 Disponível",
    description: "Acompanhamento contínuo pelo WhatsApp a qualquer hora"
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Orientações personalizadas baseadas no seu perfil"
  },
  {
    icon: Shield,
    title: "Segurança no Tratamento",
    description: "Alertas em tempo real sobre efeitos adversos"
  },
  {
    icon: MessageCircle,
    title: "Conversas Proativas",
    description: "O Zempi pergunta como você está ao longo do dia"
  }
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground" data-testid="benefits-title">
            Por que usar o Zempi?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`benefit-card-${index}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
