import { motion } from "framer-motion";
import { Brain, Database, Shield, Zap, Cpu, Lock } from "lucide-react";

const technicalFeatures = [
  {
    icon: Brain,
    title: "IA Especializada em GLP-1",
    description: "Modelo treinado com milhares de casos reais de tratamentos GLP-1, não apenas uma IA genérica de saúde",
    details: [
      "Conhecimento específico de Ozempic, Mounjaro, Saxenda",
      "Padrões de efeitos colaterais documentados",
      "Protocolos nutricionais otimizados para GLP-1"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Database,
    title: "Análise Avançada de Padrões",
    description: "Algoritmos de machine learning que identificam correlações únicas no seu histórico pessoal",
    details: [
      "Detecção de gatilhos de náusea específicos",
      "Previsão de risco de perda muscular",
      "Otimização de timing de medicação vs. refeições"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "Segurança de Classe Médica",
    description: "Infraestrutura que atende aos mais altos padrões de segurança e privacidade do setor de saúde",
    details: [
      "Criptografia AES-256 ponta a ponta",
      "Conformidade total com LGPD",
      "Servidores no Brasil, dados não saem do país"
    ],
    color: "from-green-500 to-green-600"
  }
];

const techStack = [
  { icon: Cpu, label: "IA de última geração" },
  { icon: Lock, label: "Segurança bancária" },
  { icon: Zap, label: "Resposta < 1s" },
  { icon: Database, label: "Cloud escalável" }
];

export default function TechnicalExpertiseSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Tecnologia de Ponta
            </span>
          </div>
          
          <h2 className="fluid-h2 font-bold mb-6 tracking-tight" data-testid="tech-title">
            Não é apenas mais um chatbot.<br/>
            É <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">engenharia de elite</span>.
          </h2>
          <p className="fluid-lead text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Construído por engenheiros de empresas Fortune 500, usando tecnologia que antes só estava disponível para instituições médicas de grande porte
          </p>
        </motion.div>

        {/* Main Technical Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {technicalFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              data-testid={`tech-feature-${index}`}
            >
              {/* Gradient glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-75 rounded-3xl blur transition duration-500`} />
              
              <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 h-full hover:border-primary/50 transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-2.5">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-400">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Bar */}
        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Stack tecnológico enterprise
            </h3>
            <p className="text-gray-400">
              A mesma infraestrutura usada por gigantes da tecnologia
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-gray-700/30 rounded-xl border border-gray-600/50 hover:border-primary/50 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                data-testid={`tech-stack-${index}`}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-3">
                  <tech.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-white">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="inline-block bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-3xl">
            <p className="text-xl sm:text-2xl font-semibold text-white mb-4 leading-relaxed">
              "Tecnologia de primeira linha a serviço da <span className="text-primary">sua saúde</span>"
            </p>
            <p className="text-gray-400 text-sm">
              — Rafael Sampaio, CTO • Ex-PwC, Deloitte
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

