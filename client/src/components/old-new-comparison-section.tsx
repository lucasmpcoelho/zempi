import { motion } from "framer-motion";
import { X, CheckCircle2, FileText } from "lucide-react";

export default function OldNewComparisonSection() {
  const oldWay = [
    "Consultas episódicas (≈ a cada 3 meses), baixa continuidade",
    "Orientações genéricas, pouca estratificação de risco",
    "Ausência de monitoramento entre consultas",
    "Eventos adversos detectados tardiamente",
    "Ajustes de dose com baixa instrumentação de dados"
  ];

  const newWay = [
    "Suporte clínico 24/7 via WhatsApp, 365 dias/ano",
    "Protocolo individualizado por histórico, dose e padrões",
    "Check-ins diários nas primeiras 4 semanas (intensidade adaptativa)",
    "IA clínica antecipa gatilhos e orienta manejo preventivo",
    "Ajustes orientados por dados, documentados e revisados"
  ];

  const studies = [
    {
      metric: "50% interrompem GLP-1 nos primeiros 6 meses",
      citation: "Wilding et al. (2024)",
      journal: "New England Journal of Medicine",
      url: "#"
    },
    {
      metric: "Telemedicina aumenta aderência a medicações em 38%",
      citation: "Johnson & Singh (2023)",
      journal: "Journal of Telemedicine and Telecare",
      url: "#"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Apple-style hierarchy */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight leading-tight fluid-h2">
            Manejo do tratamento com GLP-1: modelo tradicional vs acompanhamento Zempi
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light fluid-body">
            Diferença entre prática episódica e acompanhamento clínico contínuo
          </p>
        </motion.div>

        {/* Comparison Cards - Desktop: Side by side, Mobile: Stacked */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 relative">
          {/* VS Badge - Tesla-style centered element */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 shadow-lg flex items-center justify-center">
              <span className="text-sm font-bold text-gray-900">VS</span>
            </div>
          </div>

          {/* OLD WAY - Left Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-red-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-full mb-6">
                <X className="h-4 w-4 text-red-600" />
                <span className="text-xs font-semibold text-red-900 uppercase tracking-wide">
                  Modelo tradicional (episódico)
                </span>
              </div>

              {/* Subtitle - Nubank-style humanized copy */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Prática convencional
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Como a maioria dos pacientes é tratada hoje
              </p>

              {/* List Items */}
              <ul className="space-y-4 mb-8">
                {oldWay.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Result Badge - Tesla-style data presentation */}
              <div className="pt-6 border-t border-red-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Desfecho típico
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-red-600 mb-1">
                  Descontinuação precoce em até 50%
                </p>
                <p className="text-sm text-gray-600">
                  nos primeiros 3 meses
                </p>
              </div>
            </div>
          </motion.div>

          {/* NEW WAY - Right Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full mb-6">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span className="text-xs font-semibold text-green-900 uppercase tracking-wide">
                  Com Zempi — acompanhamento clínico contínuo
                </span>
              </div>

              {/* Subtitle */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Acompanhamento clínico contínuo
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Estrutura clínica com suporte 24/7
              </p>

              {/* List Items */}
              <ul className="space-y-4 mb-8">
                {newWay.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Result Badge */}
              <div className="pt-6 border-t border-green-100">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Desfecho esperado
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">
                  Aderência média ≥ 6 meses
                </p>
                <p className="text-sm text-gray-600">
                  com redução de eventos adversos reportados
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scientific citations intentionally centralized in SocialProofSection to avoid redundancy */}
      </div>
    </section>
  );
}

