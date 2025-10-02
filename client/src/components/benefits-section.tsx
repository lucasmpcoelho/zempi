import { Clock, Brain, Shield, Globe, Lock, Smartphone, TrendingUp, Check } from "lucide-react";
import { motion } from "framer-motion";

const mainBenefits = [
  {
    icon: Clock,
    iconColor: "text-primary",
    bgColor: "from-primary/20 to-primary/10",
    title: "Acompanhamento 24/7",
    description: "Estamos sempre disponíveis para você. O Zempi monitora sua jornada continuamente e inicia conversas proativas para entender como você está se sentindo.",
    features: [
      "Disponível a qualquer hora do dia ou noite",
      "Respostas imediatas às suas dúvidas",
      "Monitoramento contínuo do tratamento"
    ]
  },
  {
    icon: Brain,
    iconColor: "text-secondary",
    bgColor: "from-secondary/20 to-secondary/10",
    title: "Orientação Personalizada",
    description: "Cada paciente é único. Nossa IA aprende com suas experiências diárias para fornecer recomendações específicas para o seu caso.",
    features: [
      "Análise inteligente das suas experiências",
      "Recomendações adaptadas ao seu perfil",
      "Evolução baseada no seu progresso"
    ]
  },
  {
    icon: Shield,
    iconColor: "text-accent",
    bgColor: "from-accent/20 to-accent/10",
    title: "Segurança no Tratamento",
    description: "Sua segurança é nossa prioridade. O Zempi identifica sinais de alerta e te orienta quando procurar ajuda médica profissional.",
    features: [
      "Detecção precoce de efeitos adversos",
      "Alertas de segurança em tempo real",
      "Orientação sobre quando buscar médico"
    ]
  }
];

const additionalBenefits = [
  {
    icon: Globe,
    title: "100% em Português",
    description: "Desenvolvido especificamente para o Brasil"
  },
  {
    icon: Lock,
    title: "Dados Protegidos",
    description: "Conformidade com LGPD e privacidade total"
  },
  {
    icon: Smartphone,
    title: "Acesso Mobile",
    description: "Use em qualquer dispositivo, a qualquer momento"
  },
  {
    icon: TrendingUp,
    title: "Acompanhe Progresso",
    description: "Visualize sua evolução ao longo do tempo"
  }
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="benefits-title">
            Por que escolher o <span className="gradient-text">Zempi</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="benefits-description">
            Desenvolvido especificamente para pacientes de GLP-1 no Brasil, oferecemos suporte completo e personalizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {mainBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover-lift border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-testid={`benefit-card-${index}`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.bgColor} flex items-center justify-center mb-6`}>
                <benefit.icon className={`${benefit.iconColor} h-8 w-8`} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {benefit.description}
              </p>
              <ul className="space-y-2">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm">
                    <Check className="text-green-500 h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`additional-benefit-${index}`}
            >
              <benefit.icon className="text-primary h-6 w-6 mb-3" />
              <h4 className="font-semibold mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
