import { motion } from "framer-motion";
import { LeadDemoWidget } from "../lead-demo-widget";
import { Check, ArrowRight, Zap, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
    {
        icon: <Clock className="w-5 h-5 text-emerald-500" />,
        title: "Resposta em Segundos",
        description: "Zere a perda de leads por demora. A Ana atende 24/7 instantaneamente."
    },
    {
        icon: <Zap className="w-5 h-5 text-amber-500" />,
        title: "Qualificação Automática",
        description: "Entende o procedimento, orçamento e urgência antes de passar para o humano."
    },
    {
        icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
        title: "Redução de No-Show",
        description: "Cobrança de sinal via Pix e confirmação automática aumentam comparecimento em 70%."
    }
];

export function Partners() {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900/20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sm font-sans font-semibold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase mb-4 block">
                            Para Clínicas & Consultórios
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 leading-tight text-foreground">
                            Não deixe seu lead esperar. <br />
                            <span className="text-muted-foreground italic">Ele compra de quem responde primeiro.</span>
                        </h2>

                        <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-xl">
                            Clínicas de alto padrão perdem até 60% das oportunidades por demora no WhatsApp.
                            Nossa tecnologia resolve isso integrando IA generativa que entende áudio,
                            qualifica o paciente e agenda consultas.
                        </p>

                        <div className="space-y-8 mb-10">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 h-12 text-base shadow-lg shadow-emerald-600/20">
                                Agendar Consultoria Gratuita
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Widget Demo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-3xl opacity-50 rounded-full" />
                        <LeadDemoWidget />

                        {/* Float Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 md:-left-12 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-700 max-w-[200px] hidden md:block"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Resultados Reais</span>
                            </div>
                            <p className="text-sm font-medium text-foreground">
                                "O tempo de resposta caiu de 4h para 2 min. A conversão dobrou."
                            </p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
