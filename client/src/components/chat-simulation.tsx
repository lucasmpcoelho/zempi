import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  isZempi: boolean;
  content: string | JSX.Element;
  time: string;
}

export default function ChatSimulation() {
  const [messages] = useState<Message[]>([
    {
      id: 1,
      isZempi: true,
      content: "Bom dia, Maria! 👋 Notei que você tomou sua dose de Ozempic ontem. Como foi a noite? Conseguiu dormir bem?",
      time: "8:15"
    },
    {
      id: 2,
      isZempi: false,
      content: "Bom dia! Dormi bem, mas estou sentindo um pouco de náusea essa manhã.",
      time: "8:18"
    },
    {
      id: 3,
      isZempi: true,
      content: "Entendi. Analisando seu histórico, vi que você jantou salmão grelhado com batata doce ontem às 20h. A náusea pode estar relacionada à combinação de gordura do peixe + dose recente.",
      time: "8:19"
    },
    {
      id: 4,
      isZempi: true,
      content: (
        <div>
          <p className="text-gray-800 mb-2 font-semibold">Orientações para agora:</p>
          <ul className="space-y-1.5 text-xs mb-3">
            <li className="flex items-start">
              <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-700">Tome 1 copo de água com gengibre (ajuda na náusea)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-700">Café da manhã leve: torrada integral com geleia</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-700">Evite alimentos gordurosos por 48h após a dose</span>
            </li>
          </ul>
          <p className="text-gray-800 font-semibold">💡 Insight:</p>
          <p className="text-gray-700 text-xs">Das últimas 4 vezes que você teve náusea, 3 foram após refeições com salmão ou atum. Vou sugerir proteínas mais leves nos próximos dias.</p>
        </div>
      ),
      time: "8:19"
    },
    {
      id: 5,
      isZempi: false,
      content: "Nossa, muito obrigada! Nem tinha percebido esse padrão. E sobre minha meta de peso?",
      time: "8:22"
    },
    {
      id: 6,
      isZempi: true,
      content: "Você está ótima! Perdeu 8kg em 6 semanas. Mas notei algo importante...",
      time: "8:23"
    },
    {
      id: 7,
      isZempi: true,
      content: (
        <div>
          <p className="text-gray-800 mb-2 font-semibold">⚠️ Alerta de Massa Muscular:</p>
          <p className="text-gray-700 text-xs mb-2">Sua ingestão de proteína está em 0.8g/kg (ideal: 1.6g/kg para GLP-1). Isso pode levar à perda muscular junto com a gordura.</p>
          
          <p className="text-gray-800 font-semibold mb-1 mt-3">💪 Plano personalizado:</p>
          <ul className="space-y-1.5 text-xs mb-2">
            <li className="flex items-start">
              <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-700">Adicione 30g de proteína no café (2 ovos + iogurte grego)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-700">Treino de resistência 3x/semana (já criei seu plano)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-700">Whey protein após treino (20g)</span>
            </li>
          </ul>
          <p className="text-gray-700 text-xs">📈 Com essas mudanças, você mantém músculos enquanto perde gordura.</p>
        </div>
      ),
      time: "8:24"
    },
    {
      id: 8,
      isZempi: false,
      content: "Perfeito! Vou seguir as orientações. Obrigada por cuidar de mim! 💙",
      time: "8:26"
    },
    {
      id: 9,
      isZempi: true,
      content: "É para isso que estou aqui! 😊 Te envio o relatório semanal amanhã e te pergunto às 12h como está a náusea. Bom dia!",
      time: "8:27"
    }
  ]);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Title and Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-foreground tracking-tight" data-testid="chat-title">
              Conversas inteligentes e proativas
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light mb-8" data-testid="chat-description">
              O Zempi analisa padrões no seu tratamento, identifica correlações entre alimentos e sintomas, e oferece insights personalizados que você não conseguiria descobrir sozinho.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start">
                <CheckCircle className="text-primary h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                <p>Detecção automática de padrões alimentares que causam sintomas</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                <p>Alertas de perda muscular com planos de ação personalizados</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                <p>Acompanhamento contínuo baseado no seu histórico completo</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Phone-sized WhatsApp demo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[380px]">
              <div className="bg-white rounded-3xl shadow-2xl border border-border overflow-hidden" data-testid="chat-container">
                {/* WhatsApp-style Chat Header */}
                <div className="bg-primary p-4 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 6 L16 6 L12 12 L16 12 L8 18 L11 12 L8 12 Z" fill="url(#headerGrad)" strokeWidth="1" stroke="url(#headerGrad)" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="headerGrad" x1="0" y1="0" x2="24" y2="24">
                          <stop stopColor="#25D366" />
                          <stop offset="1" stopColor="#128C7E" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">Zempi AI</h3>
                    <div className="text-white/90 text-xs">online</div>
                  </div>
                </div>

                {/* WhatsApp-style Chat Messages */}
                <div className="p-3 space-y-2 bg-[#ECE5DD] h-[650px] overflow-y-auto whatsapp-pattern" data-testid="chat-messages">
                  <AnimatePresence>
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3, duration: 0.4 }}
                        className={`flex ${message.isZempi ? '' : 'justify-end'}`}
                      >
                        {message.isZempi ? (
                          <div className="bg-white rounded-lg rounded-tl-sm p-3 shadow-sm max-w-[85%]">
                            {typeof message.content === 'string' ? (
                              <p className="text-gray-800 text-sm leading-relaxed">{message.content}</p>
                            ) : (
                              <div className="text-sm">{message.content}</div>
                            )}
                            <span className="text-[10px] text-gray-500 block mt-1">{message.time}</span>
                          </div>
                        ) : (
                          <div className="bg-[#DCF8C6] rounded-lg rounded-tr-sm p-3 shadow-sm max-w-[85%]">
                            <p className="text-gray-800 text-sm leading-relaxed">{message.content}</p>
                            <span className="text-[10px] text-gray-500 block mt-1 text-right">{message.time}</span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* WhatsApp-style Input */}
                <div className="p-2 bg-[#F0F0F0] border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="text" 
                      placeholder="Mensagem" 
                      className="flex-1 px-4 py-2 rounded-full bg-white border-0 focus:outline-none text-sm"
                      disabled
                      data-testid="chat-input"
                    />
                    <button 
                      className="w-9 h-9 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
                      data-testid="chat-send-button"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
