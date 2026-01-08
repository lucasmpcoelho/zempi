import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Send, CheckCheck, Sparkles, Bot, Copy, Check } from "lucide-react";

interface Message {
    id: string;
    sender: "user" | "agent";
    content: string;
    timestamp: string;
    type?: "text" | "pix_request" | "pix_confirmed";
}

const conversationFlow: Message[] = [
    {
        id: "1",
        sender: "user",
        content: "Vi sobre o Ultraformer, mas dizem que dói. Funciona pra papada?",
        timestamp: "14:20",
        type: "text",
    },
    {
        id: "2",
        sender: "agent",
        content: "Funciona sim! O Ultraformer MPT é o padrão ouro para 'colar' a papada e definir o contorno. ✨ A tecnologia nova é 3x mais rápida e muito mais confortável.",
        timestamp: "14:20",
        type: "text",
    },
    {
        id: "3",
        sender: "user",
        content: "Quero natural. Tenho pavor de ficar com rosto artificial.",
        timestamp: "14:21",
        type: "text",
    },
    {
        id: "4",
        sender: "agent",
        content: "O Ultraformer age apenas na musculatura e colágeno, sem dar volume. Você fica mais jovem e firme, mas continua sendo VOCÊ. 💎",
        timestamp: "14:21",
        type: "text",
    },
    {
        id: "5",
        sender: "agent",
        content: "Tenho um horário com a Dra. amanhã às 15h. Vamos garantir?",
        timestamp: "14:22",
        type: "text",
    },
    {
        id: "6",
        sender: "user",
        content: "Pode ser. Reserva pra mim.",
        timestamp: "14:22",
        type: "text",
    },
    {
        id: "7",
        sender: "agent",
        content: "Para garantir sua reserva, pedimos um sinal de R$ 50 via Pix. Gerei o código para você:",
        timestamp: "14:23",
        type: "text",
    },
    {
        id: "8",
        sender: "agent",
        content: "",
        timestamp: "14:23",
        type: "pix_request",
    },
    {
        id: "9",
        sender: "user",
        content: "Pronto, paguei!",
        timestamp: "14:24",
        type: "text",
    },
    {
        id: "10",
        sender: "agent",
        content: "",
        timestamp: "14:24",
        type: "pix_confirmed",
    },
];

function PixRequestCard() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border border-emerald-200 dark:border-emerald-700 rounded-2xl p-4 max-w-[220px]">
            <div className="text-center mb-3">
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">Pix Copia e Cola</span>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">R$ 50,00</p>
            </div>
            <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-all active:scale-95"
            >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copiado!" : "Copiar Código Pix"}
            </button>
        </div>
    );
}

function PixConfirmedCard() {
    return (
        <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/40 dark:to-green-900/40 border border-emerald-300 dark:border-emerald-600 rounded-2xl p-4 max-w-[240px]">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Pagamento Confirmado!</span>
            </div>
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
                Agendamento confirmado para <strong>amanhã às 15h</strong>. Enviei os detalhes por WhatsApp. 💖
            </p>
        </div>
    );
}

export function LeadDemoWidget() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when messages change (only within the container)
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    }, [messages, isTyping]);

    useEffect(() => {
        if (currentIndex >= conversationFlow.length) {
            const timeout = setTimeout(() => {
                setMessages([]);
                setCurrentIndex(0);
            }, 6000);
            return () => clearTimeout(timeout);
        }

        const currentMessage = conversationFlow[currentIndex];
        const isAgent = currentMessage.sender === "agent";
        let delay = isAgent ? 1200 : 800;
        if (currentIndex === 0) delay = 800;

        const timer = setTimeout(() => {
            if (isAgent) {
                setIsTyping(true);
                setTimeout(() => {
                    setIsTyping(false);
                    setMessages(prev => [...prev, currentMessage]);
                    setCurrentIndex(prev => prev + 1);
                }, 1500);
            } else {
                setMessages(prev => [...prev, currentMessage]);
                setCurrentIndex(prev => prev + 1);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    const renderMessageContent = (msg: Message) => {
        if (msg.type === "pix_request") {
            return <PixRequestCard />;
        }
        if (msg.type === "pix_confirmed") {
            return <PixConfirmedCard />;
        }
        return (
            <>
                {msg.content}
                <div className={`flex items-center gap-1 text-[10px] mt-1.5 opacity-60 ${msg.sender === 'user' ? 'justify-end text-zinc-300 dark:text-zinc-600' : 'justify-start text-zinc-400'}`}>
                    {msg.timestamp}
                    {msg.sender === 'user' && <CheckCheck className="w-3 h-3" />}
                </div>
            </>
        );
    };

    return (
        <div className="w-full max-w-[380px] mx-auto bg-white dark:bg-zinc-950 rounded-[40px] shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden h-[600px] flex flex-col font-sans">
            {/* Minimal Header */}
            <div className="shrink-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md z-20 px-6 py-5 flex items-center gap-4 border-b border-zinc-100 dark:border-zinc-900">
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

            {/* Chat Area - Flex grow to fill space */}
            <div
                ref={chatContainerRef}
                className="flex-1 min-h-0 overflow-y-auto px-5 py-4 bg-zinc-50/50 dark:bg-zinc-900/30 scrollbar-hide"
            >
                <AnimatePresence mode="popLayout">
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            {(msg.type === "pix_request" || msg.type === "pix_confirmed") ? (
                                renderMessageContent(msg)
                            ) : (
                                <div
                                    className={`max-w-[85%] px-5 py-3.5 shadow-sm text-[14px] leading-relaxed relative
                                    ${msg.sender === 'user'
                                            ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-[20px] rounded-br-sm'
                                            : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-100 dark:border-zinc-700 rounded-[20px] rounded-bl-sm'
                                        }`}
                                >
                                    {renderMessageContent(msg)}
                                </div>
                            )}
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

                {/* Scroll anchor */}
                <div ref={messagesEndRef} className="h-1" />
            </div>

            {/* Input Area (Visual Only) */}
            <div className="shrink-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md p-4 border-t border-zinc-100 dark:border-zinc-900">
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
