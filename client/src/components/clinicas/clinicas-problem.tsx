import { motion } from "framer-motion";
import { Users, MessageCircle, Calendar, UserCheck } from "lucide-react";

const funnelSteps = [
  {
    icon: Users,
    number: "100",
    label: "Leads",
    sublabel: "entram no WhatsApp",
    loss: null,
    color: "bg-emerald-500",
  },
  {
    icon: MessageCircle,
    number: "50",
    label: "Respondidos",
    sublabel: "recebem resposta",
    loss: "-50%",
    color: "bg-yellow-500",
  },
  {
    icon: Calendar,
    number: "35",
    label: "Agendados",
    sublabel: "marcam consulta",
    loss: "-30%",
    color: "bg-orange-500",
  },
  {
    icon: UserCheck,
    number: "10",
    label: "Fechados",
    sublabel: "viram pacientes",
    loss: "-70%",
    color: "bg-red-500",
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
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            O Problema
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-foreground">
            O Funil Invisível que{" "}
            <span className="text-primary italic">Drena Sua Receita</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            A maioria das clínicas perde a maior parte dos leads antes mesmo de uma conversa real.
          </p>
        </motion.div>

        {/* Funnel Visualization */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {funnelSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Arrow between cards (desktop) */}
                {idx < funnelSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 border-t-2 border-r-2 border-muted-foreground/20 rotate-45" />
                  </div>
                )}

                <div className="bg-card border border-border rounded-xl p-6 text-center relative overflow-hidden group hover:border-primary/30 transition-colors">
                  {/* Loss Badge */}
                  {step.loss && (
                    <div className="absolute top-3 right-3">
                      <span className={`text-xs font-bold ${step.color.replace('bg-', 'text-')}`}>
                        {step.loss}
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Number */}
                  <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {step.number}
                  </p>

                  {/* Label */}
                  <p className="font-medium text-foreground mb-1">{step.label}</p>
                  <p className="text-xs text-muted-foreground">{step.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-lg px-6 py-4">
              <p className="text-red-700 dark:text-red-400 font-medium">
                De cada 100 leads, apenas 10 viram pacientes.
              </p>
              <p className="text-red-600/80 dark:text-red-400/80 text-sm mt-1">
                O resto? Perdido por demora no atendimento e falta de follow-up.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
