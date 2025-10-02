import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    rating: 5,
    content: "O Zempi mudou completamente minha experiência com o tratamento. Antes eu me sentia perdida com os efeitos colaterais, agora tenho orientação personalizada todos os dias.",
    name: "Maria C.",
    location: "São Paulo, SP",
    initials: "MC",
    gradient: "from-primary to-secondary"
  },
  {
    rating: 5,
    content: "Finalmente consigo ter um acompanhamento contínuo sem precisar esperar consultas. O Zempi responde minhas dúvidas na hora e me dá a segurança que eu precisava.",
    name: "Ricardo S.",
    location: "Rio de Janeiro, RJ",
    initials: "RS",
    gradient: "from-secondary to-accent"
  },
  {
    rating: 5,
    content: "A forma como o Zempi pergunta sobre minha experiência diária e adapta as orientações é incrível. É como ter um médico disponível 24 horas por dia!",
    name: "Ana P.",
    location: "Belo Horizonte, MG",
    initials: "AP",
    gradient: "from-accent to-primary"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="testimonials-title">
            O que nossos <span className="gradient-text">pacientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="testimonials-description">
            Depoimentos reais de pessoas que transformaram sua experiência com o tratamento GLP-1.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
