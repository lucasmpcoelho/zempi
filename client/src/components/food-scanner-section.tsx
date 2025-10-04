import { motion } from "framer-motion";
import { Camera, Zap, CheckCircle2, Sparkles } from "lucide-react";

const features = [
  {
    text: "Reconhece pratos brasileiros (feijoada, pão de queijo, tapioca...)"
  },
  {
    text: "Análise adaptada para GLP-1: proteína, gordura, fibra"
  },
  {
    text: "Alertas inteligentes: \"Esse prato pode causar náusea\""
  },
  {
    text: "Histórico completo de refeições e padrões"
  }
];

export default function FoodScannerSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fluid-h2 font-bold mb-4 text-foreground tracking-tight" data-testid="scanner-title">
            Esqueça planilhas de calorias
          </h2>
          <p className="fluid-lead text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light">
            Tire uma foto da refeição e receba análise nutricional completa em 3 segundos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Visual Demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 relative overflow-hidden" data-testid="scanner-visual">
              {/* Phone Frame Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto">
                {/* Camera Icon with Animation */}
                <div className="relative mb-6">
                  <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                      className="absolute inset-0 bg-primary/10 rounded-xl"
                    />
                    <Camera className="text-primary h-20 w-20 relative z-10" />
                  </div>
                  
                  {/* Floating Zap Icon */}
                  <motion.div
                    className="absolute -top-2 -right-2 bg-primary rounded-full p-3 shadow-lg"
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="h-6 w-6 text-white" fill="white" />
                  </motion.div>
                </div>

                {/* Analysis Result Card */}
                <motion.div
                  className="bg-gray-50 rounded-xl p-4 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">Proteína</span>
                    <span className="text-sm text-primary font-bold">32g ✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">Gordura</span>
                    <span className="text-sm text-yellow-600 font-bold">18g ⚠️</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">Carboidratos</span>
                    <span className="text-sm text-gray-600 font-bold">45g</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex items-start space-x-2">
                      <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground">
                        Alto teor de gordura pode causar náusea. Considere porção menor.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Tecnologia que facilita sua vida
              </h3>
              <p className="text-xl text-muted-foreground font-light">
                IA treinada especificamente para pacientes GLP-1 no Brasil
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 bg-white rounded-2xl p-4 border border-gray-100"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-testid={`scanner-feature-${index}`}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg text-foreground pt-0.5">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-base text-muted-foreground italic">
                "Antes eu passava 20 minutos pesquisando cada alimento. Agora é foto → análise → decisão."
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Juliana R., usuária beta</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
