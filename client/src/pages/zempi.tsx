import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Heart, Shield, Clock, Users, Sparkles, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Zempi() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const scrollToAction = () => {
    const section = document.getElementById('cta-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "Marina",
      age: "38 anos",
      story: "Perdeu 14kg em 5 meses sem perder a qualidade de vida",
      quote: "Nunca imaginei que poderia emagrecer sem passar fome. O acompanhamento me deu confiança.",
      highlight: "14kg perdidos",
      image: "/images/mulher1.jpeg"
    },
    {
      name: "Roberta",
      age: "45 anos",
      story: "Recuperou a energia e mantém o peso há 6 meses",
      quote: "Meu médico ficou impressionado. Os exames melhoraram e me sinto 10 anos mais jovem.",
      highlight: "6 meses mantendo",
      image: "/images/mulher2.jpeg"
    },
    {
      name: "Carla",
      age: "41 anos",
      story: "Emagreceu 18kg e descobriu uma relação saudável com comida",
      quote: "Não é só sobre o peso. Aprendi a me cuidar de verdade, e isso não tem preço.",
      highlight: "18kg perdidos",
      image: "/images/mulher3.jpeg"
    }
  ];

  // Auto-rotate testimonials on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Lazy load video when hero section is in viewport
  useEffect(() => {
    const heroSection = document.querySelector('.hero-section-video');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo) {
            setShouldLoadVideo(true);
          }
        });
      },
      { rootMargin: '100px' } // Start loading 100px before it comes into view
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoadVideo]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - BACKGROUND VIDEO WITH OVERLAY */}
      <section className="hero-section-video relative overflow-hidden px-4 pt-24 pb-8 min-h-[calc(100svh-64px)] flex items-center lg:items-end">
        <div className="absolute inset-0">
          {shouldLoadVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/images/hero-image.jpeg"
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              {/* Fallback image if video fails to load */}
              <img
                src="/images/hero-image.jpeg"
                alt="Três mulheres sorridentes representando diversidade e saúde"
                className="w-full h-full object-cover"
              />
            </video>
          ) : (
            <img
              src="/images/hero-image.jpeg"
              alt="Três mulheres sorridentes representando diversidade e saúde"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-2xl lg:max-w-3xl space-y-6 text-center text-white">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Você merece emagrecer{" "}
              <span className="text-[#C9E5C0]">com saúde e carinho</span>
            </h1>

            <div className="hidden md:flex gap-4 pt-2 justify-center">
              <Button
                onClick={scrollToAction}
                size="lg"
                className="bg-[#6B8E5D] hover:bg-[#5A7A4D] text-white text-lg px-10 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all font-bold"
              >
                Começar minha jornada
              </Button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Real Transformations - NEW HUMANIZED SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F0E4] rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#6B8E5D]" />
              <span className="text-sm font-semibold text-[#5A7A4D]">Histórias Reais</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pessoas como você, que estão alcançando seus sonhos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada jornada é única. Aqui está o que algumas das nossas pacientes têm a dizer.
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((person, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-[#F5F9F3] to-white rounded-3xl p-8 border-2 border-[#E8F0E4] shadow-xl">
                      <div className="mb-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto border-4 border-[#A8C79B] shadow-lg">
                          <img
                            src={person.image}
                            alt={`${person.name} - transformação real`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center">{person.name}</h3>
                        <p className="text-sm text-gray-600 mb-4 text-center">{person.age}</p>
                        <div className="flex justify-center">
                          <div className="inline-block px-3 py-1 bg-[#6B8E5D] text-white rounded-full text-sm font-semibold mb-4">
                            {person.highlight}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4 italic">
                        "{person.quote}"
                      </p>
                      <p className="text-sm text-gray-600">
                        {person.story}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeTestimonial
                      ? 'w-8 bg-[#6B8E5D]'
                      : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Ver depoimento ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((person, i) => (
              <div key={i} className="bg-gradient-to-br from-[#F5F9F3] to-white rounded-3xl p-8 border-2 border-[#E8F0E4] hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto border-4 border-[#A8C79B] shadow-lg">
                    <img
                      src={person.image}
                      alt={`${person.name} - transformação real`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center">{person.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 text-center">{person.age}</p>
                  <div className="flex justify-center">
                    <div className="inline-block px-3 py-1 bg-[#6B8E5D] text-white rounded-full text-sm font-semibold mb-4">
                      {person.highlight}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  "{person.quote}"
                </p>
                <p className="text-sm text-gray-600">
                  {person.story}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section - HUMANIZED */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#FFF9F5] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sabemos como é difícil encontrar um tratamento que realmente funcione
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Você não está sozinha. Muitas pessoas enfrentam os mesmos desafios que você.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💸",
                title: "Tratamentos muito caros",
                desc: "Marcas premium custam mais de R$ 2.000/mês. Quem consegue manter isso por 6 meses, 1 ano?"
              },
              {
                icon: "😔",
                title: "Você se sente sozinha",
                desc: "Recebe a medicação e fica por conta própria. Dúvidas, efeitos colaterais, ansiedade... ninguém para te guiar."
              },
              {
                icon: "🤷‍♀️",
                title: "Protocolos que não te enxergam",
                desc: "Todo mundo é único, mas te tratam como número. Sem considerar sua rotina, suas preferências, seu corpo."
              }
            ].map((problem, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border-2 border-[#FFE5D9] hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-700 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution - Our Approach */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              No Zempi, você tem saúde, ciência e preço justo. Tudo junto.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Criamos uma forma mais humana e acessível de cuidar da sua saúde.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "👨‍⚕️",
                title: "Médicos que te escutam",
                desc: "Consultas online com especialistas que entendem sua história e te acompanham durante toda a jornada. Não é só assinar receita e tchau.",
                color: "blue"
              },
              {
                icon: "🤖",
                title: "Tecnologia que cuida 24/7",
                desc: "Nossa IA aprende com você: analisa seus sintomas, responde dúvidas a qualquer hora e sugere ajustes personalizados. Como ter uma nutricionista sempre com você.",
                color: "purple"
              },
              {
                icon: "💊",
                title: "Medicação de qualidade, preço justo",
                desc: "Semaglutida e Tirzepatida genéricas de laboratórios certificados. Mesma eficácia das marcas premium, mas por até 3x menos.",
                color: "green"
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-gradient-to-br from-[#F5F9F3] to-white rounded-3xl p-8 border-2 border-[#E8F0E4] hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-700 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - IN REAL LIFE */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#E8F0E4] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como funciona na vida real
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Do primeiro contato até seus resultados, cada passo é pensado para cuidar de você.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                step: "1",
                emoji: "💬",
                title: "Você conversa com um médico de verdade",
                desc: "Consulta online de 15min por texto ou vídeo. Conte sua história, tire dúvidas, entenda se GLP-1 é para você. Sem julgamento, só acolhimento.",
                time: "Hoje mesmo"
              },
              {
                step: "2",
                emoji: "📋",
                title: "Recebe um plano feito para você",
                desc: "Não é protocolo genérico. O médico considera seu histórico, rotina e objetivos para montar seu tratamento ideal.",
                time: "No dia da consulta"
              },
              {
                step: "3",
                emoji: "📦",
                title: "Medicação chega em casa com discrição",
                desc: "Embalagem discreta, entrega rápida. Você não precisa sair de casa nem explicar nada para ninguém.",
                time: "Em 3-5 dias"
              },
              {
                step: "4",
                emoji: "🤝",
                title: "Nossa IA e médicos caminham com você",
                desc: "Check-ins diários, ajustes quando necessário, alguém sempre disponível. Você nunca está sozinha.",
                time: "Todo dia, 24/7"
              }
            ].map((step, i) => (
              <div key={i} className="relative bg-white rounded-3xl p-8 border-2 border-[#A8C79B] hover:shadow-xl transition-all">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#6B8E5D] text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.step}
                </div>
                <div className="text-5xl mb-4">{step.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{step.desc}</p>
                <div className="inline-flex items-center gap-2 text-sm text-[#6B8E5D] font-semibold">
                  <Clock className="w-4 h-4" />
                  {step.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team - NEW HUMANIZED */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F0E4] rounded-full mb-4">
              <Heart className="w-4 h-4 text-[#6B8E5D]" />
              <span className="text-sm font-semibold text-[#5A7A4D]">Nosso Time</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quem cuida de você
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Médicos e especialistas que escolheram dedicar suas carreiras a ajudar pessoas de verdade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dra. Ana Silva",
                role: "Endocrinologista",
                quote: "Trato cada paciente como se fosse da minha família",
                crm: "CRM 12345-SP",
                image: "/images/medico1-mulher.jpeg"
              },
              {
                name: "Dr. Carlos Mendes",
                role: "Clínico Geral",
                quote: "Escutar é o primeiro passo para curar",
                crm: "CRM 23456-RJ",
                image: "/images/medico1-homem.jpeg"
              },
              {
                name: "Dra. Mariana Costa",
                role: "Nutricionista",
                quote: "Não existe dieta perfeita, existe a dieta que funciona pra VOCÊ",
                crn: "CRN 34567-MG",
                image: "/images/medico2-mulher.jpeg"
              },
              {
                name: "Dra. Julia Santos",
                role: "Endocrinologista",
                quote: "Emagrecer é sobre saúde, não sobre padrões",
                crm: "CRM 45678-SP",
                image: "/images/medico3-mulher.jpeg"
              }
            ].map((doc, i) => (
              <div key={i} className="bg-gradient-to-br from-[#F5F9F3] to-white rounded-3xl p-6 border-2 border-[#E8F0E4] text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#A8C79B] shadow-lg">
                  <img
                    src={doc.image}
                    alt={`${doc.name} - ${doc.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{doc.name}</h3>
                <p className="text-sm text-[#6B8E5D] font-semibold mb-4">{doc.role}</p>
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  "{doc.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - PRODUCT FOCUS */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#FFF9F5] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preço justo, sem surpresas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Semaglutida",
                price: "R$400 por mês de tratamento",
                image: "/images/semaglutide.png",
              },
              {
                name: "Tirzepatida",
                price: "R$600 por mês de tratamento",
                image: "/images/tirzepatide.png",
              },
            ].map((plan, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border-2 border-[#E8F0E4] relative">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-lg text-gray-600 mt-1 mb-4">{plan.price}</p>
                  <div className="rounded-2xl overflow-hidden border border-[#E8F0E4] bg-white">
                    <img
                      src={plan.image}
                      alt={`${plan.name} - frasco do medicamento`}
                      className="w-full h-64 object-contain p-6"
                      loading="lazy"
                    />
                  </div>
                </div>
                <Button
                  onClick={scrollToAction}
                  variant="outline"
                  className="w-full border-2 border-[#6B8E5D] text-[#6B8E5D] hover:bg-[#E8F0E4] py-6 rounded-2xl text-lg font-semibold"
                >
                  Conhecer plano
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - HUMANIZED with real fears */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Suas dúvidas, respondidas com carinho
            </h2>
            <p className="text-xl text-gray-600">
              Sabemos que começar algo novo dá medo. Estamos aqui para te ajudar.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "E se eu não me adaptar à medicação?",
                a: "Isso pode acontecer, e está tudo bem. Nossos médicos vão ajustar a dose, trocar o medicamento ou sugerir uma pausa. Você nunca fica sozinha nesse processo. E se decidir parar, pode cancelar sem multa."
              },
              {
                q: "Vocês realmente se importam ou é só venda?",
                a: "Entendemos a desconfiança. Criamos o Zempi justamente porque estávamos cansados de ver pacientes sendo tratados como números. Aqui você tem nome, história e um time que quer ver você bem. Fale com nossas pacientes e tire suas próprias conclusões."
              },
              {
                q: "Por que o genérico é tão mais barato? É confiável?",
                a: "O genérico tem o mesmo princípio ativo e passa pelos mesmos testes que Ozempic ou Mounjaro. A diferença é que não pagamos patente nem marketing milionário. Trabalhamos com laboratórios certificados pela Anvisa. É seguro, eficaz e justo."
              },
              {
                q: "Eu vou recuperar o peso depois?",
                a: "Não se você construir hábitos sustentáveis, e é nisso que te ajudamos. GLP-1 não é mágica: ele facilita muito, mas a verdadeira transformação vem do que você aprende durante o processo. Nossa IA e nutricionistas te ensinam a manter os resultados para sempre."
              },
              {
                q: "Como sei que não vou ter efeitos colaterais graves?",
                a: "GLP-1 é aprovado há anos e considerado seguro. Os efeitos mais comuns (náusea leve, prisão de ventre) são temporários e geralmente passam em 1-2 semanas. Nossos médicos avaliam seu histórico antes de prescrever e te acompanham de perto. Se algo não está certo, ajustamos imediatamente."
              },
              {
                q: "E se eu tiver dúvidas no meio da noite?",
                a: "Nossa IA está disponível 24/7. Não é chatbot genérico: ela conhece seu histórico e responde com contexto. Para urgências médicas, temos médicos de plantão. Você nunca fica desamparada."
              },
              {
                q: "Quanto tempo demora para ver resultados?",
                a: "A maioria das pessoas nota redução de fome na primeira semana. Perda de peso visível geralmente aparece em 4-8 semanas. Mas lembre-se: cada corpo é único. Alguns são mais rápidos, outros mais lentos. O importante é que você está cuidando de você."
              },
              {
                q: "Eu realmente preciso de médico ou posso comprar por conta?",
                a: "GLP-1 é medicação controlada por um motivo: precisa de acompanhamento profissional. Comprar por fora sem prescrição é perigoso e ilegal. No Zempi, a consulta está incluída justamente para sua segurança. Queremos que você emagreça COM saúde."
              },
              {
                q: "Meu convênio cobre?",
                a: "Infelizmente convênios ainda não cobrem GLP-1 para emagrecimento (só para diabetes tipo 2). Mas justamente por isso criamos preços acessíveis: para que você não precise depender de convênio ou gastar fortunas."
              },
              {
                q: "Como eu sei que isso é sério e não mais uma promessa vazia?",
                a: "Boa pergunta. Não pedimos que confie cegamente. Fale com nossas pacientes reais (temos grupo no WhatsApp), veja nossos médicos registrados, leia estudos científicos. A consulta inicial é sua chance de conhecer a gente sem compromisso. Se não sentir confiança, não siga. Simples assim."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-[#F5F9F3] border-2 border-[#E8F0E4] rounded-2xl overflow-hidden hover:border-[#A8C79B] transition-all">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                  className="w-full text-left px-6 py-6 flex items-start justify-between hover:bg-[#E8F0E4] transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-4">{faq.q}</span>
                  <span className="text-[#6B8E5D] text-2xl flex-shrink-0 mt-1">
                    {activeAccordion === i ? "−" : "+"}
                  </span>
                </button>
                {activeAccordion === i && (
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta-section" className="py-24 px-4 bg-gradient-to-br from-[#6B8E5D] to-[#5A7A4D] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Você merece se sentir bem no seu corpo
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed">
            Mais de 10 mil pessoas já começaram. Sua história pode ser a próxima.
            Comece hoje, sem compromisso de longo prazo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              onClick={scrollToAction}
              size="lg"
              className="bg-white text-[#6B8E5D] hover:bg-gray-100 text-xl px-12 py-8 rounded-2xl shadow-2xl font-bold"
            >
              Falar com um médico agora
            </Button>
          </div>

          <div className="space-y-3 text-lg opacity-90">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6" />
              <span>Resposta em até 24h</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Heart className="w-6 h-6" />
              <span>Consulta inicial sem compromisso</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-6 h-6" />
              <span>Seus dados protegidos com carinho</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#6B8E5D] p-4 shadow-2xl md:hidden z-50" style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}>
        <Button
          onClick={scrollToAction}
          className="w-full bg-[#6B8E5D] hover:bg-[#5A7A4D] text-white text-lg py-6 rounded-2xl shadow-lg font-bold"
        >
          Começar minha jornada
        </Button>
      </div>
    </div>
  );
}
