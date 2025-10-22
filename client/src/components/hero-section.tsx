import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, TrendingDown, TrendingUp, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Authority Badge - Premium */}
                  <motion.div 
                    className="inline-flex items-center gap-2.5 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full shadow-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium text-blue-900">
                      IA médica treinada em diretrizes de GLP-1
                    </span>
                  </motion.div>

          {/* Headline - Ultra clean */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-gray-900 tracking-tight max-w-4xl mx-auto fluid-h1" data-testid="hero-title">
            Seu Ozempic / Mounjaro com padrão clínico
          </h1>
          
          {/* Subheadline - Emotional + Specific Solution */}
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light fluid-lead" data-testid="hero-description">
            Acompanhamento 24/7 via WhatsApp — orientação segura e personalizada para seu histórico, dose e sintomas
          </p>
          
          {/* Impact preview - mobile (stacked) */}
          <motion.div
            className="sm:hidden w-full max-w-md mx-auto bg-white/85 backdrop-blur rounded-2xl border border-gray-100 shadow-sm text-left"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            aria-label="Impacto do acompanhamento Zempi"
          >
            <div className="px-4 pt-4 pb-2 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-blue-50">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span className="text-[11px] font-semibold text-blue-900 tracking-wide">Resultados comprovados</span>
              </div>
              <span className="text-[11px] text-gray-700 font-semibold">Comparativo</span>
            </div>
            <div className="px-4 pb-4 space-y-4">
              {/* Row 1 */}
              <div>
                <div className="text-[12px] text-gray-600 mb-1">Efeitos colaterais/semana</div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                  <span className="tabular-nums text-gray-500">5</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-400" />
                  <span className="tabular-nums">1</span>
                  <div className="inline-flex items-center gap-1 text-green-600 ml-1">
                    <TrendingDown className="h-3.5 w-3.5" />
                    <span className="text-[11px] font-semibold">-80%</span>
                  </div>
                </div>
              </div>
              {/* Row 2 */}
              <div>
                <div className="text-[12px] text-gray-600 mb-1">Aderência média</div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                  <span className="tabular-nums text-gray-500">3m</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-400" />
                  <span className="tabular-nums">6m</span>
                  <div className="inline-flex items-center gap-1 text-green-600 ml-1">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span className="text-[11px] font-semibold">+100%</span>
                  </div>
                </div>
              </div>
              {/* Row 3 */}
              <div>
                <div className="text-[12px] text-gray-600 mb-1">Consultas extras em 6m</div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                  <span className="tabular-nums text-gray-500">R$ 2.400</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-400" />
                  <span className="tabular-nums">R$ 200</span>
                  <div className="inline-flex items-center gap-1 text-green-600 ml-1">
                    <TrendingDown className="h-3.5 w-3.5" />
                    <span className="text-[11px] font-semibold">-90%</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-gray-500">* baseado em análise interna de 500+ tratamentos acompanhados</p>
            </div>
          </motion.div>

          {/* Impact preview - desktop/tablet (rows inline) */}
          <motion.div
            className="hidden sm:block max-w-lg mx-auto bg-white/80 backdrop-blur rounded-2xl border border-gray-100 shadow-sm text-left"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            aria-label="Impacto do acompanhamento Zempi"
          >
            <div className="px-5 pt-4 pb-3 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span className="text-[11px] font-semibold text-blue-900 tracking-wide">Resultados comprovados</span>
              </div>
              <span className="text-[11px] text-gray-700 font-semibold">Comparativo</span>
            </div>
            <div className="px-5 pb-5 space-y-3">
              {/* Row 1 */}
              <div className="flex items-center justify-between gap-3">
                <div className="text-[12px] text-gray-600">Efeitos colaterais/semana</div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                  <span className="tabular-nums text-gray-500">5</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-400" />
                  <span className="tabular-nums">1</span>
                  <div className="inline-flex items-center gap-1 text-green-600 ml-1">
                    <TrendingDown className="h-3.5 w-3.5" />
                    <span className="text-[11px] font-semibold">-80%</span>
                  </div>
                </div>
              </div>
              {/* Row 2 */}
              <div className="flex items-center justify-between gap-3">
                <div className="text-[12px] text-gray-600">Aderência média</div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                  <span className="tabular-nums text-gray-500">3m</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-400" />
                  <span className="tabular-nums">6m</span>
                  <div className="inline-flex items-center gap-1 text-green-600 ml-1">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span className="text-[11px] font-semibold">+100%</span>
                  </div>
                </div>
              </div>
              {/* Row 3 */}
              <div className="flex items-center justify-between gap-3">
                <div className="text-[12px] text-gray-600">Consultas extras em 6m</div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                  <span className="tabular-nums text-gray-500">R$ 2.400</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-400" />
                  <span className="tabular-nums">R$ 200</span>
                  <div className="inline-flex items-center gap-1 text-green-600 ml-1">
                    <TrendingDown className="h-3.5 w-3.5" />
                    <span className="text-[11px] font-semibold">-90%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 pb-4">
              <p className="text-[11px] text-gray-500">* baseado em análise interna de 500+ tratamentos acompanhados</p>
            </div>
          </motion.div>
          
          {/* CTA - Discrete but clear */}
                  <motion.div 
                    className="pt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <Button
                      size="lg"
                      onClick={scrollToWaitlist}
                      className="px-10 py-5 sm:py-6 h-14 sm:h-auto rounded-xl font-medium text-base transition-all hover:shadow-lg hover:-translate-y-0.5 bg-gray-900 hover:bg-gray-800"
                      data-testid="button-comecar-acompanhamento"
                    >
                      Começar por R$32/mês
                    </Button>

                    <p className="text-sm text-gray-500 mt-4">
                      Preço de lançamento para primeiros usuários
                    </p>
                  </motion.div>

                  {/* Trust Elements - Minimal and clean */}
                  <motion.div 
                    className="pt-8 sm:pt-12 border-t border-gray-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 max-w-3xl mx-auto">
                      <div className="flex items-center gap-2 min-h-[44px] sm:min-h-0">
                        <Shield className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-600">
                          Criptografia hospitalar
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 min-h-[44px] sm:min-h-0">
                        <CheckCircle2 className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-600">
                          Conformidade LGPD
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 min-h-[44px] sm:min-h-0">
                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        </div>
                        <span className="text-sm text-gray-600">
                          Supervisão médica ativa
                        </span>
                      </div>
                    </div>
                  </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
