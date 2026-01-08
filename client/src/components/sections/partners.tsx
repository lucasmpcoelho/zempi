import { motion } from "framer-motion";
import { LeadDemoWidget } from "../lead-demo-widget";
import { ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
    {
        icon: <Zap className="w-5 h-5 text-accent" />,
        title: "Atendimento Imediato (0 delay)",
        description: "Seu paciente é atendido no microssegundo que manda mensagem. Satisfação instantânea."
    },
    {
        icon: <Star className="w-5 h-5 text-accent" />,
        title: "Triagem Inteligente",
        description: "Ana qualifica, tira dúvidas de preços (se você permitir) e só passa leads quentes."
    },
    {
        icon: <ShieldCheck className="w-5 h-5 text-accent" />,
        title: "Agenda Cheia, Zero Stress",
        description: "Automatize agendamentos, lembretes e cobrança de sinal. O fim do 'no-show'."
    }
];

export function Partners() {
    return (
        <section className="py-28 bg-background overflow-hidden relative border-t border-border/40">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-6 border border-primary/10">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Tecnologia de Ponta
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-6 leading-[1.15] text-foreground">
                            Potencialize sua Clínica com <br className="hidden md:block" />
                            <span className="text-primary italic">Inteligência Real.</span>
                        </h2>

                        <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-lg">
                            Não é um "chatbot". É uma assistente virtual treinada para acolher seus pacientes, elevar a percepção da sua marca e garantir que nenhuma oportunidade seja perdida.
                        </p>

                        <div className="space-y-8 mb-12">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="flex gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-card border border-border/50 flex items-center justify-center shrink-0 group-hover:bg-primary/5 group-hover:border-primary/20 group-hover:scale-105 transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-1.5">{feature.title}</h3>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/contato" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base rounded-none shadow-xl shadow-primary/10 hover:shadow-2xl transition-all hover:-translate-y-0.5 w-full">
                                    Fale Conosco
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Widget Demo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-accent/10 blur-3xl rounded-full opacity-60" />

                        <div className="relative">
                            <LeadDemoWidget />

                            {/* Floating "Live Stat" Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="absolute top-24 -right-12 bg-white dark:bg-zinc-900/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-800 max-w-[200px] hidden xl:block"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Performance</span>
                                </div>
                                <p className="text-sm font-medium text-foreground">
                                    <span className="text-primary font-bold">+42%</span> de conversão em avaliações agendadas.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
