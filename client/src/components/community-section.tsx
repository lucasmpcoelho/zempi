import { motion } from "framer-motion";
import { MessageCircle, Users, Heart, Sparkles } from "lucide-react";

const groups = [
  {
    name: "Iniciantes GLP-1",
    members: "230",
    description: "Primeiras semanas, dúvidas e adaptação",
    color: "bg-blue-500"
  },
  {
    name: "Receitas Aprovadas",
    members: "410",
    description: "Compartilhe pratos que funcionaram para você",
    color: "bg-green-500"
  },
  {
    name: "Manutenção",
    members: "180",
    description: "Vida após atingir a meta de peso",
    color: "bg-purple-500"
  },
  {
    name: "Exercícios & Músculos",
    members: "290",
    description: "Treinos para prevenir perda muscular",
    color: "bg-orange-500"
  }
];

const testimonials = [
  {
    name: "Carolina S.",
    message: "O grupo me salvou! Quando pensei em desistir, as histórias de outras pessoas me motivaram a continuar.",
    avatar: "CS"
  },
  {
    name: "Pedro H.",
    message: "Troquei dicas de receitas que não causam náusea. Melhor suporte que já tive!",
    avatar: "PH"
  },
  {
    name: "Ana Clara M.",
    message: "Saber que tem mais 500 pessoas passando pelo mesmo me faz sentir menos sozinha.",
    avatar: "ACM"
  }
];

export default function CommunitySection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fluid-h2 font-bold mb-4 text-foreground tracking-tight" data-testid="community-title">
            Você não está sozinho nessa jornada
          </h2>
          <p className="fluid-lead text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            Junte-se a mais de 500 pacientes GLP-1 que estão conquistando resultados juntos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Community Groups */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                Grupos temáticos no WhatsApp
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-light">
                Conecte-se com pessoas que entendem exatamente o que você está passando
              </p>
            </div>

            <div className="space-y-4">
              {groups.map((group, index) => (
                <motion.div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-testid={`community-group-${index}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 ${group.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <MessageCircle className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg text-foreground">
                          {group.name}
                        </h4>
                        <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                          <Users className="h-4 w-4" />
                          <span>{group.members}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-start space-x-3">
                <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-foreground mb-2">
                    Moderação profissional
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Todos os grupos são moderados por nutricionistas especializados em GLP-1. Ambiente seguro, respeitoso e baseado em evidências.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Testimonials Chat Style */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                O que a comunidade está dizendo
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-light">
                Suporte real de quem vive a mesma experiência
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 space-y-6" data-testid="community-testimonials">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  data-testid={`testimonial-${index}`}
                >
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  
                  {/* Message Bubble */}
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm">
                      <p className="text-foreground leading-relaxed">
                        {testimonial.message}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 ml-2">
                      {testimonial.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                data-testid="community-stat-members"
              >
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Membros ativos</div>
              </motion.div>
              
              <motion.div
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                data-testid="community-stat-messages"
              >
                <div className="text-4xl font-bold text-primary mb-2">2.4k</div>
                <div className="text-sm text-muted-foreground">Mensagens por semana</div>
              </motion.div>
            </div>

            <motion.div
              className="flex items-center space-x-3 bg-white border-2 border-gray-100 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Heart className="h-8 w-8 text-red-500 flex-shrink-0" fill="currentColor" />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">92%</span> dos membros dizem que a comunidade foi essencial para manter a aderência ao tratamento
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
