import { motion } from "framer-motion";
import WaitlistForm from "./waitlist-form";
import { CheckCircle2, MessageSquare, BarChart, FileText, Stethoscope } from "lucide-react";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900" data-testid="waitlist-title">
            Solicite Acesso ao Programa Piloto
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Estamos selecionando um número limitado de pacientes para o programa piloto,
            garantindo o mais alto padrão de acompanhamento médico personalizado.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <WaitlistForm />
        </motion.div>

        <motion.p 
          className="text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Entraremos em contato em até 48h para avaliar sua elegibilidade
        </motion.p>
      </div>
    </section>
  );
}
