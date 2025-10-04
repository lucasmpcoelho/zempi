import { motion } from "framer-motion";

const benefits = [
  {
    emoji: "💪",
    title: "Prevenção de Perda Muscular",
    description: "Receitas ricas em proteína e treinos personalizados para evitar a perda muscular comum em tratamentos GLP-1"
  },
  {
    emoji: "🤢",
    title: "Gerenciamento de Efeitos Colaterais",
    description: "Identifica padrões entre alimentos e náusea, te ajudando a evitar sintomas antes que aconteçam"
  },
  {
    emoji: "📈",
    title: "Otimização de Resultados",
    description: "Análise de refeições específica para GLP-1 que maximiza perda de gordura e preserva massa magra"
  },
  {
    emoji: "🎯",
    title: "Aderência ao Tratamento",
    description: "Check-ins diários que mantêm você no caminho e evitam a desistência prematura"
  },
  {
    emoji: "🔬",
    title: "Insights Baseados em Dados",
    description: "Relatórios de causa e efeito que mostram quais alimentos e hábitos funcionam melhor para VOCÊ"
  },
  {
    emoji: "🏥",
    title: "Suporte na Transição",
    description: "Preparação para manutenção pós-medicação garantindo resultados duradouros"
  },
  {
    emoji: "🔐",
    title: "Privacidade Total",
    description: "Criptografia de ponta a ponta e conformidade total com LGPD"
  }
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-32 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight" data-testid="benefits-title">
            Suporte completo para sua jornada GLP-1
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Cada feature foi projetada para resolver problemas específicos que pacientes enfrentam durante o tratamento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white rounded-3xl p-10 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              data-testid={`benefit-card-${index}`}
            >
              <div className="text-5xl mb-5">{benefit.emoji}</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
