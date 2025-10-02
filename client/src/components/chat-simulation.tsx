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
          <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden" data-testid="chat-container">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-6 flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Bot className="text-white h-8 w-8" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Zempi AI</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/90 text-sm">Sempre disponível</span>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4 bg-muted/30 min-h-[500px]" data-testid="chat-messages">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3, duration: 0.4 }}
                    className={`flex items-start space-x-3 ${message.isZempi ? '' : 'justify-end'}`}
                  >
                    {message.isZempi ? (
                      <>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                          <Bot className="text-white h-5 w-5" />
                        </div>
                        <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-md">
                          {typeof message.content === 'string' ? (
                            <p className="text-foreground">{message.content}</p>
                          ) : (
                            message.content
                          )}
                          <span className="text-xs text-muted-foreground mt-2 block">{message.time}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl rounded-tr-sm p-4 shadow-sm max-w-md">
                          <p>{message.content}</p>
                          <span className="text-xs text-white/70 mt-2 block text-right">{message.time}</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <User className="text-muted-foreground h-5 w-5" />
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Chat Input (Mock) */}
            <div className="p-4 bg-white border-t border-border">
              <div className="flex items-center space-x-3">
                <input 
                  type="text" 
                  placeholder="Digite sua mensagem..." 
                  className="flex-1 px-4 py-3 rounded-xl bg-muted border border-input focus:outline-none focus:ring-2 focus:ring-ring"
                  disabled
                  data-testid="chat-input"
                />
                <button 
                  className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                  data-testid="chat-send-button"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
