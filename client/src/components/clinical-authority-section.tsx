import { motion } from "framer-motion";
import { Stethoscope, Shield, Brain, Users } from "lucide-react";

const pillars = [
  {
    icon: Stethoscope,
    title: "Liderança Médica",
    description: "Fundado por médico clínico com CRM ativo que entende os desafios do tratamento com Ozempic e Mounjaro na prática clínica diária."
  },
  {
    icon: Brain,
    title: "Base Científica",
    description: "IA treinada com protocolos de endocrinologia, guidelines da SBD/ABESO, e milhares de casos reais documentados."
  },
  {
    icon: Shield,
    title: "Segurança Médica",
    description: "Criptografia nível hospitalar (AES-256), conformidade LGPD/CFM/CFN. Servidores no Brasil — seus dados não saem do país."
  },
  {
    icon: Users,
    title: "Expertise Multidisciplinar",
    description: "Time combina medicina clínica com expertise tecnológica de empresas Fortune 500 (McKinsey, Google, Amazon)."
  }
];

export default function ClinicalAuthoritySection() {
  return (
    <section className="py-24 bg-blue-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-sm font-medium text-blue-900">
              Desenvolvido por Especialistas
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Expertise clínica + tecnologia de ponta
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fundado por médicos. Supervisionado por profissionais de saúde certificados.
          </p>
        </motion.div>

        {/* Médico Fundador - Hero Card - TEMPORARIAMENTE OCULTO */}
        {/* TODO: Adicionar foto real e CRM do médico fundador */}
        {false && (
          <motion.div
            className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="grid md:grid-cols-[140px_1fr] gap-8 items-start">
              {/* Foto Placeholder - será substituída por foto real */}
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-200 flex items-center justify-center mx-auto md:mx-0">
                <Stethoscope className="h-12 w-12 text-blue-600" />
              </div>
              
              {/* Bio */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-xs font-semibold text-green-700">
                    CRM Ativo • Supervisão Médica
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Dr. [Nome do Médico]
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  Co-fundador & Chief Medical Officer • CRM [Número]
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Médico clínico com experiência em tratamentos para obesidade e diabetes. 
                  Frustrado com a falta de suporte contínuo aos pacientes em tratamento com 
                  Ozempic e Mounjaro, fundou o Zempi para preencher essa lacuna crítica 
                  no acompanhamento médico.
                </p>
                
                <p className="text-sm text-gray-600 italic">
                  "Pacientes não precisam de mais consultas caras. Precisam de acompanhamento 
                  diário acessível e baseado em evidências entre as consultas."
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* 4 Pilares - Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <pillar.icon className="h-6 w-6 text-blue-600" />
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {pillar.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

