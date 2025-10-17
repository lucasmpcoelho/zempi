import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Info } from "lucide-react";

export default function GLP1Education() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-blue-50/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-5 flex items-center justify-between hover:bg-blue-50/50 transition-colors group"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Info className="h-5 w-5 text-blue-600" />
              </div>
              <span className="font-semibold text-gray-900 text-left">
                O que são medicações GLP-1?
              </span>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ChevronDown className="h-5 w-5 text-gray-500" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 space-y-4">
                  <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong className="text-gray-900">Ozempic, Mounjaro, Saxenda e Wegovy</strong> são medicações da classe GLP-1 — aprovadas para tratamento de diabetes tipo 2 e obesidade.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Você toma a injeção semanal (ou diária, no caso do Saxenda), mas o <strong className="text-gray-900">sucesso do tratamento depende</strong> de alimentação adequada, exercícios físicos e manejo correto de efeitos colaterais.
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-blue-200">
                    <p className="text-sm font-semibold text-gray-900 mb-2">
                      É aí que o Zempi entra:
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Oferecemos acompanhamento médico contínuo entre as consultas presenciais para maximizar seus resultados, prevenir complicações e garantir que você não fique sozinho durante o tratamento.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

