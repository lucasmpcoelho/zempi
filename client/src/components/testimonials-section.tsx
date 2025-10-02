import { motion } from "framer-motion";

const testimonials = [
  {
    content: "O Zempi mudou completamente minha experiência com o tratamento. Agora tenho orientação personalizada todos os dias.",
    name: "Maria C.",
    location: "São Paulo, SP"
  },
  {
    content: "Finalmente consigo ter um acompanhamento contínuo sem precisar esperar consultas. O Zempi responde na hora.",
    name: "Ricardo S.",
    location: "Rio de Janeiro, RJ"
  },
  {
    content: "É como ter um médico disponível 24 horas por dia! A forma como adapta as orientações é incrível.",
    name: "Ana P.",
    location: "Belo Horizonte, MG"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground" data-testid="testimonials-title">
            O que nossos pacientes dizem
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`testimonial-${index}`}
            >
              <p className="text-foreground mb-6 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
