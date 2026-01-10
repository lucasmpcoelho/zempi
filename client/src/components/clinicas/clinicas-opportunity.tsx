import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "+1 milhão",
    label: "de brasileiros",
    description: "usando GLP-1 (Ozempic, Mounjaro, Wegovy)",
  },
  {
    icon: DollarSign,
    value: "R$ 960M",
    label: "mercado anual",
    description: "de tratamentos pós-emagrecimento",
  },
  {
    icon: TrendingUp,
    value: "3x",
    label: "mais dispostos",
    description: "a pagar por tratamentos estéticos",
  },
];

export function ClinicasOpportunity() {
  return (
    <section className="py-20 md:py-28 bg-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(26,60,52,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            A Oportunidade
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-foreground">
            O Novo Paciente de Estética:{" "}
            <span className="text-primary italic">Pós-Ozempic</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Uma nova categoria de paciente está surgindo — com alto poder aquisitivo,
            motivação estética e busca ativa por soluções.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="font-medium text-foreground mb-2">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Esses pacientes estão buscando sua clínica <span className="font-medium text-foreground">agora</span>.
            <br />
            A pergunta é: você está respondendo rápido o suficiente?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
