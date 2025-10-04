import { motion } from "framer-motion";
import { Trophy, Flame, Target, Award, Star, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Flame,
    title: "Sequência de 7 dias",
    description: "Check-ins diários completos",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    icon: Trophy,
    title: "Primeira conquista",
    description: "Meta de proteína atingida",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  },
  {
    icon: Star,
    title: "Aderência diamante",
    description: "30 dias sem falhas",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  }
];

const stats = [
  { label: "Pontos acumulados", value: "2.450" },
  { label: "Nível atual", value: "12" },
  { label: "Sequência", value: "23 dias" }
];

export default function GamificationSection() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fluid-h2 font-bold mb-4 text-foreground tracking-tight" data-testid="gamification-title">
            Seu progresso merece ser celebrado
          </h2>
          <p className="fluid-lead text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
            Conquistas, sequências e pontos transformam tratamento em hábito sustentável
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Stats Dashboard */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg" data-testid="gamification-dashboard">
              {/* Progress Ring */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-gray-200"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 88}`}
                      strokeDashoffset={`${2 * Math.PI * 88 * (1 - 0.73)}`}
                      className="text-primary"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold text-primary">73%</div>
                    <div className="text-sm text-muted-foreground mt-1">Meta semanal</div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    data-testid={`gamification-stat-${index}`}
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Achievement Badges */}
              <div className="mt-8 space-y-4">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Conquistas recentes
                </h4>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 p-3 bg-gray-50 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      data-testid={`achievement-${index}`}
                    >
                      <div className={`w-12 h-12 ${achievement.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground text-sm">
                          {achievement.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {achievement.description}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Por que gamificação funciona?
              </h3>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Nosso cérebro responde a recompensas imediatas. Ao transformar aderência em conquistas visíveis, tornamos o tratamento GLP-1 mais engajante e sustentável.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white rounded-2xl p-4 border border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Metas claras e alcançáveis
                  </h4>
                  <p className="text-muted-foreground">
                    Objetivos diários simples que constroem momentum: registrar refeições, bater meta de proteína, tomar água suficiente.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white rounded-2xl p-4 border border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Progresso visível
                  </h4>
                  <p className="text-muted-foreground">
                    Gráficos e badges mostram sua evolução ao longo do tempo, reforçando comportamentos positivos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white rounded-2xl p-4 border border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Reconhecimento constante
                  </h4>
                  <p className="text-muted-foreground">
                    Cada pequena vitória é celebrada. Sequências de 7, 14, 30 dias desbloqueiam novos níveis e benefícios.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-base text-muted-foreground italic">
                "Os pontos e badges me motivam a não quebrar a sequência. Já são 45 dias seguidos!"
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Roberto M., usuário beta</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
