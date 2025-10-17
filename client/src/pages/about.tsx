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
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-sm font-medium text-blue-900">
                Nossa História
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight leading-tight" data-testid="about-title">
              Quem somos
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Dois empreendedores unidos pela missão de transformar o cuidado com a saúde
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-white rounded-2xl p-10 border border-gray-200 shadow-sm"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
              Nossa Missão
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Resolver o problema de aderência aos tratamentos com <strong className="text-gray-900">Ozempic, Mounjaro e Saxenda</strong> através de acompanhamento médico contínuo, personalizado e disponível 24/7.
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
                className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                data-testid={`founder-card-${index}`}
              >
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative group mb-6">
                    <img
                      src={founder.photo}
                      alt={`Foto de ${founder.name}`}
                      className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl object-cover border-2 border-gray-200 group-hover:border-gray-300 transition-colors"
                      data-testid={`photo-${index}`}
                    />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-3">
                    {founder.role}
                  </p>
                  <div className="inline-block px-4 py-1.5 bg-gray-100 rounded-full mb-4">
                    <p className="text-sm font-medium text-gray-700">
                      {founder.background}
                    </p>
                  </div>
                  
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-all inline-flex items-center gap-2 group relative"
                    data-testid={`linkedin-${index}`}
                    aria-label={`LinkedIn de ${founder.name}`}
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium relative">
                      LinkedIn
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-600 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </div>

                <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6 text-center">
                  {founder.bio}
                </p>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 font-semibold mb-2 uppercase tracking-wide text-center">
                    Missão Pessoal
                  </p>
                  <p className="text-base text-gray-900 font-medium leading-relaxed text-center">
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900 tracking-tight text-center">
              Por que criamos o Zempi
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed bg-white rounded-2xl p-8 lg:p-10 border border-gray-200">
              <p>
                <strong className="text-gray-900">50% dos pacientes desistem de tratamentos com Ozempic e Mounjaro nos primeiros 3 meses.</strong> Esse número nos chocou. Não por falta de medicamento, mas por falta de suporte contínuo.
              </p>
              
              <p>
                Nós acreditamos que <strong className="text-gray-900">toda pessoa merece ter acompanhamento médico ao seu lado</strong> — alguém que entende seus sintomas, monitora seus padrões, celebra suas conquistas e oferece orientação quando surgem dúvidas.
              </p>
              
              <p>
                O Zempi nasceu dessa crença. Combinamos inteligência artificial de ponta com empatia humana para criar uma experiência que <strong className="text-gray-900">transforma tratamentos solitários em jornadas apoiadas</strong>.
              </p>
              
              <p className="pt-4 text-xl font-semibold text-blue-600 border-l-4 border-blue-600 pl-4">
                Porque saúde não é sobre números em uma balança. É sobre viver melhor, com mais energia, confiança e bem-estar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
              Junte-se à nossa jornada
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Estamos construindo o futuro do cuidado de saúde. Você pode fazer parte disso.
            </p>
            <a
              href="/#waitlist"
              className="inline-block px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              data-testid="button-join-waitlist"
            >
              Solicitar Acesso ao Programa Piloto
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
