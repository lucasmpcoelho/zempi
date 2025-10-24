import { motion } from "framer-motion";
import { Target, TrendingUp, LineChart, Heart } from "lucide-react";

const valuePropositions = [
  {
    id: "vp1",
    icon: Target,
    emoji: "💪",
    title: "Proteja Seus Músculos",
    subtitle: "Perca gordura, não massa magra",
    badge: "Único no mercado",
    badgeColor: "bg-purple-100 text-purple-700",
    features: [
      "Score Muscular Diário (zona verde/amarela/vermelha)",
      "Meta de proteína personalizada: 1.6g/kg baseada em ciência",
      "Alertas inteligentes via WhatsApp quando risco aumenta",
      "Evite pele flácida, fraqueza e 'Ozempic face'"
    ],
    metric: {
      value: "92%",
      label: "mantém massa muscular em zona segura"
    },
    color: "purple"
  },
  {
    id: "vp2",
    icon: TrendingUp,
    emoji: "🎯",
    title: "Crie Hábitos Que Duram",
    subtitle: "Resultados permanentes, não temporários",
    badge: "Resultados permanentes",
    badgeColor: "bg-blue-100 text-blue-700",
    features: [
      "Celebrações de streaks: 7, 14, 30 dias de proteína excelente 🔥",
      "Conquistas desbloqueadas: First Week Warrior, Muscle Defender 🏆",
      "Reflexões semanais para autoconhecimento",
      "Personal Habit Template após 30 dias: seu 'manual pessoal'"
    ],
    metric: {
      value: "67%",
      label: "recuperam peso em 1 ano. Não seja um deles.",
      isWarning: true
    },
    color: "blue"
  },
  {
    id: "vp3",
    icon: LineChart,
    emoji: "📊",
    title: "Entenda Seu Corpo",
    subtitle: "Dados que empoderam decisões",
    badge: "Dados que empoderam",
    badgeColor: "bg-green-100 text-green-700",
    features: [
      "Correlação de efeitos colaterais: '80% da náusea após peixes gordurosos'",
      "Benchmarking anônimo: 'Você está no top 15% em proteína'",
      "Suporte para decisão de dosagem com dados",
      "Relatórios em PDF para levar ao endocrinologista"
    ],
    metric: {
      value: "Sem mais",
      label: "'Am I normal?' anxiety"
    },
    color: "green"
  },
  {
    id: "vp4",
    icon: Heart,
    emoji: "💬",
    title: "Nunca Esteja Sozinho(a)",
    subtitle: "Apoio onde você já está",
    badge: "Sempre com você",
    badgeColor: "bg-pink-100 text-pink-700",
    features: [
      "Suporte 24/7 via WhatsApp (90% taxa de leitura vs 15% push)",
      "Check-ins onde você já passa 3+ horas/dia",
      "Tom caloroso e brasileiro: 'Você não está sozinha' 💙",
      "Community insights: contexto sem comparação"
    ],
    metric: {
      value: "53%",
      label: "sentem-se sós na jornada de saúde. Não com Zempi."
    },
    color: "pink"
  }
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-purple-900 uppercase tracking-wide">
              4 Pilares Estratégicos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight" data-testid="benefits-title">
            4 Pilares que Garantem <span className="text-purple-600">Resultados Permanentes</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Não é só perder peso. É <strong className="text-gray-900">transformar sua vida para sempre</strong>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {valuePropositions.map((vp, index) => {
            const IconComponent = vp.icon;
            return (
              <motion.div
                key={vp.id}
                className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`vp-card-${index}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 rounded-2xl bg-${vp.color}-100 flex items-center justify-center`}>
                      <IconComponent className={`h-7 w-7 text-${vp.color}-600`} />
                    </div>
                    <div className="text-4xl">{vp.emoji}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${vp.badgeColor}`}>
                    {vp.badge}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {vp.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {vp.subtitle}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {vp.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${vp.color}-500 mt-2 flex-shrink-0`} />
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Metric */}
                <div className={`pt-6 border-t ${vp.metric.isWarning ? 'border-red-100' : 'border-gray-100'}`}>
                  <div className="flex items-center gap-2">
                    <span className={`text-2xl font-bold ${vp.metric.isWarning ? 'text-red-600' : `text-${vp.color}-600`}`}>
                      {vp.metric.value}
                    </span>
                    <span className="text-sm text-gray-600">
                      {vp.metric.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl">
            <span className="text-sm font-medium">
              💜 Estes 4 pilares trabalham juntos para garantir resultados que duram para sempre
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
