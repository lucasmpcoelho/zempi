import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, BarChart, FileText, Stethoscope } from "lucide-react";

export default function WhatsIncludedSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            O que você recebe no acompanhamento
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Transparência total sobre o programa. Sem surpresas.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="space-y-6">
              {/* Daily Monitoring */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900">
                    Acompanhamento Diário (via WhatsApp)
                  </h4>
                </div>
                <div className="pl-10 space-y-2">
                  <Item>Check-ins personalizados baseados no seu progresso</Item>
                  <Item>Análise de sintomas e padrões em tempo real</Item>
                  <Item>Ajustes imediatos quando necessário</Item>
                </div>
              </div>

              {/* Weekly Analysis */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                    <BarChart className="h-4 w-4 text-purple-600" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900">
                    Análises Semanais
                  </h4>
                </div>
                <div className="pl-10 space-y-2">
                  <Item>Revisão detalhada dos últimos 7 dias</Item>
                  <Item>Identificação de gatilhos e padrões emergentes</Item>
                  <Item>Ajustes no protocolo se necessário</Item>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              {/* Monthly Reports */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-green-600" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900">
                    Relatórios Mensais Completos
                  </h4>
                </div>
                <div className="pl-10 space-y-2">
                  <Item>Visão panorâmica do seu progresso</Item>
                  <Item>Métricas de aderência e resultados</Item>
                  <Item>Relatório para levar ao seu endocrinologista</Item>
                </div>
              </div>

              {/* Medical Support */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                    <Stethoscope className="h-4 w-4 text-red-600" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900">
                    Suporte Médico Especializado
                  </h4>
                </div>
                <div className="pl-10 space-y-2">
                  <Item>Supervisão por profissional certificado</Item>
                  <Item>Revisão semanal do seu caso</Item>
                  <Item>Detecção precoce de complicações</Item>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="#waitlist"
              className="inline-block px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all hover:shadow-lg"
            >
              Solicitar Acesso Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
      <span className="text-sm text-gray-700 leading-relaxed">{children}</span>
    </div>
  );
}
