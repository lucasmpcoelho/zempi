import { motion } from "framer-motion";
import { MapPin, Syringe, Users, Sparkles, Check } from "lucide-react";

const criteria = [
  {
    icon: MapPin,
    title: "Localização Premium",
    description: "Jardins, Itaim Bibi, Vila Nova Conceição ou bairros equivalentes",
  },
  {
    icon: Syringe,
    title: "Foco em Injetáveis",
    description: "Bioestimuladores, toxina botulínica, preenchimentos",
  },
  {
    icon: Users,
    title: "Base de Pacientes",
    description: "Mínimo de 300 pacientes ativos na base",
  },
  {
    icon: Sparkles,
    title: "Abertura para Inovação",
    description: "Interesse em tecnologia e processos modernos",
  },
];

export function ClinicasProfile() {
  return (
    <section className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Perfil Ideal
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-foreground">
            Quem Estamos{" "}
            <span className="text-primary italic">Buscando</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Para garantir sucesso mútuo, buscamos clínicas com perfil específico.
          </p>
        </motion.div>

        {/* Criteria Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {criteria.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex gap-4 p-6 bg-card border border-border rounded-sm hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card border-2 border-primary/20 rounded-sm p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xl font-serif text-foreground mb-2">
              Estamos selecionando apenas{" "}
              <span className="text-primary font-bold">2 clínicas</span>{" "}
              para esta fase piloto.
            </p>
            <p className="text-muted-foreground">
              Se sua clínica se encaixa nesse perfil, este convite é para você.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
