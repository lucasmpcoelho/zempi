import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Acompanhamento Profissional
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Preço de lançamento para primeiros usuários
          </p>
        </motion.div>

        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white rounded-2xl border-2 border-gray-900 p-8 sm:p-10 shadow-sm">
            {/* Pricing Header */}
            <div className="text-center mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-2xl text-gray-400 line-through font-medium">
                  R$97
                </span>
                <span className="text-5xl sm:text-6xl font-bold text-gray-900">
                  R$32
                </span>
              </div>
              <p className="text-gray-600 mt-2">por mês</p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <p className="text-sm font-medium text-gray-900 mb-4">
                O que está incluído:
              </p>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-gray-700">
                  Acompanhamento 24/7 via WhatsApp
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-gray-700">
                  IA médica especializada em GLP-1
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-gray-700">
                  Supervisão médica ativa
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-gray-700">
                  Ajustes de dose personalizados
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-gray-700">
                  Gestão de efeitos colaterais
                </span>
              </div>
            </div>

            {/* Footer Note */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Cancele quando quiser, sem multa
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
