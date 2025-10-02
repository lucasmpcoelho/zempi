import { motion } from "framer-motion";

const benefits = [
  {
    emoji: "📝",
    title: "Check-ins proativos e diários"
  },
  {
    emoji: "🤖",
    title: "Respostas confiáveis, 24/7"
  },
  {
    emoji: "🍽️",
    title: "Análise de refeições otimizada para GLP-1"
  },
  {
    emoji: "🔍",
    title: "Detetive de sintomas e alimentos"
  },
  {
    emoji: "📊",
    title: "Relatórios de causa e efeito"
  },
  {
    emoji: "🎯",
    title: "Preparação para manutenção"
  },
  {
    emoji: "🔒",
    title: "Privacidade e criptografia de ponta a ponta"
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
            Funcionalidades
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              data-testid={`benefit-card-${index}`}
            >
              <div className="text-4xl mb-3">{benefit.emoji}</div>
              <h3 className="text-base font-semibold text-foreground">{benefit.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
