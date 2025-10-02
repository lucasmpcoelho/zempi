import { useState, useEffect } from "react";
import { Bot, User, CheckCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  isZempi: boolean;
  content: string | JSX.Element;
  time: string;
}

export default function ChatSimulation() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      isZempi: true,
      content: "Bom dia, Maria! 👋 Como você está se sentindo hoje após tomar sua medicação?",
      time: "8:30"
    },
    {
      id: 2,
      isZempi: false,
      content: "Estou bem, mas senti um pouco de náusea pela manhã.",
      time: "8:32"
    },
    {
      id: 3,
      isZempi: true,
      content: (
        <div>
          <p className="text-foreground mb-3">Entendo. A náusea é um efeito comum nas primeiras semanas. Vou te ajudar com algumas orientações:</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckCircle className="text-green-500 h-4 w-4 mt-1 mr-2 flex-shrink-0" />
              <span>Tome a medicação com alimentos leves</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 h-4 w-4 mt-1 mr-2 flex-shrink-0" />
              <span>Evite alimentos muito gordurosos hoje</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 h-4 w-4 mt-1 mr-2 flex-shrink-0" />
              <span>Beba água regularmente em pequenos goles</span>
            </li>
          </ul>
          <p className="text-foreground mt-3">Se a náusea persistir ou piorar, me avise imediatamente! 🏥</p>
        </div>
      ),
      time: "8:33"
    },
    {
      id: 4,
      isZempi: true,
      content: "Já adicionei estas orientações ao seu plano personalizado. Vou te perguntar novamente às 14h como está se sentindo. 💙",
      time: "8:34"
    }
  ]);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="chat-title">
            Conversas <span className="gradient-text">inteligentes e proativas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="chat-description">
            O Zempi inicia conversas ao longo do dia para entender sua experiência e fornecer orientações personalizadas em tempo real.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden" data-testid="chat-container">
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
            <div className="p-4 space-y-2 bg-[#ECE5DD] min-h-[500px] whatsapp-pattern" data-testid="chat-messages">
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
                      <div className="bg-white rounded-lg rounded-tl-sm p-3 shadow-sm max-w-[75%]">
                        {typeof message.content === 'string' ? (
                          <p className="text-gray-800 text-sm">{message.content}</p>
                        ) : (
                          <div className="text-sm">
                            <p className="text-gray-800 mb-2">Entendo. A náusea é um efeito comum nas primeiras semanas. Vou te ajudar com algumas orientações:</p>
                            <ul className="space-y-1.5 text-xs">
                              <li className="flex items-start">
                                <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">Tome a medicação com alimentos leves</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">Evite alimentos muito gordurosos hoje</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="text-primary h-3.5 w-3.5 mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-gray-700">Beba água regularmente em pequenos goles</span>
                              </li>
                            </ul>
                            <p className="text-gray-800 mt-2">Se a náusea persistir ou piorar, me avise imediatamente! 🏥</p>
                          </div>
                        )}
                        <span className="text-[10px] text-gray-500 block mt-1">{message.time}</span>
                      </div>
                    ) : (
                      <div className="bg-[#DCF8C6] rounded-lg rounded-tr-sm p-3 shadow-sm max-w-[75%]">
                        <p className="text-gray-800 text-sm">{message.content}</p>
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
                  className="flex-1 px-4 py-2.5 rounded-full bg-white border-0 focus:outline-none text-sm"
                  disabled
                  data-testid="chat-input"
                />
                <button 
                  className="w-10 h-10 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center"
                  data-testid="chat-send-button"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
