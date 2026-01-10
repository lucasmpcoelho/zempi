import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import lucasImg from "@assets/lucas coelho picture_1759449350469.png";

export function ClinicasFounder() {
  return (
    <section className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Quem Está Por Trás
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground">
            Conheça o Fundador
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
            {/* Photo */}
            <div className="w-40 h-40 md:w-48 md:h-48 shrink-0">
              <img
                src={lucasImg}
                alt="Lucas Coelho"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif font-medium text-foreground mb-1">
                Lucas Coelho
              </h3>
              <p className="text-primary font-medium mb-4">Fundador, Lyve</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Background em tecnologia e negócios, com experiência em IA aplicada à saúde.
                Construindo a primeira rede de clínicas de estética AI-first do Brasil.
              </p>

              {/* Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://linkedin.com/in/lucasmpcoelho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-full text-primary text-sm font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="mailto:lucas@lyve.care"
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-full text-primary text-sm font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <blockquote className="text-xl md:text-2xl font-serif italic text-muted-foreground max-w-2xl mx-auto">
            "Estamos construindo a primeira rede de clínicas de estética AI-first do Brasil.
            E gostaríamos que você fosse nossa primeira parceira."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
