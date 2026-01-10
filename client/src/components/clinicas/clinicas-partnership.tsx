import { motion } from "framer-motion";
import { Check, Handshake } from "lucide-react";

const weOffer = [
  "Implementação gratuita da IA",
  "Customização para sua clínica",
  "Treinamento da equipe",
  "Dashboard de métricas",
  "Consultoria em protocolos GLP-1",
  "Suporte dedicado",
];

const weAsk = [
  "Acesso aos dados de leads",
  "Compromisso com implementação",
  "Feedback honesto e frequente",
  "% do EBITDA incremental",
];

export function ClinicasPartnership() {
  return (
    <section className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            O Modelo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-foreground">
            Risco Zero.{" "}
            <span className="text-primary italic">Resultados Compartilhados.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Acreditamos no modelo "Prove Value First". Só ganhamos se você vender mais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* What We Offer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Handshake className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium text-foreground">
                O Que Oferecemos
              </h3>
            </div>
            <ul className="space-y-4">
              {weOffer.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Investimento nosso:</span>{" "}
                ~R$ 50-100k em setup e tecnologia
              </p>
            </div>
          </motion.div>

          {/* What We Ask */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Handshake className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-medium text-foreground">
                O Que Pedimos
              </h3>
            </div>
            <ul className="space-y-4">
              {weAsk.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Duração do piloto:</span>{" "}
                6 meses de validação conjunta
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-primary/5 border border-primary/20 rounded-lg px-6 py-4">
            <p className="text-primary font-medium text-lg">
              Se não gerar resultado, você não paga nada.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
