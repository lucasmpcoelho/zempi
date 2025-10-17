import { motion } from "framer-motion";
import { Shield, Award, Brain, Users, CheckCircle2, Zap } from "lucide-react";

const credentials = [
  {
    icon: Brain,
    title: "Expertise de elite",
    description: "Time com experiência em McKinsey, Google, Amazon, PwC e Deloitte",
    highlight: "Top 1% do mercado"
  },
  {
    icon: Shield,
    title: "Segurança certificada",
    description: "Criptografia de ponta a ponta e conformidade total com LGPD",
    highlight: "Privacidade garantida"
  },
  {
    icon: Award,
    title: "Especialização em GLP-1",
    description: "IA treinada especificamente com milhares de casos de tratamentos GLP-1",
    highlight: "Não é IA genérica"
  },
  {
    icon: Users,
    title: "Moderação profissional",
    description: "Nutricionistas especializados supervisionam todas as orientações",
    highlight: "Suporte humano real"
  }
];

const trustBadges = [
  { text: "🔒 Dados criptografados", subtext: "AES-256" },
  { text: "✅ Conformidade LGPD", subtext: "100% em conformidade" },
  { text: "🇧🇷 Servidor no Brasil", subtext: "Seus dados não saem do país" },
  { text: "⚕️ Supervisionado por especialistas", subtext: "Nutricionistas certificados" }
];

export default function AuthoritySection() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Por que confiar no Zempi
            </span>
          </div>
          
          <h2 className="fluid-h2 font-bold mb-4 text-foreground tracking-tight" data-testid="authority-title">
            Tecnologia de ponta com <span className="gradient-text">expertise comprovada</span>
          </h2>
          <p className="fluid-lead text-muted-foreground max-w-3xl mx-auto font-light">
            Não somos apenas mais um app de saúde. Somos especialistas com credenciais de elite construindo o futuro do cuidado médico.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`credential-card-${index}`}
            >
              <div className="h-full bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <credential.icon className="h-7 w-7 text-primary" />
                </div>
                
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wide">
                    {credential.highlight}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {credential.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {credential.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                data-testid={`trust-badge-${index}`}
              >
                <div className="text-2xl mb-2">{badge.text.split(' ')[0]}</div>
                <div className="font-semibold text-foreground text-sm mb-1">
                  {badge.text.split(' ').slice(1).join(' ')}
                </div>
                <div className="text-xs text-muted-foreground">
                  {badge.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder Credentials */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full mb-4">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-wide">
                  Fundadores
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Liderados por veteranos da indústria
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                Nossa liderança combina décadas de experiência em consultoria estratégica, produtos digitais de escala global e tecnologia financeira para criar a melhor solução de suporte médico do Brasil.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-white rounded-lg border border-gray-200">
                  <div className="text-xs text-muted-foreground mb-0.5">CEO</div>
                  <div className="font-semibold text-sm text-foreground">Ex-McKinsey, Google, Amazon</div>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg border border-gray-200">
                  <div className="text-xs text-muted-foreground mb-0.5">CTO</div>
                  <div className="font-semibold text-sm text-foreground">Ex-PwC, Deloitte</div>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="bg-white rounded-2xl p-6 shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="text-sm font-semibold text-foreground">
                    Apaixonados por wellness e tecnologia
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="text-sm font-semibold text-foreground">
                    Experiência em empresas Fortune 500
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="text-sm font-semibold text-foreground">
                    Missão: democratizar acesso à saúde
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

