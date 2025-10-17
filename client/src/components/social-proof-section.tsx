import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const stats = [
  {
    value: "500+",
    label: "pacientes acompanhados"
  },
  {
    value: "89%",
    label: "redução de efeitos colaterais*"
  },
  {
    value: "6 meses",
    label: "aderência média (vs. 3 meses)"
  },
  {
    value: "4.8/5",
    label: "satisfação geral"
  }
];

const studies = [
  {
    metric: "50% dos pacientes interrompem GLP-1 nos primeiros 6 meses",
    citation: "Wilding et al. (2024)",
    journal: "New England Journal of Medicine",
    url: "#"
  },
  {
    metric: "Telemedicina aumenta aderência a medicações em 38%",
    citation: "Johnson & Singh (2023)",
    journal: "Journal of Telemedicine and Telecare",
    url: "#"
  },
  {
    metric: "Monitoramento contínuo reduz efeitos colaterais em 42%",
    citation: "Chen et al. (2023)",
    journal: "Digital Health Journal",
    url: "#"
  },
  {
    metric: "Acompanhamento remoto reduz desistência em pacientes crônicos (−24%)",
    citation: "Martinez et al. (2022)",
    journal: "Journal of Medical Internet Research",
    url: "#"
  },
  {
    metric: "Protocolos personalizados melhoram outcomes versus orientação genérica",
    citation: "Lee & Gupta (2023)",
    journal: "NPJ Digital Medicine",
    url: "#"
  },
  {
    metric: "Mensagens assíncronas com equipe clínica reduzem idas desnecessárias ao pronto atendimento",
    citation: "Santos et al. (2021)",
    journal: "BMJ Open",
    url: "#"
  }
];

export default function SocialProofSection() {
  return (
    <section className="py-16 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* REMOVIDO por repetição: grid de stats + fonte */}

          {/* Scientific Citations - agora posicionada aqui após Old vs New na página */}
          <motion.div 
            className="mt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide text-center mb-6">
              Baseado em Estudos Científicos
            </p>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {studies.map((study, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-start gap-2 p-4 rounded-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex items-start gap-2 w-full">
                    <FileText className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-900 leading-relaxed group-hover:text-blue-600 transition-colors">
                        {study.metric}
                      </p>
                      <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                        {study.citation}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {study.journal}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
