import { motion } from "framer-motion";
import clinicImg from "@assets/generated_images/luxury_clinic_interior.png";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-sans font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
              Nossa Missão
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight text-primary">
              Excelência Operacional & <br/><span className="italic text-muted-foreground">Crescimento de Receita</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                A Rede Viva não é apenas um investidor. Somos parceiros operacionais dedicados a transformar clínicas de estética em potências de eficiência e rentabilidade.
              </p>
              <p>
                Combinamos capital estratégico com nossa plataforma proprietária habilitada por IA para otimizar jornadas de clientes, aumentar ticket médio e garantir a fidelização em um mercado cada vez mais competitivo.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
              <img 
                src={clinicImg} 
                alt="Clínica de Estética de Luxo" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 border border-primary/10 -z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
