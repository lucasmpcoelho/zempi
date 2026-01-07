import { motion } from "framer-motion";
import { LeadDemoWidget } from "../lead-demo-widget";
import { ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
    {
        icon: <Zap className="w-5 h-5 text-emerald-500" />,
        title: "Atendimento Imediato (0 delay)",
        description: "Seu paciente é atendido no microssegundo que manda mensagem. Satisfação instantânea."
    },
    {
        icon: <Star className="w-5 h-5 text-emerald-500" />,
        title: "Triagem Inteligente",
        description: "Ana qualifica, tira dúvidas de preços (se você permitir) e só passa leads quentes."
    },
    {
        icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
        title: "Agenda Cheia, Zero Stress",
        description: "Automatize agendamentos, lembretes e cobrança de sinal. O fim do 'no-show'."
    }
];

export function Partners() {
    return (
        <section className="py-28 bg-white dark:bg-zinc-950 overflow-hidden relative border-t border-zinc-100 dark:border-zinc-900">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 dark:bg-emerald-900/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wide mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Tecnologia de Ponta
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-[1.15] text-zinc-900 dark:text-zinc-50">
                            Potencialize sua Clínica com <br className="hidden md:block" />
                            <span className="text-emerald-600 dark:text-emerald-400">Inteligência Real.</span>
                        </h2>

                        <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-10 max-w-lg">
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
                                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 group-hover:scale-105 transition-all duration-300">
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
                            <Button size="lg" className="bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 px-8 h-12 text-base rounded-full shadow-xl shadow-zinc-900/10 hover:shadow-2xl transition-all hover:-translate-y-0.5">
                                Quero Conhecer a Ana
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
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
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 blur-3xl rounded-full opacity-60" />

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
                                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Performance</span>
                                </div>
                                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                                    <span className="text-emerald-500 font-bold">+42%</span> de conversão em avaliações agendadas.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
