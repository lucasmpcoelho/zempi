import { motion } from "framer-motion";
import WaitlistForm from "./waitlist-form";
import { CheckCircle2, MessageSquare, BarChart, FileText, Stethoscope } from "lucide-react";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900" data-testid="waitlist-title">
            Comece seu acompanhamento
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            R$32/mês durante o lançamento beta. Acompanhamento profissional via WhatsApp com supervisão médica ativa.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Pricing Info Box */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💳</span>
                <div>
                  <p className="text-sm text-gray-600">Investimento</p>
                  <p className="text-lg font-semibold text-gray-900">R$32/mês</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="text-sm text-gray-600">Compromisso</p>
                  <p className="text-lg font-semibold text-gray-900">Mensal, sem fidelidade</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="text-sm text-gray-600">Flexibilidade</p>
                  <p className="text-lg font-semibold text-gray-900">Cancele quando quiser</p>
                </div>
              </div>
            </div>
          </div>

          <WaitlistForm />
        </motion.div>

        <motion.p
          className="text-center text-sm text-gray-500 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Você receberá instruções de acesso em até 24h
        </motion.p>
      </div>
    </section>
  );
}
