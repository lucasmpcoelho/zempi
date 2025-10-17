import { motion } from "framer-motion";
import { AlertTriangle, Brain, Sparkles, TrendingUp, Clock, Dumbbell } from "lucide-react";

type Stage = {
  key: string;
  label: string;
  phase: string;
  accent: string; // tailwind color name
  cards: Array<{ title: string; description: string; type: "alert" | "insight" | "metric" }>
};

const stages: Stage[] = [
  {
    key: "inicio",
    label: "Começando a jornada",
    phase: "Semana 1-2",
    accent: "blue",
    cards: [
      {
        title: "IA detectou: gatilhos de náusea",
        description:
          "80% dos episódios ligados a peixes gordurosos e refeições tardias",
        type: "alert"
      },
      {
        title: "Recomendação imediata",
        description: "Ajuste de janela alimentar + substituições leves de proteína",
        type: "insight"
      },
      {
        title: "Resultado esperado",
        description: "↓ 60% de náusea nos primeiros 14 dias",
        type: "metric"
      }
    ]
  },
  {
    key: "meio",
    label: "Meio — foco em proteína ideal",
    phase: "Semanas 3-8",
    accent: "purple",
    cards: [
      {
        title: "Gap identificado",
        description: "Ingestão 0.8g/kg → alvo 1.6g/kg para preservar massa",
        type: "alert"
      },
      {
        title: "Plano personalizado",
        description: "Distribuir proteína ao longo do dia + 2 reforços pós-treino",
        type: "insight"
      },
      {
        title: "Métrica de progresso",
        description: "Peso ↓ com massa magra estável (DEXA/medidas)",
        type: "metric"
      }
    ]
  },
  {
    key: "pos",
    label: "Pós — manutenção inteligente",
    phase: "Mês 3+",
    accent: "green",
    cards: [
      {
        title: "Novo padrão",
        description: "Check-ins semanais, foco em consistência e sinais precoces",
        type: "insight"
      },
      {
        title: "Ajuste fino",
        description: "Dose otimizada (−25%) com mesmos resultados e 0 náusea",
        type: "alert"
      },
      {
        title: "Sustentabilidade",
        description: "Rotina de manutenção, recaídas detectadas e corrigidas cedo",
        type: "metric"
      }
    ]
  }
];

export default function InsightsSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-xs font-semibold text-blue-900 tracking-wide">
              ZEMPI AI • Dashboard da sua jornada
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            Como a IA conhece o seu corpo ao longo do tempo
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Um painel vivo com alertas, recomendações e métricas que evoluem com você.
          </p>
        </motion.div>

        {/* Timeline + Stages */}
        <div className="relative">
          {/* Horizontal connector (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200" />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
            {stages.map((stage, index) => (
              <StageCard key={stage.key} stage={stage} index={index} />
            ))}
          </div>
        </div>

        {/* Footnote */}
        <motion.p
          className="text-xs text-gray-500 text-center mt-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Painel ilustrativo. As recomendações são personalizadas a partir dos seus dados
          e revisadas por profissionais de saúde.
        </motion.p>
      </div>
    </section>
  );
}

function StageCard({ stage, index }: { stage: Stage; index: number }) {
  const accentMap: Record<string, { bg: string; text: string; ring: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-700", ring: "ring-blue-200" },
    purple: { bg: "bg-purple-50", text: "text-purple-700", ring: "ring-purple-200" },
    green: { bg: "bg-green-50", text: "text-green-700", ring: "ring-green-200" }
  };
  const colors = accentMap[stage.accent] ?? accentMap.blue;

  const IconForType = (type: Stage["cards"][number]["type"]) => {
    if (type === "alert") return <AlertTriangle className="h-4 w-4 text-red-600" />;
    if (type === "metric") return <TrendingUp className="h-4 w-4 text-green-600" />;
    return <Brain className="h-4 w-4 text-blue-600" />;
  };

  const AccentIcon = () => {
    if (stage.key === "inicio") return <Clock className="h-4 w-4 text-blue-600" />;
    if (stage.key === "meio") return <Dumbbell className="h-4 w-4 text-purple-600" />;
    return <Sparkles className="h-4 w-4 text-green-600" />;
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Connector dot (desktop) */}
      <div className="hidden md:block absolute -top-4 left-1/2 -translate-x-1/2">
        <div className="w-3 h-3 rounded-full bg-white ring-2 ring-gray-300" />
      </div>

      <div className="bg-white rounded-2xl p-6 lg:p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg}`}>
            <AccentIcon />
            <span className={`text-xs font-semibold ${colors.text}`}>{stage.label}</span>
          </div>
          <span className="text-xs text-gray-500 font-medium tracking-wide">{stage.phase}</span>
        </div>

        {/* Mini dashboard blocks */}
        <div className="space-y-3">
          {stage.cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-xl border border-gray-100 p-4 ${
                card.type === "alert"
                  ? "bg-red-50/40"
                  : card.type === "metric"
                  ? "bg-green-50/40"
                  : "bg-blue-50/40"
              }`}
            >
              <div className="flex items-start gap-2">
                {IconForType(card.type)}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 leading-snug">{card.title}</p>
                  <p className="text-sm text-gray-700 mt-1 leading-relaxed">{card.description}</p>

                  {/* Pseudo-visualization */}
                  <div className="mt-3 flex items-end gap-1.5">
                    {Array.from({ length: 12 }).map((_, k) => (
                      <div
                        key={k}
                        className={`w-2 rounded-sm ${
                          card.type === "alert"
                            ? "bg-red-300"
                            : card.type === "metric"
                            ? "bg-green-300"
                            : "bg-blue-300"
                        }`}
                        style={{ height: `${8 + ((k * 11) % 28)}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

