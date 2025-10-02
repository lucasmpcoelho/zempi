import { Award, GraduationCap, Heart, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dr. Ana Silva",
    role: "Médica Endocrinologista",
    credentials: "CRM 12345-SP | Especialista em Obesidade e Diabetes",
    bio: "15 anos de experiência em endocrinologia com foco em tratamentos com medicações GLP-1. Formada pela USP com pós-graduação em Harvard.",
    initials: "AS",
  },
  {
    name: "Dr. Carlos Mendes",
    role: "Médico Nutrólogo",
    credentials: "CRM 67890-RJ | Especialista em Nutrologia",
    bio: "Especialista em nutrição clínica e emagrecimento saudável. Membro da Sociedade Brasileira de Nutrologia com mais de 10 anos de prática.",
    initials: "CM",
  },
  {
    name: "Dra. Mariana Costa",
    role: "Nutricionista Clínica",
    credentials: "CRN 98765-SP | Mestre em Nutrição Clínica",
    bio: "Especialista em acompanhamento nutricional para pacientes em tratamento com GLP-1. Mestrado pela UNIFESP focado em obesidade.",
    initials: "MC",
  },
];

const credentials = [
  {
    icon: Award,
    title: "Reconhecimento Profissional",
    description: "Membros de sociedades médicas reconhecidas nacionalmente",
  },
  {
    icon: GraduationCap,
    title: "Formação de Excelência",
    description: "Pós-graduações nas melhores instituições do Brasil e exterior",
  },
  {
    icon: Stethoscope,
    title: "Experiência Clínica",
    description: "Mais de 10.000 pacientes atendidos com sucesso",
  },
  {
    icon: Heart,
    title: "Cuidado Humanizado",
    description: "Abordagem personalizada focada no bem-estar do paciente",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="team-title">
            Equipe <span className="gradient-text">médica especializada</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profissionais altamente qualificados que desenvolveram e supervisionam o Zempi
            para garantir sua segurança e eficácia.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-2xl p-8 shadow-lg border border-border hover-lift"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-testid={`team-member-${index}`}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
                <span className="text-primary font-bold text-2xl">{member.initials}</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
              <p className="text-primary text-center font-semibold mb-2">{member.role}</p>
              <p className="text-xs text-muted-foreground text-center mb-4 border-b border-border pb-4">
                {member.credentials}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.title}
              className="bg-gradient-bg rounded-xl p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`credential-${index}`}
            >
              <credential.icon className="text-primary h-8 w-8 mb-3" />
              <h4 className="font-semibold mb-2">{credential.title}</h4>
              <p className="text-sm text-muted-foreground">{credential.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Medical Supervision Note */}
        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Shield className="text-primary h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Supervisão Médica Contínua</h3>
              <p className="text-muted-foreground leading-relaxed">
                O Zempi é supervisionado por nossa equipe médica multidisciplinar. Todos os
                protocolos e orientações fornecidos pela IA são baseados em evidências
                científicas e revisados regularmente por profissionais especializados. O
                assistente não substitui consultas médicas, mas complementa seu tratamento com
                acompanhamento diário personalizado.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Shield(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
