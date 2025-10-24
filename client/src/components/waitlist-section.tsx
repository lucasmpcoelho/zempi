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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <span className="text-sm font-semibold text-purple-900">
              Programa Piloto
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900" data-testid="waitlist-title">
            Solicite Avaliação de Elegibilidade
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            O Zempi é um programa piloto com vagas limitadas. Priorizamos qualidade do acompanhamento acima de crescimento rápido.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* What's Included Box */}
          <div className="bg-purple-50/50 rounded-xl p-6 mb-8 border border-purple-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cada paciente recebe:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Onboarding 1:1 personalizado</p>
                  <p className="text-sm text-gray-600">60 minutos de análise detalhada do seu caso</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Score muscular calculado diariamente</p>
                  <p className="text-sm text-gray-600">Zona verde/amarela/vermelha em tempo real</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Plano nutricional adaptado ao SEU metabolismo</p>
                  <p className="text-sm text-gray-600">Baseado nos seus padrões únicos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Acesso direto à equipe médica via WhatsApp</p>
                  <p className="text-sm text-gray-600">Resposta em minutos, não dias</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              Preencha abaixo e entraremos em contato em até <strong>48 horas</strong> para avaliar se o programa é adequado para você.
            </p>
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
          🔒 Seus dados protegidos com carinho • Conformidade LGPD
        </motion.p>
      </div>
    </section>
  );
}
