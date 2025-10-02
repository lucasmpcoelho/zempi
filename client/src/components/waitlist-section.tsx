import { motion } from "framer-motion";
import WaitlistForm from "./waitlist-form";

export default function WaitlistSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground" data-testid="waitlist-title">
            Cadastre-se na lista de espera
          </h2>
          <p className="text-xl text-muted-foreground">
            Seja dos primeiros a usar o Zempi
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
      </div>
    </section>
  );
}
