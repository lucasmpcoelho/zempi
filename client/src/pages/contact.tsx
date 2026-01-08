import { motion } from "framer-motion";
import { Navbar } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import lucasImg from "@assets/lucas coelho picture_1759449350469.png";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Left: Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={lucasImg}
                    alt="Lucas Coelho - Founder"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>

                {/* Name Card */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-card border border-border p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Founder</p>
                  <p className="font-serif text-xl">Lucas Coelho</p>
                </motion.div>
              </motion.div>

              {/* Right: Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                  Contato
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 leading-tight">
                  Fale <br />
                  <span className="italic text-muted-foreground">Conosco</span>
                </h1>
                <p className="text-lg text-muted-foreground font-light mb-12 leading-relaxed max-w-md">
                  Interessado em fazer parte da Lyve? Entre em contato para discutirmos oportunidades de parceria e investimento.
                </p>

                {/* Contact Links */}
                <div className="space-y-6">
                  <a
                    href="mailto:lucasmpcoelho@gmail.com"
                    className="group flex items-center gap-4 p-6 bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Mail className="w-5 h-5 text-primary/70" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">Email</p>
                      <p className="font-serif text-lg group-hover:text-primary transition-colors">lucasmpcoelho@gmail.com</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>

                  <a
                    href="tel:+15106932587"
                    className="group flex items-center gap-4 p-6 bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Phone className="w-5 h-5 text-primary/70" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">Telefone</p>
                      <p className="font-serif text-lg group-hover:text-primary transition-colors">+1 (510) 693-2587</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                </div>

                {/* Decorative Line */}
                <div className="mt-12 flex items-center gap-4">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-xs tracking-widest uppercase text-muted-foreground/50">Lyve</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}



