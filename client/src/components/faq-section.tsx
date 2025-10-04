import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "O Zempi substitui meu médico?",
    answer: "Não. O Zempi é um assistente complementar que te ajuda no dia a dia do tratamento, mas não substitui consultas e acompanhamento médico profissional. Sempre incentivamos que você mantenha o acompanhamento regular com seu médico."
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Sim! Levamos a privacidade muito a sério. Todos os dados são criptografados e armazenados de acordo com as normas da LGPD. Suas informações nunca são compartilhadas com terceiros sem seu consentimento explícito."
  },
  {
    question: "Como funciona o período de teste?",
    answer: "Oferecemos 14 dias de teste gratuito para você experimentar todos os recursos do Zempi. Não é necessário cartão de crédito para começar. Se gostar, pode escolher um dos nossos planos após o período de teste."
  },
  {
    question: "O Zempi funciona com qual medicação GLP-1?",
    answer: "O Zempi foi desenvolvido para apoiar pacientes usando qualquer medicação da classe GLP-1, incluindo Ozempic, Saxenda, Wegovy, Mounjaro e outras. Nossa IA adapta as orientações de acordo com a medicação específica que você usa."
  },
  {
    question: "Posso usar o Zempi no celular?",
    answer: "Sim! O Zempi funciona perfeitamente em qualquer dispositivo - celular, tablet ou computador. Nossa interface é totalmente responsiva e você pode acessar de onde estiver, a qualquer momento."
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
    <section id="contato" className="py-20 bg-background scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fluid-h2 font-bold mb-3" data-testid="faq-title">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="fluid-lead text-muted-foreground" data-testid="faq-description">
            Tire suas dúvidas sobre o Zempi e como podemos te ajudar.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`faq-item-${index}`}
            >
              <button 
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
                onClick={() => toggleItem(index)}
                data-testid={`faq-question-${index}`}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground leading-relaxed" data-testid={`faq-answer-${index}`}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
