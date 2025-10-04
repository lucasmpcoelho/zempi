import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

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
  const [carouselApi, setCarouselApi] = useState<CarouselApi | undefined>();
  const [current, setCurrent] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    setSlideCount(carouselApi.scrollSnapList().length);
    const onSelect = () => setCurrent(carouselApi.selectedScrollSnap());
    carouselApi.on("select", onSelect);
    onSelect();
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-3 text-foreground" data-testid="testimonials-title">
            O que nossos pacientes dizem
          </h2>
        </motion.div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start" }} setApi={setCarouselApi}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    className="bg-gray-50 rounded-2xl p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    data-testid={`testimonial-${index}`}
                  >
                    <p className="text-foreground mb-5 leading-relaxed text-base sm:text-lg">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center gap-2 mt-4" aria-label="Indicadores do carrossel">
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para depoimento ${i + 1}`}
                onClick={() => carouselApi?.scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full ${i === current ? "bg-foreground" : "bg-muted"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
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
              <p className="text-foreground mb-5 leading-relaxed text-base sm:text-lg">
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
