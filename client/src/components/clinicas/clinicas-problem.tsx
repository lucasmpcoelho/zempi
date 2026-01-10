import { motion } from "framer-motion";
import { Users, MessageCircle, Calendar, UserCheck } from "lucide-react";

const funnelSteps = [
  {
    icon: Users,
    number: "100",
    label: "Leads",
    sublabel: "entram no WhatsApp",
    loss: null,
    // Começa forte (Primary)
    colorClass: "bg-primary text-primary-foreground",
    iconColor: "text-primary-foreground",
  },
  {
    icon: MessageCircle,
    number: "50",
    label: "Respondidos",
    sublabel: "recebem resposta",
    loss: "-50%",
    // Perde força
    colorClass: "bg-primary/80 text-primary-foreground",
    iconColor: "text-primary-foreground",
  },
  {
    icon: Calendar,
    number: "35",
    label: "Agendados",
    sublabel: "marcam consulta",
    loss: "-30%",
    // Mais fraco
    colorClass: "bg-primary/60 text-primary-foreground",
    iconColor: "text-primary-foreground",
  },
  {
    icon: UserCheck,
    number: "10",
    label: "Fechados",
    sublabel: "viram pacientes",
    loss: "-70%",
    // Final crítico - Accent/Gold para contraste ou Primary fraco?
    // Vamos usar Accent para destacar o que sobra de valor real, mas como é "pouco", talvez um cinza escuro.
    // Melhor: manter a identidade monocromática que vai "desbotando" para mostrar a perda.
    colorClass: "bg-primary/40 text-primary-foreground",
    iconColor: "text-primary-foreground",
  },
];

export function ClinicasProblem() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-6 block">
            O Problema
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 text-foreground tracking-tight">
            O Funil Invisível que{" "}
            <span className="italic text-muted-foreground/80">Drena Sua Receita</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            A maioria das clínicas perde a maior parte dos leads antes mesmo de uma conversa real.
          </p>
        </motion.div>

        {/* Funnel Visualization */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border -z-10 -translate-y-8" />

            {funnelSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative bg-card p-6 md:p-8 rounded-sm md:rounded-none border-b-2 border-transparent hover:border-primary/20 transition-all group"
              >
                {/* Loss Indicator - Minimalist */}
                {step.loss && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-2 py-1 border border-border rounded-full shadow-sm z-10">
                    <span className="text-[10px] font-medium text-muted-foreground tracking-widest">
                      {step.loss}
                    </span>
                  </div>
                )}

                <div className="text-center">
                  {/* Icon Circle */}
                  <div className={`w-14 h-14 ${step.colorClass} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/5 ring-4 ring-background`}>
                    <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                  </div>

                  {/* Number */}
                  <p className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-3 tracking-tight">
                    {step.number}
                  </p>

                  {/* Label */}
                  <p className="font-medium text-sm text-foreground uppercase tracking-widest mb-2">{step.label}</p>
                  <p className="text-xs text-muted-foreground font-light">{step.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Message - Elegant Alert */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-block border border-primary/20 bg-primary/5 rounded-md px-8 py-6 max-w-2xl">
              <p className="text-foreground font-serif text-xl italic mb-2">
                "De cada 100 leads, apenas 10 viram pacientes."
              </p>
              <p className="text-muted-foreground text-sm font-light">
                O resto é perdido por demora no atendimento e falta de follow-up consistente.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
