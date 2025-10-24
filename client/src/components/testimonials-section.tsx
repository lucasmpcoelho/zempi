import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    id: "vp1",
    content: "Perdi 12kg, mas o mais importante: mantive minha massa muscular. O score diário me guiou para comer proteína suficiente. Agora tenho definição, não flacidez. 💪",
    name: "Maria C.",
    location: "42 anos • Ozempic há 6 meses • São Paulo",
    metric: "Score Muscular: 85/100 (zona segura por 5 meses)",
    valueProposition: "VP1: Proteja Seus Músculos"
  },
  {
    id: "vp2",
    content: "Parei o Ozempic há 3 meses. Não recuperei 1kg. O Zempi me ensinou os hábitos que funcionam pro MEU corpo. Tenho meu 'manual pessoal' agora. 🎯",
    name: "Ana P.",
    location: "35 anos • Saxenda há 8 meses • Belo Horizonte",
    metric: "Peso mantido por 3 meses pós-medicação",
    valueProposition: "VP2: Crie Hábitos Que Duram"
  },
  {
    id: "vp3",
    content: "A IA detectou que peixes gordurosos causavam 80% da minha náusea. Ajustei e caiu para 1 episódio/mês. Levei o relatório pro endocrinologista e ele ficou impressionado. 📊",
    name: "Carlos S.",
    location: "38 anos • Mounjaro há 4 meses • Rio de Janeiro",
    metric: "Redução de 90% em episódios de náusea",
    valueProposition: "VP3: Entenda Seu Corpo"
  },
  {
    id: "vp4",
    content: "Não me sinto sozinha. Check-in diário no WhatsApp é tipo ter uma amiga nutricionista comigo 24/7. E quando bateu ansiedade à noite, responderam em 5 minutos. 💙",
    name: "Juliana R.",
    location: "40 anos • Ozempic há 3 meses • Curitiba",
    metric: "NPS: 10/10 - Se sente apoiada",
    valueProposition: "VP4: Nunca Esteja Sozinho(a)"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6">
            <span className="text-sm font-semibold text-purple-900">
              💜 Casos Reais
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900" data-testid="testimonials-title">
            Eles perderam peso. Mantiveram músculos.
          </h2>
          <p className="text-lg text-gray-600">
            Cada jornada é única. Veja como pessoas usando Ozempic e Mounjaro protegeram seus músculos com o Zempi.
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
