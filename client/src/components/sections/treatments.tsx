import { motion } from "framer-motion";
import { Sparkles, Zap, Target, Layers } from "lucide-react";

const treatmentCategories = [
  {
    icon: Sparkles,
    title: "Bioestimuladores & Sculptra",
    description: "Estímulo natural de colágeno para recuperar volume e firmeza perdidos após emagrecimento rápido.",
    treatments: ["Sculptra", "Radiesse", "Ellansé", "PLLA"],
  },
  {
    icon: Layers,
    title: "Fios PDO & Preenchimento",
    description: "Sustentação estrutural e reposição volumétrica para contornos faciais e corporais redefinidos.",
    treatments: ["Fios de PDO", "Ácido Hialurônico", "Preenchimento Facial", "Harmonização"],
  },
  {
    icon: Zap,
    title: "Radiofrequência & Ultrassom",
    description: "Tecnologias de ponta para retração cutânea profunda e remodelamento não-invasivo.",
    treatments: ["Morpheus8", "Ultraformer III", "Accent Prime", "Endymed"],
  },
  {
    icon: Target,
    title: "Body Contouring",
    description: "Protocolos não-cirúrgicos para definição corporal e tratamento de flacidez localizada.",
    treatments: ["Criolipólise", "HIFU Corporal", "Carboxiterapia", "Intradermoterapia"],
  },
];

export function Treatments() {
  return (
    <section id="treatments" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Portfólio de Tratamentos
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Tratamentos de <br />
            <span className="italic text-muted-foreground">Alta Performance</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Protocolos selecionados estrategicamente para capturar a demanda pós-GLP-1, 
            focando em tratamentos de alto ticket e resultados comprovados.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {treatmentCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-card border border-border p-8 md:p-10 hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.2 }}
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-primary/40 to-transparent group-hover:h-12 transition-all duration-500" />
                <div className="absolute top-0 right-0 h-px w-8 bg-gradient-to-l from-primary/40 to-transparent group-hover:w-12 transition-all duration-500" />
              </div>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <category.icon className="w-5 h-5 text-primary/70" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-5">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.treatments.map((treatment, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs tracking-wide px-3 py-1.5 bg-secondary/50 text-muted-foreground border border-border/50 hover:border-primary/20 hover:bg-primary/5 transition-colors duration-200"
                      >
                        {treatment}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground font-light mb-4">
            Protocolos personalizados com base no perfil de cada clínica
          </p>
          <div className="flex items-center justify-center gap-8 text-xs tracking-widest uppercase text-muted-foreground/60">
            <span>Alto Ticket</span>
            <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
            <span>Recorrência</span>
            <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
            <span>Resultados</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

