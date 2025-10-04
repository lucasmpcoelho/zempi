import { motion } from "framer-motion";
import WaitlistForm from "./waitlist-form";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fluid-h2 font-bold mb-4 text-foreground tracking-tight" data-testid="waitlist-title">
            Não desperdice seu tratamento GLP-1
          </h2>
          <p className="fluid-lead text-muted-foreground font-light max-w-2xl mx-auto">
            50% dos pacientes desistem nos primeiros 3 meses. Seja diferente. Entre na lista de espera e receba acesso prioritário ao Zempi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <WaitlistForm />
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Vagas limitadas na primeira fase • Acesso gratuito aos primeiros 100 usuários
        </p>
      </div>
    </section>
  );
}
