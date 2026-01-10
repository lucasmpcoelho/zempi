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
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-6 block">
            A Solução
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 text-foreground tracking-tight">
            Conheça a <span className="text-primary italic">Ana</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Nossa assistente de IA especializada em atendimento para clínicas de estética.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-3 group"
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2 text-base">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">{feature.description}</p>
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
              className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-sm"
            >
              <p className="text-sm text-foreground/80 font-light">
                <span className="font-medium text-primary">Protótipo em desenvolvimento.</span>{" "}
                Clínicas piloto terão acesso prioritário e participação no processo de refinamento.
              </p>
            </motion.div>
          </motion.div>

          {/* Demo Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
             {/* Background Decoration */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/20 rounded-full blur-3xl transform scale-110 opacity-60 pointer-events-none" />
            
            <div className="relative z-10 shadow-2xl rounded-[3rem] overflow-hidden border-4 border-background/50">
              <LeadDemoWidget />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
