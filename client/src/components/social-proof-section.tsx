import { motion } from "framer-motion";
import { TrendingUp, Users, Star, Activity } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "73%",
    label: "dos usuários relatam melhor aderência ao tratamento"
  },
  {
    icon: Users,
    value: "89%",
    label: "conseguem gerenciar efeitos colaterais com mais facilidade"
  },
  {
    icon: Star,
    value: "4.8/5",
    label: "estrelas de satisfação média"
  },
  {
    icon: Activity,
    value: "6 meses",
    label: "média de uso contínuo (vs. 3 meses média nacional)"
  }
];

export default function SocialProofSection() {
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
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight" data-testid="social-proof-title">
            Suporte real leva a resultados reais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Pacientes com acompanhamento contínuo têm significativamente mais sucesso no tratamento GLP-1
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`stat-card-${index}`}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <stat.icon className="text-primary h-8 w-8" />
                </div>
              </div>
              <div className="text-5xl font-bold text-primary mb-3">{stat.value}</div>
              <p className="text-muted-foreground leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
