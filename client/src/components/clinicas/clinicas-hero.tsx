import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function ClinicasHero() {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-background pt-20 overflow-hidden">
      {/* Background Pattern - Subtle & Premium */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,162,158,0.03),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Tag - Clean & Editorial */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="h-px w-8 bg-primary/40" />
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
              Programa Piloto • Vagas Limitadas
            </span>
            <span className="h-px w-8 bg-primary/40" />
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-8 text-foreground tracking-tight">
            Sua Clínica Pode Estar<br />
            <span className="text-primary italic relative inline-block mt-2">
              Perdendo R$ 50 mil/mês
              {/* Underline sutil */}
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-primary/20 scale-x-75" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Leads que não respondem. Pacientes que não voltam. Horários vazios na agenda.
            <br className="hidden md:block" />
            <span className="font-medium text-foreground block mt-2">Nós resolvemos isso com Inteligência Artificial.</span>
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-7 text-sm font-semibold tracking-widest uppercase shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.15)] transition-all"
            >
              Quero Conhecer a Proposta
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Minimalist */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-muted-foreground/0 via-muted-foreground/30 to-muted-foreground/0" />
        </div>
      </motion.div>
    </section>
  );
}
