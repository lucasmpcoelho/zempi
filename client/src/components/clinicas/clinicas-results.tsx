import { motion } from "framer-motion";
import { TrendingDown, TrendingUp } from "lucide-react";

const metrics = [
  {
    metric: "Tempo de Resposta",
    today: "4-6 horas",
    goal: "< 5 minutos",
    improvement: "-98%",
    positive: false,
  },
  {
    metric: "Taxa de Conversão",
    today: "10-15%",
    goal: "30-40%",
    improvement: "+200%",
    positive: true,
  },
  {
    metric: "Taxa de No-Show",
    today: "15-20%",
    goal: "< 8%",
    improvement: "-60%",
    positive: false,
  },
  {
    metric: "EBITDA Mensal",
    today: "Baseline",
    goal: "+30%",
    improvement: "+R$ 30k/mês",
    positive: true,
  },
];

export function ClinicasResults() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Resultados Esperados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-foreground">
            O Que Clínicas Piloto{" "}
            <span className="text-primary italic">Podem Esperar</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Baseado em benchmarks de mercado e casos de uso de IA em saúde.
          </p>
        </motion.div>

        {/* Results Table */}
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Métrica
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Hoje
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Meta (6 meses)
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Melhoria
                  </th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((item, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-5 px-4">
                      <span className="font-medium text-foreground">{item.metric}</span>
                    </td>
                    <td className="py-5 px-4 text-center">
                      <span className="text-muted-foreground">{item.today}</span>
                    </td>
                    <td className="py-5 px-4 text-center">
                      <span className="font-medium text-foreground">{item.goal}</span>
                    </td>
                    <td className="py-5 px-4 text-center">
                      <span
                        className="inline-flex items-center gap-1 font-bold text-primary"
                      >
                        {item.positive ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        {item.improvement}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-muted-foreground italic">
              * Projeções baseadas em benchmarks de mercado e casos de uso similares.
              Resultados podem variar de acordo com a operação de cada clínica.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
