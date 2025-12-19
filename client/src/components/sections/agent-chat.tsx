import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Package, Users, FileText, CheckCircle2, Clock, ArrowRight, Activity, AlertCircle } from "lucide-react";

// Tipos de dados mais ricos para os workflows
interface WorkflowStep {
  id: string;
  type: "analysis" | "action" | "success" | "warning";
  title: string;
  detail: string;
  timestamp: string;
  metric?: string;
}

interface Agent {
  id: string;
  name: string;
  role: string;
  icon: React.ReactNode;
  description: string;
  workflow: WorkflowStep[];
}

const agents: Agent[] = [
  {
    id: "sofia",
    name: "Sofia",
    role: "Supply Chain",
    icon: <Package className="w-4 h-4" />,
    description: "Gestão autônoma de insumos e cotação inteligente.",
    workflow: [
      {
        id: "s1",
        type: "warning",
        title: "Ruptura de Estoque",
        detail: "Toxina Botulínica (50U) abaixo do nível de segurança.",
        timestamp: "09:14",
        metric: "Nível Crítico",
      },
      {
        id: "s2",
        type: "analysis",
        title: "Cotação Automática",
        detail: "3 fornecedores homologados consultados em tempo real.",
        timestamp: "09:15",
        metric: "Buscando...",
      },
      {
        id: "s3",
        type: "success",
        title: "Ordem Gerada",
        detail: "Melhor oferta: Fornecedor MedPrime. Entrega: 24h.",
        timestamp: "09:16",
        metric: "-12.5% Custo",
      },
    ],
  },
  {
    id: "caio",
    name: "Caio",
    role: "Retenção",
    icon: <Users className="w-4 h-4" />,
    description: "Monitoramento de ciclo de vida e reativação.",
    workflow: [
      {
        id: "c1",
        type: "analysis",
        title: "Varredura de Base",
        detail: "Análise completa de prontuários inativos > 6 meses.",
        timestamp: "10:00",
        metric: "1.240 Pacientes",
      },
      {
        id: "c2",
        type: "action",
        title: "Oportunidade",
        detail: "5 pacientes elegíveis para retoque identificados.",
        timestamp: "10:02",
        metric: "Potencial: 8.5k",
      },
      {
        id: "c3",
        type: "success",
        title: "Campanha Ativa",
        detail: "Mensagens personalizadas enviadas via WhatsApp.",
        timestamp: "10:05",
        metric: "3 Agendados",
      },
    ],
  },
  {
    id: "luna",
    name: "Luna",
    role: "Backoffice",
    icon: <FileText className="w-4 h-4" />,
    description: "Automação financeira e conciliação bancária.",
    workflow: [
      {
        id: "l1",
        type: "action",
        title: "Conciliação",
        detail: "Processamento de recebíveis de cartão de crédito.",
        timestamp: "08:30",
        metric: "Processando...",
      },
      {
        id: "l2",
        type: "success",
        title: "NFs Emitidas",
        detail: "Lote de notas fiscais enviado à prefeitura.",
        timestamp: "08:35",
        metric: "12 NFs",
      },
      {
        id: "l3",
        type: "analysis",
        title: "Fechamento DRE",
        detail: "Relatório de performance semanal disponível.",
        timestamp: "09:00",
        metric: "Margem: +22%",
      },
    ],
  },
];

export function AgentChat() {
  const [activeAgentId, setActiveAgentId] = useState<string>("sofia");
  const activeAgent = agents.find((a) => a.id === activeAgentId) || agents[0];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main Container - Responsive Layout */}
      <div className="bg-[#0F1115] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/50 flex flex-col md:flex-row h-[600px] md:h-[400px]">
        
        {/* Navigation - Horizontal Scroll on Mobile, Sidebar on Desktop */}
        <div className="w-full md:w-1/3 bg-[#15171C] border-b md:border-b-0 md:border-r border-white/5 flex flex-row md:flex-col shrink-0">
          
          {/* Mobile Header Title (Only visible on mobile nav) */}
          <div className="md:hidden absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Scrollable Container */}
          <div className="flex flex-row md:flex-col gap-2 p-2 md:p-4 overflow-x-auto md:overflow-visible w-full no-scrollbar">
            <div className="hidden md:block mb-2 px-2">
              <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">
                Agentes Ativos
              </span>
            </div>
            
            {agents.map((agent) => (
              <button
                key={agent.id}
                onClick={() => setActiveAgentId(agent.id)}
                className={`text-left p-2 md:p-3 rounded-lg transition-all duration-300 group relative flex-shrink-0 min-w-[120px] md:min-w-0 ${
                  activeAgentId === agent.id
                    ? "bg-white/5 border border-white/10 md:border-white/10"
                    : "hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="flex md:items-center gap-3 relative z-10 flex-col md:flex-row items-center text-center md:text-left">
                  <div
                    className={`w-8 h-8 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-colors ${
                      activeAgentId === agent.id
                        ? "bg-white text-black"
                        : "bg-white/5 text-white/60 group-hover:text-white"
                    }`}
                  >
                    {agent.icon}
                  </div>
                  <div>
                    <div className={`text-sm font-medium ${activeAgentId === agent.id ? "text-white" : "text-white/60 group-hover:text-white"}`}>
                      {agent.name}
                    </div>
                    <div className="hidden md:block text-[10px] text-white/30 font-mono uppercase">
                      {agent.role}
                    </div>
                  </div>
                </div>
                
                {/* Active Indicator */}
                {activeAgentId === agent.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-white md:left-0 md:top-0 md:bottom-0 md:w-[2px] md:h-full md:translate-x-0"
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* System Status Footer (Desktop Only) */}
          <div className="hidden md:block mt-auto px-4 py-4 border-t border-white/5">
            <div className="flex items-center gap-2 text-[10px] text-white/30">
              <Activity className="w-3 h-3" />
              <span>SISTEMA OPERACIONAL</span>
            </div>
          </div>
        </div>

        {/* Content Area - Workflow Visualization */}
        <div className="flex-1 bg-[#0F1115] p-4 md:p-6 relative flex flex-col min-h-0">
           {/* Header do Agente Ativo */}
           <div className="mb-4 md:mb-6 pb-4 border-b border-white/5 shrink-0">
             <div className="flex justify-between items-start">
               <div>
                 <h3 className="text-lg md:text-xl text-white font-serif mb-1">{activeAgent.name}</h3>
                 <p className="text-xs text-white/50 max-w-xs font-light line-clamp-2">{activeAgent.description}</p>
               </div>
               <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 shrink-0 ml-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[10px] text-emerald-500 font-mono uppercase tracking-wide hidden md:inline">Online</span>
                 <span className="text-[10px] text-emerald-500 font-mono uppercase tracking-wide md:hidden">ON</span>
               </div>
             </div>
           </div>

           {/* Workflow Steps - Scrollable Area */}
           <div className="flex-1 overflow-y-auto pr-1 space-y-4 min-h-0">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeAgent.id}
                 initial={{ opacity: 0, x: 10 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -10 }}
                 transition={{ duration: 0.2 }}
                 className="space-y-4 pb-2"
               >
                 {activeAgent.workflow.map((step, idx) => (
                   <motion.div
                     key={step.id}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: idx * 0.15 }}
                     className="relative pl-6 group"
                   >
                     {/* Timeline Line */}
                     {idx !== activeAgent.workflow.length - 1 && (
                       <div className="absolute left-[11px] top-6 bottom-[-16px] w-[1px] bg-white/5 group-hover:bg-white/10 transition-colors" />
                     )}
                     
                     {/* Timeline Dot */}
                     <div className={`absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border flex items-center justify-center bg-[#0F1115] z-10 
                       ${step.type === 'success' ? 'border-emerald-500/30 text-emerald-500' : 
                         step.type === 'warning' ? 'border-amber-500/30 text-amber-500' : 
                         'border-white/10 text-white/40'}`}>
                        {step.type === 'success' ? <CheckCircle2 className="w-3 h-3" /> :
                         step.type === 'warning' ? <AlertCircle className="w-3 h-3" /> :
                         <Clock className="w-3 h-3" />}
                     </div>

                     {/* Card Content */}
                     <div className="bg-white/5 border border-white/5 rounded-lg p-3 hover:border-white/10 transition-colors">
                       <div className="flex justify-between items-start mb-1">
                         <span className={`text-xs font-mono uppercase tracking-wide truncate pr-2
                           ${step.type === 'warning' ? 'text-amber-500' : 'text-white/60'}`}>
                           {step.title}
                         </span>
                         <span className="text-[10px] text-white/30 shrink-0">{step.timestamp}</span>
                       </div>
                       <p className="text-sm text-white/90 font-light mb-2">{step.detail}</p>
                       
                       {step.metric && (
                         <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-black/20 rounded text-[10px] font-mono text-white/70 border border-white/5">
                           {step.type === 'success' && <ArrowRight className="w-3 h-3" />}
                           {step.metric}
                         </div>
                       )}
                     </div>
                   </motion.div>
                 ))}
               </motion.div>
             </AnimatePresence>
           </div>
        </div>
      </div>
    </div>
  );
}
