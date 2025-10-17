import { motion } from "framer-motion";
import { User, Target, Activity, Brain, Sparkles, TrendingUp } from "lucide-react";

const personaProfiles = [
  {
    icon: User,
    name: "Maria, 42 anos",
    challenge: "Náusea frequente",
    color: "from-blue-500 to-blue-600",
    adaptations: [
      "IA identifica que peixes gordurosos causam náusea",
      "Sugere proteínas alternativas mais leves",
      "Alerta preventivo antes de refeições de risco",
      "Ajusta timing de medicação vs. refeições"
    ]
  },
  {
    icon: Activity,
    name: "Carlos, 38 anos",
    challenge: "Perda muscular",
    color: "from-purple-500 to-purple-600",
    adaptations: [
      "Detecta baixa ingestão de proteína (0.8g/kg)",
      "Cria plano personalizado: 1.6g/kg",
      "Recomenda treino de resistência 3x/semana",
      "Monitora composição corporal semanalmente"
    ]
  },
  {
    icon: Target,
    name: "Ana, 35 anos",
    challenge: "Baixa aderência",
    color: "from-green-500 to-green-600",
    adaptations: [
      "Check-ins diários no horário preferido (8h)",
      "Gamificação com metas alcançáveis",
      "Celebra pequenas vitórias constantemente",
      "Conecta com grupo de apoio compatível"
    ]
  }
];

const aiCapabilities = [
  {
    icon: Brain,
    title: "Análise de padrões individuais",
    description: "A IA estuda SEUS dados para identificar correlações únicas entre alimentos, sintomas e progresso"
  },
  {
    icon: Sparkles,
    title: "Insights personalizados",
    description: "Descobre padrões que você não perceberia sozinho: \"Das últimas 4x que teve náusea, 3 foram após salmão\""
  },
  {
    icon: TrendingUp,
    title: "Adaptação contínua",
    description: "O sistema aprende com você ao longo do tempo, refinando orientações baseado no que funciona para SEU corpo"
  }
];

export default function PersonalizationSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Hiper-personalização
            </span>
          </div>
          
          <h2 className="fluid-h2 font-bold mb-6 text-foreground tracking-tight" data-testid="personalization-title">
            Sua jornada é única. <br/>
            <span className="gradient-text">Seu acompanhamento também deve ser.</span>
          </h2>
          <p className="fluid-lead text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            O Zempi não oferece orientações genéricas. Nossa IA analisa <strong className="text-foreground">SEU</strong> histórico, <strong className="text-foreground">SEUS</strong> sintomas, <strong className="text-foreground">SEU</strong> progresso para criar um plano específico para você.
          </p>
        </motion.div>

        {/* Persona Examples */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Cada pessoa recebe um tratamento diferente
            </h3>
            <p className="text-lg text-muted-foreground">
              Veja como o Zempi se adapta para necessidades específicas
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {personaProfiles.map((profile, index) => (
              <motion.div
                key={profile.name}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                data-testid={`persona-card-${index}`}
              >
                {/* Gradient background effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-3xl blur transition duration-300"
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-stops))`
                  }}
                />
                
                <div className="relative bg-white rounded-2xl border-2 border-gray-100 p-8 h-full hover:border-primary/20 transition-all">
                  {/* Header with icon and gradient */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${profile.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <profile.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {profile.name}
                  </h4>
                  
                  <div className="inline-block px-3 py-1 bg-red-50 rounded-full mb-6">
                    <span className="text-sm font-semibold text-red-600">
                      Desafio: {profile.challenge}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                      Como o Zempi se adapta:
                    </p>
                    
                    {profile.adaptations.map((adaptation, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {adaptation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Capabilities */}
        <motion.div
          className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Como funciona a personalização?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologia de IA avançada que transforma dados em insights acionáveis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className="bg-white rounded-2xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`ai-capability-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {capability.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            className="mt-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-xl sm:text-2xl font-semibold text-foreground mb-4 leading-relaxed">
                "Não é uma solução genérica de IA. É um sistema que realmente entende <span className="gradient-text">VOCÊ</span>."
              </p>
              <p className="text-sm text-muted-foreground">
                — Juliana R., usuária beta
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg sm:text-xl text-foreground font-semibold mb-2">
              🎯 Seu corpo é único. Seu tratamento deve ser também.
            </p>
            <p className="text-muted-foreground">
              Comece hoje e veja como a personalização faz toda a diferença
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

