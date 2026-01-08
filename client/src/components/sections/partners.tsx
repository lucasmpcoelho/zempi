import { motion } from "framer-motion";
import { LeadDemoWidget } from "../lead-demo-widget";
import { MessageCircle, Brain, Calendar } from "lucide-react";

const features = [
    {
        icon: <MessageCircle className="w-5 h-5 text-primary/70" />,
        title: "Atendimento Inteligente",
        description: "Resposta contextualizada e acolhedora, a qualquer hora do dia."
    },
    {
        icon: <Brain className="w-5 h-5 text-primary/70" />,
        title: "Qualificação Automatizada",
        description: "Entendimento de intenção e direcionamento eficiente para sua equipe."
    },
    {
        icon: <Calendar className="w-5 h-5 text-primary/70" />,
        title: "Gestão de Agenda",
        description: "Agendamentos, lembretes e confirmações integrados sem fricção."
    }
];

export function Partners() {
    return (
        <section id="technology" className="py-28 bg-background overflow-hidden relative border-t border-border/40">
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
                        <span className="text-xs font-sans font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
                            Tecnologia Proprietária
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-6 leading-[1.15] text-foreground">
                            Inteligência Artificial <br className="hidden md:block" />
                            <span className="text-muted-foreground italic">para Estética.</span>
                        </h2>

                        <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-lg">
                            Desenvolvemos soluções de IA específicas para o mercado de estética brasileiro. Nossas ferramentas atuam no atendimento, qualificação e gestão de pacientes.
                        </p>

                        <div className="space-y-6 mb-12">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="flex gap-4 group"
                                >
                                    <div className="w-11 h-11 bg-card border border-border/50 flex items-center justify-center shrink-0 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-sm text-muted-foreground/70 font-light italic">
                            Ana — nossa assistente virtual em ação.
                        </p>
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
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
