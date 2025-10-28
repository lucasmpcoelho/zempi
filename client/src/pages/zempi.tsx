import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Heart, Shield, Zap, TrendingDown, Clock, Award } from "lucide-react";
import { useState } from "react";

export default function Zempi() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const scrollToAction = () => {
    const section = document.getElementById('cta-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-pink-50 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Copy */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  ✨ A partir de R$ 400/mês
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Emagrecimento Eficaz{" "}
                <span className="text-green-600">Sem Pesar no Bolso</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Tirzepatida e Semaglutida de alta qualidade, acompanhamento médico personalizado
                e tecnologia de IA. Tudo por menos de <strong className="text-green-600">R$ 500/mês</strong>.
              </p>

              {/* Benefits Checklist */}
              <div className="space-y-3 py-4">
                {[
                  "Tratamento a partir de R$ 400/mês (3x mais barato)",
                  "Pague apenas 1 mês - sem compromisso",
                  "Acompanhamento inteligente via IA 24/7",
                  "Consulta médica online incluída",
                  "Entrega discreta em casa"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={scrollToAction}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Ver as Opções Disponíveis
                </Button>
                <Button
                  onClick={scrollToAction}
                  variant="outline"
                  size="lg"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-6 rounded-xl"
                >
                  Iniciar Avaliação Gratuita
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 pt-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>Aprovado Anvisa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span>+10 mil pacientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-600" />
                  <span>100% online</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Progresso</span>
                    <span className="text-sm font-semibold text-green-600">22.5% perda</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-green-600">-15kg</div>
                      <div className="text-sm text-gray-600">Peso perdido</div>
                    </div>
                    <div className="bg-pink-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-pink-600">60%</div>
                      <div className="text-sm text-gray-600">Menos fome</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 text-sm text-gray-600">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    <span className="italic">Resultados baseados em estudos clínicos</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Zap className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <TrendingDown className="w-8 h-8 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Animated ticker */}
        <div className="mt-16 bg-green-600 text-white py-3 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            <span className="inline-flex items-center mx-8">
              🏥 Acompanhamento médico online
            </span>
            <span className="inline-flex items-center mx-8">
              💊 GLP-1 de alta qualidade
            </span>
            <span className="inline-flex items-center mx-8">
              🔒 Seguro e aprovado pela Anvisa
            </span>
            <span className="inline-flex items-center mx-8">
              🤖 Inteligência artificial ao seu lado
            </span>
            <span className="inline-flex items-center mx-8">
              📦 Entrega garantida em casa
            </span>
            <span className="inline-flex items-center mx-8">
              ⭐ Preço justo e acessível
            </span>
            <span className="inline-flex items-center mx-8">
              💪 Resultados comprovados
            </span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ✦ Cansada de Dietas que Não Funcionam e Tratamentos Caros?
            </h2>
            <p className="text-xl text-gray-600 italic max-w-3xl mx-auto">
              Você não está sozinha. Milhares de mulheres gastam fortunas em
              tratamentos de emagrecimento sem ter acompanhamento adequado
              ou resultados duradouros.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💸",
                title: "Preço Abusivo",
                desc: "Outros tratamentos com GLP-1 custam mais de R$ 2.000 por trimestre. Difícil de manter a longo prazo."
              },
              {
                icon: "😔",
                title: "Falta de Suporte",
                desc: "Você recebe a medicação, mas fica sozinha para lidar com dúvidas, efeitos colaterais e ajustes de dose."
              },
              {
                icon: "📋",
                title: "Sem Personalização",
                desc: "Protocolos genéricos que não consideram seu histórico, rotina e objetivos individuais."
              }
            ].map((problem, i) => (
              <div key={i} className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-700 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ✦ A Solução que Une Ciência, Tecnologia e Preço Justo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Criamos o Zempi para democratizar o acesso ao emagrecimento eficaz.
              Tratamento médico profissional sem o custo exorbitante.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💊",
                title: "Medicação de Qualidade",
                desc: "Semaglutida e Tirzepatida genéricas de laboratórios certificados pela Anvisa. Mesma eficácia dos medicamentos de marca, preço muito mais acessível.",
                color: "green"
              },
              {
                icon: "🤖",
                title: "Inteligência Artificial",
                desc: "Nossa IA monitora seu progresso 24/7, sugere ajustes personalizados e responde suas dúvidas em tempo real. Acompanhamento que se adapta a você.",
                color: "purple"
              },
              {
                icon: "👨‍⚕️",
                title: "Médicos Reais",
                desc: "Consultas online com médicos licenciados que prescrevem e acompanham seu tratamento. Sem burocracia, tudo pelo app.",
                color: "blue"
              }
            ].map((pillar, i) => (
              <div key={i} className={`bg-white border-2 border-${pillar.color}-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1`}>
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-700 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ✦ Simples, Rápido e 100% Online
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                number: "1",
                icon: "📋",
                title: "Avaliação Gratuita",
                desc: "Responda um quiz rápido sobre sua saúde, histórico e objetivos."
              },
              {
                number: "2",
                icon: "👨‍⚕️",
                title: "Consulta Médica Online",
                desc: "Converse com um médico especialista que vai prescrever o melhor protocolo para você."
              },
              {
                number: "3",
                icon: "💊",
                title: "Escolha Seu Plano",
                desc: "Selecione entre Semaglutida ou Tirzepatida. Planos mensais sem compromisso."
              },
              {
                number: "4",
                icon: "📦",
                title: "Receba em Casa",
                desc: "Medicação e materiais enviados de forma discreta direto na sua porta."
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <div className="text-5xl mb-4 mt-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="text-green-400 text-2xl">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={scrollToAction}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-12 py-6 rounded-xl shadow-lg"
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ✦ Resultados Comprovados pela Ciência
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protocolos baseados em estudos clínicos publicados em revistas médicas internacionais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "22.5%",
                label: "de Perda de Peso",
                desc: "Estudo SURMOUNT-1 com 2.539 participantes demonstrou perda média de 22.5% do peso corporal em 72 semanas. Uma pessoa de 90kg pode perder até 20kg.",
                gradient: "from-green-500 to-emerald-600"
              },
              {
                stat: "60%",
                label: "Menos Fome",
                desc: "Pacientes relataram redução de até 60% do apetite por alimentos altamente calóricos, tornando a dieta muito mais fácil de seguir.",
                gradient: "from-blue-500 to-cyan-600"
              },
              {
                stat: "50%",
                label: "Menos Compulsão",
                desc: "Estudos mostram queda de até 50% na ingestão emocional, com redução preferencial da gordura abdominal.",
                gradient: "from-purple-500 to-pink-600"
              }
            ].map((result, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className={`bg-gradient-to-br ${result.gradient} text-white rounded-xl p-6 mb-4 text-center`}>
                  <div className="text-5xl font-bold mb-2">Até {result.stat}</div>
                  <div className="text-lg font-semibold">{result.label}</div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{result.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ✦ Mesmo Resultado, Preço Muito Mais Justo
            </h2>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 md:p-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-green-300">
                    <th className="text-left py-4 px-4 text-gray-700 font-semibold text-lg"></th>
                    <th className="text-center py-4 px-4 text-gray-700 font-semibold text-lg">Outras Opções</th>
                    <th className="text-center py-4 px-4 bg-green-600 text-white font-bold text-lg rounded-t-xl">
                      Zempi ✨
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr className="border-b border-green-200">
                    <td className="py-4 px-4 text-left font-semibold text-gray-800">Preço/mês</td>
                    <td className="py-4 px-4 text-gray-700">R$ 700+</td>
                    <td className="py-4 px-4 bg-green-50 font-bold text-green-700 text-xl">R$ 400-600</td>
                  </tr>
                  <tr className="border-b border-green-200">
                    <td className="py-4 px-4 text-left font-semibold text-gray-800">Compromisso</td>
                    <td className="py-4 px-4 text-gray-700">3 meses antecipado</td>
                    <td className="py-4 px-4 bg-green-50 font-bold text-green-700">Mensal, sem trava</td>
                  </tr>
                  <tr className="border-b border-green-200">
                    <td className="py-4 px-4 text-left font-semibold text-gray-800">Acompanhamento</td>
                    <td className="py-4 px-4 text-gray-700">Limitado</td>
                    <td className="py-4 px-4 bg-green-50 font-bold text-green-700">IA 24/7 + médico</td>
                  </tr>
                  <tr className="border-b border-green-200">
                    <td className="py-4 px-4 text-left font-semibold text-gray-800">Consulta</td>
                    <td className="py-4 px-4 text-gray-700">À parte (R$ 300+)</td>
                    <td className="py-4 px-4 bg-green-50 font-bold text-green-700">Incluída</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-left font-semibold text-gray-800">Total 3 meses</td>
                    <td className="py-4 px-4 text-gray-700 text-xl font-bold">~R$ 2.400</td>
                    <td className="py-4 px-4 bg-green-600 text-white font-bold text-2xl rounded-b-xl">~R$ 1.500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center bg-yellow-100 border-2 border-yellow-400 rounded-xl p-6">
              <div className="text-3xl font-bold text-yellow-800 mb-2">
                💰 Economize até R$ 900 nos primeiros 3 meses
              </div>
              <p className="text-yellow-700 text-lg">
                Mesma eficácia, preço que cabe no seu bolso
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ✦ Inteligência Artificial Que Cuida de Você
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Não basta tomar a medicação. Nosso sistema inteligente monitora tudo e te orienta em tempo real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🤖",
                title: "Monitoramento Contínuo",
                desc: "Acompanha peso, medidas, sintomas e progresso. Identifica padrões e sugere ajustes automáticos."
              },
              {
                icon: "💬",
                title: "Suporte 24/7",
                desc: "Dúvidas? Efeitos colaterais? Nossa IA responde instantaneamente, qualquer hora do dia."
              },
              {
                icon: "📊",
                title: "Insights Personalizados",
                desc: "Recomendações de alimentação, hidratação e exercícios baseadas no seu perfil único."
              },
              {
                icon: "⚠️",
                title: "Alertas Inteligentes",
                desc: "Notificações sobre horário de aplicação, interações medicamentosas e sinais de atenção."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ✦ Genérico Não Significa Inferior
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos medicamentos passam pelos mesmos testes rigorosos que as marcas premium.
              Mesma eficácia, preço acessível.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { label: "Segurança", sublabel: "Aprovado" },
              { label: "PH", sublabel: "Aprovado" },
              { label: "Potência", sublabel: "Aprovado" },
              { label: "Esterilidade", sublabel: "Aprovado" },
              { label: "Rastreabilidade", sublabel: "Aprovado" }
            ].map((check, i) => (
              <div key={i} className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center hover:bg-green-100 transition-colors">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-gray-900 mb-1">{check.label}</div>
                <div className="text-green-700 italic font-semibold">{check.sublabel}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl mb-2">🏥</div>
              <div className="font-semibold text-gray-900">Laboratórios certificados GMP</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="text-3xl mb-2">🔬</div>
              <div className="font-semibold text-gray-900">Laudos de qualidade disponíveis</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-3xl mb-2">📋</div>
              <div className="font-semibold text-gray-900">Prescrição médica obrigatória</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ✦ Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Genérico é tão eficaz quanto Ozempic ou Mounjaro?",
                a: "Sim! Os genéricos contêm o mesmo princípio ativo (Semaglutida ou Tirzepatida) e passam pelos mesmos testes de bioequivalência exigidos pela Anvisa. A diferença está apenas no preço."
              },
              {
                q: "Por que é mais barato?",
                a: "Não pagamos royalties de marca nem marketing milionário. Trabalhamos direto com laboratórios certificados e operamos 100% online, reduzindo custos."
              },
              {
                q: "Como funciona o acompanhamento por IA?",
                a: "Nossa tecnologia analisa seus dados (peso, sintomas, adesão) e cruza com milhares de casos similares para sugerir o melhor caminho. Sempre validado por médicos reais."
              },
              {
                q: "Preciso me comprometer por 3 meses?",
                a: "Não! Você pode contratar plano mensal e cancelar quando quiser. Sem multas, sem pegadinhas."
              },
              {
                q: "Quanto tempo demora para ver resultados?",
                a: "A maioria das pacientes nota redução de apetite já na 1ª semana. Perda de peso significativa geralmente aparece após 4-8 semanas."
              },
              {
                q: "É seguro? Tem efeitos colaterais?",
                a: "GLP-1 é aprovado pela Anvisa e FDA. Efeitos colaterais mais comuns são náusea leve e prisão de ventre no início, que costumam passar. Nossos médicos te orientam sobre tudo."
              },
              {
                q: "Como é a consulta médica?",
                a: "100% online, por vídeo. Dura cerca de 20-30 minutos. O médico avalia seu histórico, tira dúvidas e prescreve o tratamento ideal para você."
              },
              {
                q: "Quanto custa exatamente?",
                a: "Semaglutida: R$ 400-500/mês | Tirzepatida: R$ 500-600/mês | Consulta médica: incluída no primeiro mês"
              },
              {
                q: "Posso usar se tenho diabetes?",
                a: "Sim, mas com acompanhamento rigoroso. Nossos médicos vão avaliar seu caso e ajustar a dosagem conforme necessário."
              },
              {
                q: "Como cancelo se não me adaptar?",
                a: "Basta avisar pelo app ou WhatsApp até 5 dias antes da renovação. Sem burocracia."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-green-300 transition-colors">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg pr-4">{faq.q}</span>
                  <span className="text-green-600 text-2xl flex-shrink-0">
                    {activeAccordion === i ? "−" : "+"}
                  </span>
                </button>
                {activeAccordion === i && (
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta-section" className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comece Sua Transformação Hoje
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Mais de 10 mil mulheres já confiam no Zempi para alcançar seus objetivos de saúde.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 text-xl px-12 py-7 rounded-xl shadow-xl font-bold"
            >
              Iniciar Minha Avaliação Gratuita
            </Button>
          </div>

          <div className="space-y-3 text-lg opacity-90">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Avaliação 100% gratuita e sem compromisso</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Heart className="w-5 h-5" />
              <span>Primeira consulta médica incluída</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Satisfação garantida ou seu dinheiro de volta</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm leading-relaxed space-y-4">
            <p>
              As informações contidas neste site não devem ser usadas para automedicação e não substituem,
              em hipótese alguma, as orientações dadas pelo profissional da área médica. Somente o médico
              está apto a diagnosticar qualquer problema de saúde e prescrever o tratamento adequado.
            </p>
            <p>
              Zempi é uma plataforma de telemedicina que conecta pacientes a médicos licenciados.
              Todos os medicamentos são prescritos por profissionais independentes e produzidos em
              laboratórios certificados pela Anvisa.
            </p>
            <p className="text-center pt-4 text-gray-500">
              Copyright Zempi 2025. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-green-600 p-4 shadow-2xl md:hidden z-50">
        <Button
          onClick={scrollToAction}
          className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 rounded-xl shadow-lg font-bold"
        >
          Ver as Opções Disponíveis
        </Button>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: inline-block;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
