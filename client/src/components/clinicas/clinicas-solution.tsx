import { motion } from "framer-motion";
import { LeadDemoWidget } from "@/components/lead-demo-widget";
import { MessageCircle, Mic, Calendar, CreditCard, UserCheck, Clock } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Resposta Instantânea",
    description: "Atende leads em segundos, 24 horas por dia, 7 dias por semana.",
  },
  {
    icon: Mic,
    title: "Entende Áudios",
    description: "90% das mensagens são áudios. A Ana transcreve e responde.",
  },
  {
    icon: UserCheck,
    title: "Qualificação Inteligente",
    description: "Identifica interesse, orçamento e urgência antes de escalar.",
  },
  {
    icon: Calendar,
    title: "Agendamento Autônomo",
    description: "Consulta sua agenda real e propõe horários disponíveis.",
  },
  {
    icon: CreditCard,
    title: "Cobrança de Sinal",
    description: "Gera Pix automático para sinal, reduzindo no-show em 70%.",
  },
  {
    icon: MessageCircle,
    title: "Handoff Inteligente",
    description: "Escala para humano com resumo completo quando necessário.",
  },
];

export function ClinicasSolution() {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            A Solução
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-foreground">
            Conheça a <span className="text-primary italic">Ana</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Nossa assistente de IA especializada em atendimento para clínicas de estética.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1 text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg"
            >
              <p className="text-sm text-amber-700 dark:text-amber-400">
                <span className="font-medium">Protótipo em desenvolvimento.</span>{" "}
                Clínicas piloto terão acesso prioritário e participação no processo de refinamento.
              </p>
            </motion.div>
          </motion.div>

          {/* Demo Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-accent/10 blur-3xl rounded-full opacity-60" />
              <LeadDemoWidget />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
