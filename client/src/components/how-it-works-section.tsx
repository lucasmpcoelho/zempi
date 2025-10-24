import { motion } from "framer-motion";
import { 
  Smartphone, MessageSquare, LineChart, Trophy, 
  Sparkles, Brain, TrendingUp, Users, Calendar,
  CheckCircle2, Zap, Heart, Target, Shield
} from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

interface JourneyPhase {
  period: string;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  bgColor: string;
  support: {
    icon: any;
    text: string;
  }[];
  results: {
    icon: any;
    text: string;
  }[];
  highlight?: string;
}

const journeyPhases: JourneyPhase[] = [
  {
    period: "Dia 1",
    title: "Onboarding personalizado",
    subtitle: "Começamos conhecendo você",
    icon: Sparkles,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    support: [
      { icon: MessageSquare, text: "Conversa inicial detalhada via WhatsApp" },
      { icon: Brain, text: "IA analisa seu histórico médico e objetivos" },
      { icon: Target, text: "Criação do seu protocolo personalizado" }
    ],
    results: [
      { icon: CheckCircle2, text: "Perfil completo mapeado em 15 minutos" },
      { icon: CheckCircle2, text: "Primeiro plano de ação pronto" }
    ],
    highlight: "Você nunca está sozinho desde o primeiro dia"
  },
  {
    period: "Semana 1",
    title: "Ajuste e aprendizado",
    subtitle: "Entendendo seu corpo",
    icon: Brain,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    support: [
      { icon: MessageSquare, text: "Check-ins diários (manhã e noite)" },
      { icon: Zap, text: "Ajustes em tempo real baseados em sintomas" },
      { icon: Heart, text: "Suporte imediato para efeitos colaterais" }
    ],
    results: [
      { icon: CheckCircle2, text: "Gatilhos de náusea identificados" },
      { icon: CheckCircle2, text: "Horários ideais de refeição definidos" },
      { icon: CheckCircle2, text: "A IA aprende seus padrões únicos (quando você sente náusea, quais alimentos funcionam)" }
    ],
    highlight: "A IA aprende como SEU corpo reage ao medicamento"
  },
  {
    period: "Mês 1",
    title: "Otimização contínua",
    subtitle: "Refinando sua jornada",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50",
    support: [
      { icon: MessageSquare, text: "Check-ins adaptativos (frequência personalizada)" },
      { icon: LineChart, text: "Análise semanal detalhada de progresso" },
      { icon: Calendar, text: "Relatório mensal para seu endocrinologista" }
    ],
    results: [
      { icon: CheckCircle2, text: "Protocolo otimizado para seu metabolismo" },
      { icon: CheckCircle2, text: "Efeitos colaterais reduzidos em 70-80%" },
      { icon: CheckCircle2, text: "Primeiras conquistas desbloqueadas: 🏆 First Week Warrior, 💪 7-Day Protein Streak" }
    ],
    highlight: "Seu tratamento agora é preditivo, não reativo"
  },
  {
    period: "3+ meses",
    title: "Construindo Hábitos Para Vida",
    subtitle: "Resultados que duram para sempre",
    icon: Trophy,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    support: [
      { icon: Users, text: "Acesso à comunidade exclusiva Zempi" },
      { icon: Shield, text: "Cuidados médicos contínuos com carinho" },
      { icon: Brain, text: "IA antecipa necessidades antes de você sentir" }
    ],
    results: [
      { icon: CheckCircle2, text: "Aderência média 2x maior que sem acompanhamento" },
      { icon: CheckCircle2, text: "Personal Habit Template criado: 'Seus padrões de sucesso documentados'" },
      { icon: CheckCircle2, text: "Quando parar a medicação, você tem um manual do SEU corpo 📖" }
    ],
    highlight: "67% recuperam 2/3 do peso em 1 ano. Com Zempi, você constrói hábitos que duram para sempre 🎯"
  }
];

export default function HowItWorksSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | undefined>();
  const [current, setCurrent] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

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
    <section id="como-funciona" className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">
              Sua jornada com o Zempi
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight fluid-h2" data-testid="how-it-works-title">
            Como funciona o acompanhamento
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed fluid-body">
            Do primeiro contato aos resultados sustentáveis: você nunca está sozinho
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <Carousel
            opts={{ align: "start", dragFree: true, containScroll: "trimSnaps" }}
            setApi={setCarouselApi}
            className="relative"
          >
            <CarouselContent>
              {journeyPhases.map((phase, index) => (
                <CarouselItem key={index}>
                  <PhaseCard phase={phase} index={index} isMobile={true} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Mobile controls */}
            <div className="absolute inset-y-0 left-0 right-0 pointer-events-none">
              <div className="flex items-center justify-between h-full">
                <button
                  aria-label="Anterior"
                  onClick={() => carouselApi?.scrollPrev()}
                  className="pointer-events-auto ml-2 h-9 w-9 rounded-full bg-white/90 border border-gray-200 shadow-md flex items-center justify-center active:scale-95"
                >
                  <span className="sr-only">Anterior</span>
                  {/* simple chevron */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button
                  aria-label="Próximo"
                  onClick={() => carouselApi?.scrollNext()}
                  className="pointer-events-auto mr-2 h-9 w-9 rounded-full bg-white/90 border border-gray-200 shadow-md flex items-center justify-center active:scale-95"
                >
                  <span className="sr-only">Próximo</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>
            </div>
          </Carousel>
          <div className="flex justify-center gap-2 mt-6" aria-label="Indicadores do carrossel">
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para fase ${i + 1}`}
                onClick={() => carouselApi?.scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === current ? "bg-gray-900 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          {/* Timeline Navigation */}
          <div className="flex items-center justify-between mb-12 relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
            <motion.div 
              className="absolute top-1/2 left-0 h-1 bg-gray-900 -translate-y-1/2 transition-all duration-500"
              initial={{ width: "0%" }}
              animate={{ width: `${(activePhase / (journeyPhases.length - 1)) * 100}%` }}
            />
            
            {journeyPhases.map((phase, index) => (
              <motion.button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`relative z-10 flex flex-col items-center gap-3 transition-all ${
                  activePhase === index ? "scale-110" : "scale-100"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-lg ${
                    activePhase === index 
                      ? `${phase.bgColor} ring-4 ring-gray-900/20` 
                      : "bg-white border-2 border-gray-300"
                  }`}
                >
                  <phase.icon 
                    className={`h-7 w-7 transition-colors ${
                      activePhase === index ? phase.color : "text-gray-400"
                    }`} 
                  />
                </div>
                <div className="text-center">
                  <div className={`text-sm font-semibold ${
                    activePhase === index ? "text-gray-900" : "text-gray-500"
                  }`}>
                    {phase.period}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active Phase Content */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PhaseCard phase={journeyPhases[activePhase]} index={activePhase} isMobile={false} />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-700">
              Acompanhamento 24/7 • Resposta em minutos, não dias
            </span>
          </div>
          
          <div className="max-w-2xl mx-auto bg-orange-50 border border-orange-200 rounded-2xl p-6 mt-6">
            <p className="text-base font-semibold text-orange-900 mb-2">
              🎯 Por que isso importa?
            </p>
            <p className="text-sm text-orange-800 leading-relaxed">
              <strong>67% das pessoas recuperam 2/3 do peso em 1 ano após parar GLP-1.</strong> Com Zempi, você constrói hábitos que duram para sempre — não dependência temporária de medicação.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PhaseCard({ phase, index, isMobile }: { phase: JourneyPhase; index: number; isMobile: boolean }) {
  return (
    <motion.div
      className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: isMobile ? 0 : index * 0.1 }}
      data-testid={`phase-${index}`}
    >
      {/* Header */}
      <div className={`${phase.bgColor} px-6 py-6 border-b border-gray-200`}>
        <div className="flex items-start gap-4">
          <div className={`w-14 h-14 rounded-2xl ${phase.bgColor} ring-4 ring-white flex items-center justify-center flex-shrink-0`}>
            <phase.icon className={`h-7 w-7 ${phase.color}`} />
          </div>
          <div className="flex-1">
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
              {phase.period}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {phase.title}
            </h3>
            <p className="text-gray-600">
              {phase.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Support Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-gray-600" />
            O que você recebe
          </h4>
          <div className="space-y-3">
            {phase.support.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-4 w-4 text-gray-600" />
                </div>
                <span className="text-gray-700 leading-relaxed pt-1">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-gray-600" />
            Resultados esperados
          </h4>
          <div className="space-y-3">
            {phase.results.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight */}
        {phase.highlight && (
          <div className={`${phase.bgColor} rounded-xl p-4 border-l-4 ${phase.color.replace('text-', 'border-')}`}>
            <p className="text-sm font-medium text-gray-900">
              💡 {phase.highlight}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
