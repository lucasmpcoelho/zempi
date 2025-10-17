import { useState } from "react";
import { ChevronDown, Info, Stethoscope, Shield, DollarSign, Users, Pill, HelpCircle, UserCheck, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  // Philosophical Questions - Addressing objections
  {
    icon: HelpCircle,
    question: "Eu realmente preciso de acompanhamento contínuo?",
    answer: {
      main: "Não é sobre precisar. É sobre otimizar.",
      secondary: "Você PODE fazer sozinho, mas considere: 50% desistem sem suporte (NEJM, 2024), efeitos colaterais evitáveis se detectados cedo, R$2.400+ economizados em consultas extras/ano, resultados 2-3x melhores com acompanhamento.",
      highlight: "É como ter seguro de saúde: você espera não precisar, mas quando precisa, faz toda a diferença. No Zempi, você não está sozinho na jornada."
    },
    isPhilosophical: true
  },
  {
    icon: UserCheck,
    question: "Isso não substitui meu endocrinologista?",
    answer: {
      main: "Jamais. Zempi COMPLEMENTA seu endocrino, nunca substitui.",
      secondary: "Pense assim: seu endocrinologista define estratégia trimestral, ajusta doses, monitora exames laboratoriais. Zempi oferece suporte diário na execução, identificação de padrões, manejo de efeitos colaterais, orientações entre as consultas.",
      highlight: "Trabalhamos JUNTO com seu médico. Inclusive, fornecemos relatórios mensais detalhados para você levar às suas consultas presenciais."
    },
    isPhilosophical: true
  },
  {
    icon: TrendingUp,
    question: "Vou ficar dependente desse acompanhamento?",
    answer: {
      main: "Pelo contrário. Nosso objetivo é tornar você AUTÔNOMO no seu tratamento.",
      secondary: "Cronograma típico: Mês 1-2 check-ins diários (fase de aprendizado), Mês 3-4 check-ins 3x/semana (você já domina), Mês 5-6 check-ins semanais (manutenção), Mês 7+ check-ins quinzenais ou quando você sentir necessidade (autonomia completa).",
      highlight: "Conforme você domina seu tratamento e conhece seu corpo, reduzimos a frequência naturalmente. Você sempre terá suporte disponível, mas não será refém dele."
    },
    isPhilosophical: true
  },
  // Technical Questions
  {
    icon: Info,
    question: "O que são medicações GLP-1?",
    answer: {
      main: "Ozempic, Mounjaro, Saxenda e Wegovy são medicações da classe GLP-1 — aprovadas para tratamento de diabetes tipo 2 e obesidade.",
      secondary: "Você toma a injeção semanal (ou diária, no caso do Saxenda), mas o sucesso do tratamento depende de alimentação adequada, exercícios físicos e manejo correto de efeitos colaterais.",
      highlight: "É aí que o Zempi entra: Oferecemos acompanhamento médico contínuo entre as consultas presenciais para maximizar seus resultados, prevenir complicações e garantir que você não fique sozinho durante o tratamento."
    },
    isHighlight: true
  },
  {
    icon: Stethoscope,
    question: "Tem médicos de verdade? Ou é só IA?",
    answer: {
      main: "O Zempi foi fundado por médicos e é supervisionado por profissionais de saúde certificados. A IA é treinada com casos reais e protocolos médicos, mas orientações críticas são sempre revisadas por especialistas.",
      highlight: "Não substituímos seu endocrinologista — complementamos com acompanhamento contínuo entre as consultas."
    }
  },
  {
    icon: Pill,
    question: "Funciona com Ozempic, Mounjaro e Saxenda?",
    answer: {
      main: "Sim. O Zempi foi desenvolvido especificamente para Ozempic, Mounjaro, Saxenda, Wegovy e outras medicações para perda de peso. Nossa IA é treinada com milhares de casos reais dessas medicações."
    }
  },
  {
    icon: Shield,
    question: "Meus dados estão seguros?",
    answer: {
      main: "Sim. Usamos criptografia nível hospitalar (AES-256) e conformidade total com LGPD. Seus dados nunca são compartilhados com terceiros.",
      highlight: "Servidores no Brasil — suas informações não saem do país."
    }
  },
  {
    icon: Users,
    question: "Como funciona o programa piloto?",
    answer: {
      main: "Estamos aceitando um número limitado de pacientes para garantir atendimento personalizado de qualidade.",
      secondary: "Processo: (1) você solicita acesso, (2) avaliamos seu perfil em até 48h, (3) onboarding individualizado com especialista, (4) acompanhamento contínuo via WhatsApp."
    }
  },
  {
    icon: DollarSign,
    question: "Quanto custa?",
    answer: {
      main: "O investimento será definido conforme seu perfil durante o programa piloto. Oferecemos 14 dias de teste sem compromisso para você avaliar se o Zempi faz sentido para você."
    }
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="contato" className="py-24 bg-blue-50/30 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900" data-testid="faq-title">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-gray-600" data-testid="faq-description">
            Tudo o que você precisa saber
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            const isPhilosophical = faq.isPhilosophical;
            const isHighlight = faq.isHighlight;
            
            // Styling based on type
            const borderColor = isPhilosophical 
              ? "border-blue-200" 
              : isHighlight 
              ? "border-blue-100" 
              : "border-gray-200";
            const hoverBg = isPhilosophical 
              ? "hover:bg-blue-50" 
              : isHighlight 
              ? "hover:bg-blue-50/50" 
              : "hover:bg-gray-50";
            const iconBg = isPhilosophical 
              ? "bg-blue-100" 
              : isHighlight 
              ? "bg-blue-100" 
              : "bg-gray-100";
            // All icons should be blue for consistency
            const iconColor = "text-blue-600";
            const cardBg = isPhilosophical ? "bg-blue-50/50" : "bg-white";
            
            // Add divider before technical questions
            const showDivider = index === 3 && index > 0;
            
            return (
              <>
                {showDivider && (
                  <div className="py-4">
                    <div className="border-t border-gray-200" />
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide text-center mt-6 mb-2">
                      Perguntas Técnicas
                    </p>
                  </div>
                )}
                <motion.div
                  key={index}
                  className={`${cardBg} rounded-2xl border ${borderColor} overflow-hidden hover:border-gray-300 transition-colors shadow-sm`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                data-testid={`faq-item-${index}`}
              >
                <button 
                  className={`w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between ${hoverBg} transition-colors group min-h-[56px]`}
                  onClick={() => toggleItem(index)}
                  data-testid={`faq-question-${index}`}
                  aria-expanded={openItems.includes(index)}
                >
                  <div className="flex items-center gap-2 sm:gap-3 flex-1">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${iconBg} flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0`}>
                      <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 ${iconColor}`} />
                    </div>
                    <span className="font-semibold text-gray-900 pr-2 sm:pr-4 text-sm sm:text-base">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-6 w-6 sm:h-5 sm:w-5 text-gray-500" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 space-y-4" data-testid={`faq-answer-${index}`}>
                        {typeof faq.answer === 'string' ? (
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        ) : (
                          <>
                            {faq.answer.main && (
                              <div className={`${isHighlight ? 'bg-blue-50/50 rounded-xl p-5 border border-blue-100' : ''}`}>
                                <p className="text-gray-700 leading-relaxed">
                                  {faq.answer.main}
                                </p>
                                {faq.answer.secondary && (
                                  <p className="text-gray-700 leading-relaxed mt-3">
                                    {faq.answer.secondary}
                                  </p>
                                )}
                              </div>
                            )}
                            {faq.answer.highlight && (
                              <div className={`${isHighlight ? 'pl-4 border-l-2 border-blue-200' : ''}`}>
                                {isHighlight && (
                                  <p className="text-sm font-semibold text-gray-900 mb-2">
                                    É aí que o Zempi entra:
                                  </p>
                                )}
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {faq.answer.highlight.replace('É aí que o Zempi entra: ', '')}
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
