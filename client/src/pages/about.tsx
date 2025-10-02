import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import lucasPhoto from "@assets/lucas coelho picture_1759449350469.png";
import rafaelPhoto from "@assets/rafael sampaio pic_1759449350471.jpeg";

export default function About() {
  const founders = [
    {
      name: "Lucas Coelho",
      role: "Co-founder & CEO",
      linkedin: "https://www.linkedin.com/in/lucasmpcoelho/",
      background: "McKinsey, Google, Amazon",
      photo: lucasPhoto,
      bio: "Apaixonado por wellness e tecnologia, Lucas traz experiência de empresas de classe mundial como McKinsey, Google e Amazon. Acredita que a saúde é o maior ativo que podemos ter e aplica sua expertise em produtos digitais e estratégia para criar ferramentas que realmente transformam a vida das pessoas.",
      mission: "Democratizar o acesso a suporte médico inteligente e personalizado"
    },
    {
      name: "Rafael Sampaio",
      role: "Co-founder & CTO",
      linkedin: "https://www.linkedin.com/in/sampaiorafa/",
      background: "FinTech Expert, PwC, Deloitte",
      photo: rafaelPhoto,
      bio: "Rafael combina expertise técnica de ponta com paixão por impacto social. Com experiência em FinTech e passagens por PwC e Deloitte, possui forte background em engenharia de software e sistemas escaláveis. Acredita que a tecnologia deve servir às pessoas, não o contrário, e lidera a construção de sistemas que empoderam pacientes a tomarem controle da própria jornada de saúde.",
      mission: "Criar tecnologia que coloca o paciente no centro de sua própria saúde"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-foreground tracking-tight leading-tight" data-testid="about-title">
              Quem somos nós
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              Somos dois apaixonados por wellness que acreditam que tecnologia e empatia podem transformar a forma como cuidamos da nossa saúde.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground tracking-tight">
              Nossa Missão
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              Resolver o problema de aderência aos tratamentos GLP-1 através de um assistente médico de IA que oferece suporte contínuo, personalizado e proativo 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Os Fundadores
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
              Dois empreendedores unidos pela visão de criar um futuro onde todos têm acesso a cuidado de saúde inteligente e acessível.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-border hover:shadow-xl transition-shadow"
                data-testid={`founder-card-${index}`}
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative group mb-6">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                    <img
                      src={founder.photo}
                      alt={`Foto de ${founder.name}`}
                      className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                      data-testid={`photo-${index}`}
                    />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-3">
                    {founder.role}
                  </p>
                  <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-4">
                    <p className="text-sm font-medium text-primary">
                      {founder.background}
                    </p>
                  </div>
                  
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                    data-testid={`linkedin-${index}`}
                    aria-label={`LinkedIn de ${founder.name}`}
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>

                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 text-center">
                  {founder.bio}
                </p>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground font-semibold mb-2 uppercase tracking-wide text-center">
                    Missão Pessoal
                  </p>
                  <p className="text-base lg:text-lg text-foreground font-medium leading-relaxed text-center">
                    "{founder.mission}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-foreground tracking-tight text-center">
              Por Que Criamos o Zempi
            </h2>
            
            <div className="space-y-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">50% dos pacientes desistem de tratamentos GLP-1 nos primeiros 3 meses.</strong> Esse número nos chocou. Não por falta de medicamento, mas por falta de suporte contínuo.
              </p>
              
              <p>
                Nós acreditamos que <strong className="text-foreground">toda pessoa merece ter um assistente médico ao seu lado</strong> - alguém que entende seus sintomas, monitora seus padrões, celebra suas conquistas e oferece orientação quando surgem dúvidas.
              </p>
              
              <p>
                O Zempi nasceu dessa crença. Combinamos inteligência artificial de ponta com empatia humana para criar uma experiência que <strong className="text-foreground">transforma tratamentos solitários em jornadas apoiadas</strong>.
              </p>
              
              <p className="pt-4 text-xl lg:text-2xl font-semibold text-primary">
                Porque saúde não é sobre números em uma balança. É sobre viver melhor, com mais energia, confiança e bem-estar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Junte-se à nossa jornada
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light mb-10">
              Estamos construindo o futuro do cuidado de saúde. E você pode fazer parte disso.
            </p>
            <a
              href="/#contato"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl text-lg hover:opacity-90 transition-opacity shadow-lg"
              data-testid="button-join-waitlist"
            >
              Entre na Lista de Espera
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
