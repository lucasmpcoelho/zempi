import { motion } from "framer-motion";
import { Calendar, Bell, Stethoscope, Heart } from "lucide-react";

interface FlowStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: FlowStep[] = [
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Agendamento",
    description: "Paciente agenda online",
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Lembrete",
    description: "Confirmação automática 24h",
  },
  {
    icon: <Stethoscope className="w-5 h-5" />,
    title: "Atendimento",
    description: "Check-in digital + prontuário",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Follow-up",
    description: "Satisfação + reagendamento",
  },
];

export function PatientFlow() {
  return (
    <div className="mt-20 pt-16 border-t border-white/5">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase block mb-3">
          Jornada Automatizada
        </span>
        <h3 className="text-2xl md:text-3xl font-serif text-white/90">
          Do agendamento ao follow-up,{" "}
          <span className="text-white/50 italic">sem fricção</span>
        </h3>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Connection Line - Desktop */}
        <div className="hidden md:block absolute top-[2.5rem] left-[12%] right-[12%] h-[1px] bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 + 0.5 }}
            >
              {/* Step Number - Adjusted Position */}
              <div className="mb-4 relative">
                <div className="w-6 h-6 rounded-full bg-[#1A1D24] border border-white/10 flex items-center justify-center text-[10px] text-white/40 font-mono z-20 relative">
                  0{idx + 1}
                </div>
                {/* Vertical Connector to Icon */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-white/10" />
              </div>

              {/* Icon Circle */}
              <div className="relative z-10 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#1A1D24] border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/30 transition-all duration-500 shadow-lg shadow-black/20">
                  {step.icon}
                </div>
                
                {/* Subtle Glow on hover */}
                <div className="absolute inset-0 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Pulse effect on first node */}
                {idx === 0 && (
                  <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse" />
                )}
              </div>

              {/* Label */}
              <h4 className="text-sm font-medium text-white/90 mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-white/40 leading-relaxed max-w-[140px] font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA hint */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-[10px] text-white/20 font-mono tracking-widest uppercase">
          WORKFLOW AUTOMATIZADO VIVA_OS
        </p>
      </motion.div>
    </div>
  );
}
