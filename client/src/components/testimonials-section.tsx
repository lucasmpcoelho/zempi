import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    content: "Antes: náusea 4-5x por semana. A IA detectou que peixes gordurosos eram meu gatilho. Agora: 1 episódio por mês.",
    name: "Maria C.",
    location: "42 anos • Ozempic há 6 meses • São Paulo",
    metric: "Redução de 80% nos episódios de náusea"
  },
  {
    content: "Estava perdendo 40% de massa muscular. O Zempi ajustou minha proteína de 0.8g/kg para 1.6g/kg. Continuo perdendo gordura mas mantendo músculos.",
    name: "Carlos S.",
    location: "38 anos • Mounjaro há 4 meses • Rio de Janeiro",
    metric: "Preservação de massa magra"
  },
  {
    content: "Economizei +R$2.400 em consultas extras. Tiro dúvidas na hora e tenho orientação quando preciso, sem ansiedade.",
    name: "Ana P.",
    location: "35 anos • Saxenda há 8 meses • Belo Horizonte",
    metric: "R$2.400 economizados em 6 meses"
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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900" data-testid="testimonials-title">
            Histórias reais de pacientes
          </h2>
          <p className="text-lg text-gray-600">
            Resultados específicos, não genéricos
          </p>
        </motion.div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start", dragFree: true, containScroll: "trimSnaps" }} setApi={setCarouselApi}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    data-testid={`testimonial-${index}`}
                  >
                    <p className="text-gray-800 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="inline-block px-3 py-1 bg-green-50 rounded-full mb-3">
                        <span className="text-xs font-semibold text-green-700">
                          ✓ {testimonial.metric}
                        </span>
                      </div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center gap-2 mt-6" aria-label="Indicadores do carrossel">
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para depoimento ${i + 1}`}
                onClick={() => carouselApi?.scrollTo(i)}
                className={`h-3 w-3 sm:h-2.5 sm:w-2.5 rounded-full transition-all min-w-[12px] min-h-[12px] ${i === current ? "bg-gray-900 w-8 sm:w-6" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`testimonial-${index}`}
            >
              <p className="text-gray-800 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="inline-block px-3 py-1 bg-green-50 rounded-full mb-3">
                  <span className="text-xs font-semibold text-green-700">
                    ✓ {testimonial.metric}
                  </span>
                </div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
