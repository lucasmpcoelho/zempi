import { motion } from "framer-motion";
import techImg from "@assets/generated_images/abstract_technology_network.png";
import { Button } from "@/components/ui/button";
import { Activity, Users, TrendingUp } from "lucide-react";
import { AgentChat } from "./agent-chat";
import { PatientFlow } from "./patient-flow";

export function Technology() {
  return (
    <section id="technology" className="py-24 md:py-32 bg-[#0F1115] text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
         <img src={techImg} alt="Technology Background" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white">
               Inteligência Artificial <br/> <span className="text-white/50 italic">Aplicada à Gestão</span>
             </h2>
             <p className="text-lg text-white/70 font-light mb-8 leading-relaxed max-w-md">
               Nossa plataforma proprietária atua nas alavancas críticas do negócio, trazendo eficiência sem perder a humanização.
             </p>
             <ul className="space-y-4 mb-10 text-white/80 font-light">
               <li className="flex items-center gap-3">
                 <div className="bg-white/10 p-2 rounded-full">
                    <TrendingUp className="w-4 h-4 text-white" />
                 </div>
                 Gestão Inteligente de Estoque & Compras (Supply Chain)
               </li>
               <li className="flex items-center gap-3">
                 <div className="bg-white/10 p-2 rounded-full">
                    <Users className="w-4 h-4 text-white" />
                 </div>
                 Eficiência Comercial & Aumento de Retenção
               </li>
               <li className="flex items-center gap-3">
                 <div className="bg-white/10 p-2 rounded-full">
                    <Activity className="w-4 h-4 text-white" />
                 </div>
                 Centralização de Serviços & Backoffice
               </li>
             </ul>
             <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none px-8 py-6 text-sm tracking-widest uppercase font-semibold">
               Conheça a Plataforma
             </Button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <AgentChat />

            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full -z-10 opacity-50" />
          </motion.div>

        </div>

        {/* Patient Journey Flow */}
        <PatientFlow />
      </div>
    </section>
  );
}
