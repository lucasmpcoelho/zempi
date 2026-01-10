import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroVideo from "@assets/generated_videos/cinematic_aerial_view_of_brazilian_nature_for_luxury_brand.mp4";

export function ClinicasHero() {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlays */}
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="h-px w-8 bg-white/40" />
            <span className="text-xs font-semibold text-white/90 uppercase tracking-[0.3em] drop-shadow-md">
              Programa Piloto • Vagas Limitadas
            </span>
            <span className="h-px w-8 bg-white/40" />
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-medium leading-[1.1] mb-8 tracking-tight drop-shadow-lg">
            Seu Parceiro de IA<br />
            <span className="italic opacity-90">para Estética.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12 opacity-90 drop-shadow-md">
            Automatize o operacional. Foque no que importa: seus pacientes.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="px-4 sm:px-0"
          >
            <Button
              onClick={scrollToForm}
              size="lg"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-primary rounded-none px-6 sm:px-10 py-7 text-sm font-semibold tracking-widest uppercase transition-all hover:scale-105"
            >
              Quero Conhecer a Proposta
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-16 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-slide-down" />
        </div>
      </motion.div>
    </section>
  );
}
