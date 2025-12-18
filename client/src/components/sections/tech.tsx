import { motion } from "framer-motion";
import techImg from "@assets/generated_images/abstract_technology_network.png";
import { Button } from "@/components/ui/button";
// import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowUpRight, Activity, Users, TrendingUp, Search } from "lucide-react";

// Mock Data for the chart
const data = [
  { name: 'Seg', value: 4000 },
  { name: 'Ter', value: 3000 },
  { name: 'Qua', value: 5000 },
  { name: 'Qui', value: 4500 },
  { name: 'Sex', value: 6000 },
  { name: 'Sab', value: 7500 },
  { name: 'Dom', value: 5500 },
];

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
            {/* Interface Container */}
            <div className="bg-[#1A1D24] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/50">
                {/* Window Header */}
                <div className="bg-[#15171C] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <div className="text-[10px] text-white/30 font-mono tracking-widest uppercase">
                        Viva_OS_v2.4 // Analytics
                    </div>
                </div>

                {/* Dashboard Grid */}
                <div className="p-6 grid grid-cols-2 gap-4">
                    {/* Metric Card 1: Revenue */}
                    <div className="col-span-2 bg-[#0F1115]/50 border border-white/5 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Receita Projetada (Semana)</p>
                                <h3 className="text-2xl text-white font-medium">R$ 145.200</h3>
                            </div>
                            <div className="flex items-center text-emerald-400 text-xs bg-emerald-400/10 px-2 py-1 rounded">
                                <ArrowUpRight className="w-3 h-3 mr-1" />
                                +12.5%
                            </div>
                        </div>
                        <div className="h-[120px] w-full flex items-end space-x-2 px-2 pb-2">
                             {/* Mock Chart with CSS Bars */}
                             {data.map((d, i) => (
                               <div key={i} className="flex-1 bg-white/10 rounded-t-sm hover:bg-white/20 transition-all relative group" style={{ height: `${(d.value / 7500) * 100}%` }}>
                                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-[10px] text-white bg-black/80 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    R${d.value}
                                  </div>
                               </div>
                             ))}
                        </div>
                    </div>

                    {/* Metric Card 2: Occupancy */}
                    <div className="bg-[#0F1115]/50 border border-white/5 rounded-lg p-4 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                             <div className="p-2 bg-white/5 rounded-md">
                                 <Activity className="w-4 h-4 text-white/80" />
                             </div>
                             <span className="text-[10px] text-white/40 font-mono">LIVE</span>
                        </div>
                        <div>
                            <div className="text-2xl font-medium text-white mb-1">87%</div>
                            <div className="text-xs text-white/40">Taxa de Ocupação</div>
                            <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                                <motion.div 
                                    className="bg-white h-full" 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "87%" }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Metric Card 3: AI Recommendations */}
                    <div className="bg-[#0F1115]/50 border border-white/5 rounded-lg p-4 flex flex-col justify-between group cursor-pointer hover:border-white/20 transition-colors">
                        <div className="flex justify-between items-start">
                             <div className="p-2 bg-white/5 rounded-md">
                                 <Search className="w-4 h-4 text-white/80" />
                             </div>
                             <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        </div>
                        <div>
                             <div className="text-sm text-white mb-1 leading-tight">3 Oportunidades de Upsell Detectadas</div>
                             <div className="text-[10px] text-white/40 mt-1">Ver detalhes da análise</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="px-6 py-3 border-t border-white/5 bg-[#15171C]/50 flex justify-between items-center text-[10px] text-white/30 font-mono">
                    <span>STATUS: ONLINE</span>
                    <span>LATENCY: 12ms</span>
                </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full -z-10 opacity-50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
