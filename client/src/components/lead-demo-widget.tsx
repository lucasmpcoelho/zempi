import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, CheckCheck, Sparkles, Bot } from "lucide-react";

interface Message {
    id: string;
    sender: "user" | "agent";
    content: string;
    timestamp: string;
}

const conversationFlow: Message[] = [
    {
        id: "1",
        sender: "user",
        content: "Olá, gostaria de saber o valor do protocolo de harmonização.",
        timestamp: "10:42",
    },
    {
        id: "2",
        sender: "agent",
        content: "Olá! Sou a Ana. O valor varia conforme a avaliação personalizada, mas nossos protocolos completos iniciam em R$ 2.500. ✨",
        timestamp: "10:42",
    },
    {
        id: "3",
        sender: "user",
        content: "Entendi. Vocês tem horário para avaliação?",
        timestamp: "10:43",
    },
    {
        id: "4",
        sender: "agent",
        content: "Sim! A Dra. Julia tem um horário exclusivo nesta Quinta às 14h. Posso reservar para você?",
        timestamp: "10:43",
    },
    {
        id: "5",
        sender: "user",
        content: "Pode ser.",
        timestamp: "10:44",
    },
    {
        id: "6",
        sender: "agent",
        content: "Perfeito. Sua avaliação está confirmada para Quinta, 14h. Enviei os detalhes por e-mail. Obrigada! 💎",
        timestamp: "10:44",
    }
];

export function LeadDemoWidget() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex >= conversationFlow.length) {
            const timeout = setTimeout(() => {
                setMessages([]);
                setCurrentIndex(0);
            }, 8000);
            return () => clearTimeout(timeout);
        }

        const currentMessage = conversationFlow[currentIndex];
        const isAgent = currentMessage.sender === "agent";
        let delay = isAgent ? 1200 : 800; // Natural pacing
        if (currentIndex === 0) delay = 500;

        const timer = setTimeout(() => {
            if (isAgent) {
                setIsTyping(true);
                setTimeout(() => {
                    setIsTyping(false);
                    setMessages(prev => [...prev, currentMessage]);
                    setCurrentIndex(prev => prev + 1);
                }, 1500); // "Thinking" time
            } else {
                setMessages(prev => [...prev, currentMessage]);
                setCurrentIndex(prev => prev + 1);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className="w-full max-w-[380px] mx-auto bg-white dark:bg-zinc-950 rounded-[40px] shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden h-[600px] relative font-sans">
            {/* Minimal Header */}
            <div className="absolute top-0 left-0 right-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md z-20 px-6 py-5 flex items-center gap-4 border-b border-zinc-100 dark:border-zinc-900">
                <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                        <Bot className="w-6 h-6" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-[3px] border-white dark:border-zinc-950 rounded-full" />
                </div>
                <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-[15px] flex items-center gap-1.5">
                        Ana (IA)
                        <Sparkles className="w-3 h-3 text-emerald-500" />
                    </h3>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                        Respondendo instantaneamente
                    </span>
                </div>
            </div>

            {/* Chat Area */}
            <div className="h-full pt-20 pb-20 px-5 overflow-y-auto bg-zinc-50/50 dark:bg-zinc-900/30 scrollbar-hide">
                <AnimatePresence mode="popLayout">
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            layout
                            className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[85%] px-5 py-3.5 shadow-sm text-[14px] leading-relaxed relative group
                                ${msg.sender === 'user'
                                        ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-[20px] rounded-br-sm'
                                        : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-100 dark:border-zinc-700 rounded-[20px] rounded-bl-sm'
                                    }`}
                            >
                                {msg.content}
                                <div className={`flex items-center gap-1 text-[10px] mt-1.5 opacity-60 ${msg.sender === 'user' ? 'justify-end text-zinc-300 dark:text-zinc-600' : 'justify-start text-zinc-400'}`}>
                                    {msg.timestamp}
                                    {msg.sender === 'user' && <CheckCheck className="w-3 h-3" />}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start mb-4"
                    >
                        <div className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-[20px] rounded-bl-sm px-4 py-3 flex gap-1.5 items-center shadow-sm">
                            <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                            <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                            <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" />
                        </div>
                    </motion.div>
                )}

                <div className="h-4" /> {/* Spacer */}
            </div>

            {/* Input Area (Visual Only) */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md p-4 border-t border-zinc-100 dark:border-zinc-900">
                <div className="relative">
                    <input
                        disabled
                        placeholder="Digite sua mensagem..."
                        className="w-full bg-zinc-100 dark:bg-zinc-900 h-11 rounded-full pl-5 pr-12 text-sm text-zinc-500 focus:outline-none cursor-default"
                    />
                    <div className="absolute right-1 top-1 h-9 w-9 bg-zinc-900 dark:bg-white rounded-full flex items-center justify-center">
                        <Send className="w-4 h-4 text-white dark:text-zinc-900 -ml-0.5" />
                    </div>
                </div>
            </div>
        </div>
    );
}

