import { useState, useEffect, useRef } from "react";
import { CheckCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  isZempi: boolean;
  content: string | JSX.Element;
  time: string;
}

const allMessages: Message[] = [
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
        <p className="text-gray-800 mb-2 font-semibold text-sm">Orientações para agora:</p>
        <ul className="space-y-1.5 mb-3">
          <li className="flex items-start">
            <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700 text-sm">Tome 1 copo de água com gengibre (ajuda na náusea)</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700 text-sm">Café da manhã leve: torrada integral com geleia</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700 text-sm">Evite alimentos gordurosos por 48h após a dose</span>
          </li>
        </ul>
        <p className="text-gray-800 font-semibold text-sm">💡 Insight:</p>
        <p className="text-gray-700 text-sm">Das últimas 4 vezes que você teve náusea, 3 foram após refeições com salmão ou atum. Vou sugerir proteínas mais leves nos próximos dias.</p>
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
        <p className="text-gray-800 mb-2 font-semibold text-sm">⚠️ Alerta de Massa Muscular:</p>
        <p className="text-gray-700 text-sm mb-2">Sua ingestão de proteína está em 0.8g/kg (ideal: 1.6g/kg para GLP-1). Isso pode levar à perda muscular junto com a gordura.</p>
        
        <p className="text-gray-800 font-semibold mb-1 mt-3 text-sm">💪 Plano personalizado:</p>
        <ul className="space-y-1.5 mb-2">
          <li className="flex items-start">
            <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700 text-sm">Adicione 30g de proteína no café (2 ovos + iogurte grego)</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700 text-sm">Treino de resistência 3x/semana (já criei seu plano)</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700 text-sm">Whey protein após treino (20g)</span>
          </li>
        </ul>
        <p className="text-gray-700 text-sm">📈 Com essas mudanças, você mantém músculos enquanto perde gordura.</p>
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
];

export default function ChatSimulation() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    hasStartedRef.current = false;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedRef.current) {
            hasStartedRef.current = true;
            startConversation();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      timeoutRefs.current.forEach(clearTimeout);
    };
  }, []);

  const startConversation = () => {
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];
    
    let currentIndex = 0;

    const addNextMessage = () => {
      if (currentIndex >= allMessages.length) {
        return;
      }

      const nextMessage = allMessages[currentIndex];
      
      if (nextMessage.isZempi) {
        setIsTyping(true);
        const typingTimeout = setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => [...prev, nextMessage]);
          currentIndex++;
          
          if (currentIndex < allMessages.length) {
            const nextTimeout = setTimeout(addNextMessage, 1200);
            timeoutRefs.current.push(nextTimeout);
          }
        }, 1500);
        timeoutRefs.current.push(typingTimeout);
      } else {
        const userTimeout = setTimeout(() => {
          setVisibleMessages((prev) => [...prev, nextMessage]);
          currentIndex++;
          
          if (currentIndex < allMessages.length) {
            const nextTimeout = setTimeout(addNextMessage, 800);
            timeoutRefs.current.push(nextTimeout);
          }
        }, 600);
        timeoutRefs.current.push(userTimeout);
      }
    };

    addNextMessage();
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleMessages, isTyping]);

  return (
    <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[380px]">
              <div className="bg-white rounded-3xl shadow-2xl border border-border overflow-hidden" data-testid="chat-container">
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

                <div className="p-3 space-y-2 bg-[#ECE5DD] h-[650px] overflow-y-auto whatsapp-pattern" data-testid="chat-messages">
                  <AnimatePresence mode="popLayout">
                    {visibleMessages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.isZempi ? '' : 'justify-end'}`}
                      >
                        {message.isZempi ? (
                          <div className="bg-white rounded-lg rounded-tl-sm p-3 shadow-sm max-w-[85%]">
                            {typeof message.content === 'string' ? (
                              <p className="text-gray-800 text-sm leading-relaxed">{message.content}</p>
                            ) : (
                              <div>{message.content}</div>
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
                    
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex"
                      >
                        <div className="bg-white rounded-lg rounded-tl-sm p-3 shadow-sm">
                          <div className="flex space-x-1">
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div ref={chatEndRef} />
                </div>

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
