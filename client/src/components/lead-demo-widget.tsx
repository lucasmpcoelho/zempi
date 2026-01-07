import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, Check, CheckCheck, Clock, Bot, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
    id: string;
    sender: "user" | "agent";
    content: string;
    timestamp: string;
    status?: "sent" | "delivered" | "read";
}

const conversationFlow: Message[] = [
    {
        id: "1",
        sender: "user",
        content: "Olá, gostaria de saber o valor do Botox.",
        timestamp: "10:42",
        status: "read"
    },
    {
        id: "2",
        sender: "agent",
        content: "Olá! Sou a Ana, assistente da Clínica. O valor depende da avaliação, mas temos planos a partir de R$ 1.200 com retorno incluso. ✨",
        timestamp: "10:42",
        status: "read"
    },
    {
        id: "3",
        sender: "agent",
        content: "Você já realizou esse procedimento antes ou seria a primeira vez?",
        timestamp: "10:42",
        status: "read"
    },
    {
        id: "4",
        sender: "user",
        content: "Já fiz sim, mas faz tempo. Queria marcar para essa semana.",
        timestamp: "10:43",
        status: "read"
    },
    {
        id: "5",
        sender: "agent",
        content: "Entendi! Tenho um horário disponível na Quinta às 14h e outro na Sexta às 10h. Qual prefere?",
        timestamp: "10:43",
        status: "read"
    },
    {
        id: "6",
        sender: "user",
        content: "Quinta às 14h fica ótimo.",
        timestamp: "10:44",
        status: "read"
    },
    {
        id: "7",
        sender: "agent",
        content: "Fechado! Quinta às 14h. Para confirmar, preciso apenas do seu CPF para o cadastro prévio. 😊",
        timestamp: "10:44",
        status: "read"
    }
];

export function LeadDemoWidget() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex >= conversationFlow.length) {
            // Reset conversation after delay
            const timeout = setTimeout(() => {
                setMessages([]);
                setCurrentIndex(0);
            }, 5000);
            return () => clearTimeout(timeout);
        }

        const currentMessage = conversationFlow[currentIndex];
        const isAgent = currentMessage.sender === "agent";

        let delay = 1000;
        if (isAgent) delay = 1500; // Agent "thinks" a bit
        if (currentIndex === 0) delay = 500;

        const timer = setTimeout(() => {
            if (isAgent) {
                setIsTyping(true);
                setTimeout(() => {
                    setIsTyping(false);
                    setMessages(prev => [...prev, currentMessage]);
                    setCurrentIndex(prev => prev + 1);
                }, 1000);
            } else {
                setMessages(prev => [...prev, currentMessage]);
                setCurrentIndex(prev => prev + 1);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className="w-full max-w-md mx-auto bg-white dark:bg-zinc-950 rounded-[2.5rem] border-[8px] border-zinc-900 shadow-2xl overflow-hidden h-[600px] relative">
            {/* Phone Header */}
            <div className="bg-zinc-100 dark:bg-zinc-900 px-6 py-4 border-b dark:border-zinc-800 flex items-center justify-between z-10 relative">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <Bot className="w-6 h-6 text-primary" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">Ana (IA)</h3>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                            Online agora
                        </span>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="p-4 space-y-4 h-full overflow-y-auto pb-32 bg-[#e5ddd5] dark:bg-zinc-900/50 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]"
                    style={{ backgroundImage: "url('https://site-assets.fontawesome.com/releases/v6.5.1/svgs/solid/message-lines.svg')", backgroundSize: "200px" }}
                />

                <AnimatePresence mode="popLayout">
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            layout
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] rounded-2xl px-4 py-2.5 shadow-sm relative text-sm
                  ${msg.sender === 'user'
                                        ? 'bg-[#dcf8c6] dark:bg-emerald-700/30 text-zinc-800 dark:text-zinc-100 rounded-tr-none'
                                        : 'bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 rounded-tl-none'
                                    }`}
                            >
                                <p className="leading-relaxed">{msg.content}</p>
                                <div className="flex justify-end items-center gap-1 mt-1 opacity-70">
                                    <span className="text-[10px]">{msg.timestamp}</span>
                                    {msg.sender === 'user' && (
                                        <CheckCheck className="w-3 h-3 text-blue-500" />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                    >
                        <div className="bg-white dark:bg-zinc-800 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex gap-1.5 items-center">
                            <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                            <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                            <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" />
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Input Area (Fake) */}
            <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t dark:border-zinc-800 p-4">
                <div className="flex items-center gap-2">
                    <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 h-10 rounded-full px-4 flex items-center text-muted-foreground text-sm">
                        Digite uma mensagem...
                    </div>
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                        <Send className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}
