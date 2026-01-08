import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Send, CheckCheck, Sparkles, Bot, Copy, Check, Calendar, Database } from "lucide-react";

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
        content: "Funciona sim! O Ultraformer MPT é o padrão ouro para 'colar' a papada. A tecnologia nova é 3x mais rápida e confortável.",
        timestamp: "14:20",
        type: "text",
    },
    {
        id: "3",
        sender: "user",
        content: "Quero natural. Tenho pavor de ficar artificial.",
        timestamp: "14:21",
        type: "text",
    },
    {
        id: "4",
        sender: "agent",
        content: "O Ultraformer age apenas no colágeno, sem dar volume. Você fica mais jovem e firme, mas continua sendo VOCÊ. 💎",
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
        content: "Para garantir, pedimos um sinal de R$ 50 via Pix. Gerei o código:",
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
        <div className="bg-[#1A3C34]/5 border border-[#1A3C34]/20 rounded-2xl p-4 max-w-[220px]">
            <div className="text-center mb-3">
                <span className="text-xs font-semibold text-[#1A3C34] uppercase tracking-wide">Pix Copia e Cola</span>
                <p className="text-2xl font-bold text-[#1A3C34] mt-1">R$ 50,00</p>
            </div>
            <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 bg-[#1A3C34] hover:bg-[#1A3C34]/90 text-white text-xs font-medium py-2 px-4 rounded-xl transition-all active:scale-95"
            >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copied ? "Copiado!" : "Copiar Código"}
            </button>
        </div>
    );
}

function PixConfirmedCard() {
    return (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 max-w-[240px]">
            <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-semibold text-emerald-700">Pagamento Confirmado!</span>
            </div>
            <p className="text-xs text-emerald-800/80">
                Agendamento confirmado para <strong>amanhã às 15h</strong>. Enviei os detalhes por email.
            </p>
        </div>
    );
}

function IntegrationCard({ icon: Icon, title, visible, className }: { icon: any, title: string, visible: boolean, className?: string }) {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                    className={`bg-white/90 backdrop-blur border border-border/50 shadow-lg p-3 rounded-xl flex items-center gap-3 w-48 z-50 ${className}`}
                >
                    <div className="w-8 h-8 rounded-full bg-[#1A3C34]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#1A3C34]" />
                    </div>
                    <div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold block">System Sync</span>
                        <p className="text-xs font-medium text-foreground">{title}</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export function LeadDemoWidget() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCalendarSync, setShowCalendarSync] = useState(false);
    const [showCRMSync, setShowCRMSync] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    }, [messages, isTyping]);

    // Triggers for integration cards based on message flow
    useEffect(() => {
        // When user says "Reserva pra mim" (id: 6) -> Trigger Calendar Sync visualization
        if (messages.some(m => m.id === "6") && !showCalendarSync) {
            setShowCalendarSync(true);
            setTimeout(() => setShowCalendarSync(false), 4000);
        }

        // When payment is confirmed (id: 10) -> Trigger CRM Update visualization
        if (messages.some(m => m.id === "10") && !showCRMSync) {
            setShowCRMSync(true);
            setTimeout(() => setShowCRMSync(false), 4000);
        }
    }, [messages]);

    useEffect(() => {
        if (currentIndex >= conversationFlow.length) {
            const timeout = setTimeout(() => {
                setMessages([]);
                setCurrentIndex(0);
                setShowCalendarSync(false);
                setShowCRMSync(false);
            }, 6000);
            return () => clearTimeout(timeout);
        }

        const currentMessage = conversationFlow[currentIndex];
        const isAgent = currentMessage.sender === "agent";
        let delay = isAgent ? 1500 : 1000;
        if (currentIndex === 0) delay = 500;

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
        if (msg.type === "pix_request") return <PixRequestCard />;
        if (msg.type === "pix_confirmed") return <PixConfirmedCard />;

        return (
            <>
                {msg.content}
                <div className={`flex items-center gap-1 text-[9px] mt-1.5 opacity-60 ${msg.sender === 'user' ? 'justify-end text-zinc-300' : 'justify-start text-zinc-400'}`}>
                    {msg.timestamp}
                    {msg.sender === 'user' && <CheckCheck className="w-2.5 h-2.5" />}
                </div>
            </>
        );
    };

    return (
        <div className="relative w-[320px] mx-auto">
            {/* Visual indicator lines could be added here */}

            {/* Integration Visualizations - Positioned OUTSIDE the overflow container */}
            {/* Using negative RIGHT values to push them to the right, or LEFT to push left. 
                Given the layout, let's try pushing lightly to the LEFT to use the gap space. */}
            <div className="absolute top-32 -left-40 z-50">
                <IntegrationCard
                    icon={Calendar}
                    title="Agenda Sincronizada"
                    visible={showCalendarSync}
                />
            </div>
            <div className="absolute bottom-48 -left-40 z-50">
                <IntegrationCard
                    icon={Database}
                    title="CRM Atualizado"
                    visible={showCRMSync}
                />
            </div>

            {/* Main Phone Container */}
            <div className="w-full bg-white dark:bg-zinc-950 rounded-[45px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-[8px] border-zinc-900 overflow-hidden h-[640px] flex flex-col font-sans relative z-10">

                {/* iPhone Notch/Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-900 rounded-b-2xl z-30" />

                {/* Header */}
                <div className="shrink-0 bg-[#1A3C34] text-white pt-10 pb-4 px-5 flex items-center gap-3 shadow-sm z-20">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                            <Bot className="w-5 h-5" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-[2px] border-[#1A3C34] rounded-full" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm flex items-center gap-1.5">
                            Ana
                            <Sparkles className="w-3 h-3 text-emerald-400" />
                        </h3>
                        <span className="text-[10px] text-emerald-200/80 font-medium">
                            Online agora
                        </span>
                    </div>
                </div>

                {/* Chat Area */}
                <div
                    ref={chatContainerRef}
                    className="flex-1 min-h-0 overflow-y-auto px-4 py-4 bg-[#E5DDD5]/30 scrollbar-hide relative"
                >
                    {/* WhatsApp-like background pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png')] bg-repeat bg-center mix-blend-multiply pointer-events-none" />

                    <AnimatePresence mode="popLayout">
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className={`flex mb-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {(msg.type === "pix_request" || msg.type === "pix_confirmed") ? (
                                    renderMessageContent(msg)
                                ) : (
                                    <div
                                        className={`max-w-[85%] px-4 py-2.5 shadow-sm text-[13px] leading-snug relative
                                        ${msg.sender === 'user'
                                                ? 'bg-[#1A3C34] text-white rounded-[18px] rounded-tr-sm'
                                                : 'bg-white text-zinc-800 border border-zinc-100 rounded-[18px] rounded-tl-sm'
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
                            <div className="bg-white border border-zinc-100 rounded-[18px] rounded-tl-sm px-3 py-3 flex gap-1 items-center shadow-sm">
                                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" />
                            </div>
                        </motion.div>
                    )}

                    <div ref={messagesEndRef} className="h-1" />
                </div>

                {/* Input Area */}
                <div className="shrink-0 bg-white p-3 border-t border-zinc-100 pb-6">
                    <div className="relative">
                        <input
                            disabled
                            placeholder="Mensagem..."
                            className="w-full bg-zinc-100 h-10 rounded-full pl-4 pr-10 text-xs text-zinc-500 focus:outline-none cursor-default"
                        />
                        <div className="absolute right-1 top-1 h-8 w-8 bg-[#1A3C34] rounded-full flex items-center justify-center">
                            <Send className="w-3.5 h-3.5 text-white -ml-0.5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Value Props below */}
            <div className="mt-8 text-center">
                <div className="inline-flex items-center justify-center gap-6 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" /> Multi-agenda
                    </span>
                    <span className="w-1 h-1 bg-border rounded-full" />
                    <span className="flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-primary" /> CRM Nativo
                    </span>
                </div>
            </div>
        </div>
    );
}
