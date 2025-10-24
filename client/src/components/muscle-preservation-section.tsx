import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Target, CheckCircle2 } from "lucide-react";

export default function MusclePreservationSection() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
            <AlertTriangle className="h-4 w-4 text-purple-700" />
            <span className="text-sm font-semibold text-purple-900">
              O Que Ninguém Te Conta Sobre GLP-1
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight leading-tight">
            25-40% do peso perdido pode ser <span className="text-purple-600">músculo, não gordura</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sem acompanhamento adequado, você pode perder definição, força e acelerar o envelhecimento
          </p>
        </motion.div>

        {/* 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Column 1: O Problema */}
          <motion.div
            className="bg-white rounded-3xl p-8 border border-red-100 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
              <TrendingDown className="h-8 w-8 text-red-600" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              O Problema
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Estudos mostram que <strong className="text-red-600">25-40%</strong> do peso perdido com GLP-1 é massa muscular, não apenas gordura.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">Perda de definição corporal</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">Metabolismo mais lento</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">Facilita recuperação de peso</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: As Consequências */}
          <motion.div
            className="bg-white rounded-3xl p-8 border border-orange-100 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              As Consequências
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Perda muscular não tratada leva a resultados que você <strong>não quer</strong>:
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">Pele flácida e "Ozempic face"</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">Fraqueza e fadiga constante</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">Aparência envelhecida prematuramente</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-600">Ossos mais frágeis (osteopenia)</span>
              </div>
            </div>
          </motion.div>

          {/* Column 3: A Solução Zempi */}
          <motion.div
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              A Solução Zempi
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              O <strong className="text-purple-600">único acompanhamento</strong> que quantifica seu risco diariamente:
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700"><strong>Score Muscular Diário</strong> (zona verde/amarela/vermelha)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700"><strong>Meta de proteína personalizada</strong> (1.6g/kg baseado em ciência)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700"><strong>Alertas inteligentes via WhatsApp</strong> quando risco aumenta</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700"><strong>Plano de treino de resistência</strong> adaptado ao seu nível</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scientific Citation */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Baseado em evidência científica</p>
            <p className="text-sm text-gray-700 mb-1">
              "Up to 40% of weight loss from GLP-1 receptor agonists is lean mass loss without adequate protein intake and resistance training"
            </p>
            <p className="text-xs text-gray-500">
              Wilding et al. (2024) • New England Journal of Medicine
            </p>
          </div>
        </motion.div>

        {/* Warm Callout */}
        <motion.div
          className="mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-purple-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <p className="text-2xl font-bold mb-2">
              💪 Você merece perder peso E manter sua força
            </p>
            <p className="text-purple-100">
              Com Zempi, você não precisa escolher entre emagrecer e preservar seus músculos. Dá para ter os dois.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

