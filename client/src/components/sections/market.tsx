import { motion } from "framer-motion";

export function MarketWave() {
  return (
    <section id="market" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.span
            className="text-xs font-sans font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4 block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Perspectiva
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Leitura de Mercado
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            O mercado de estética brasileiro está em transformação. Novas demandas, novas tecnologias, novos modelos de operação.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Inflexão de Demanda",
              desc: "A popularização de tratamentos de emagrecimento criou uma nova categoria de pacientes buscando restauração e estruturação."
            },
            {
              title: "Complexidade Crescente",
              desc: "Protocolos modernos exigem combinação de tecnologias e gestão sofisticada de equipamentos de alto investimento."
            },
            {
              title: "Fragmentação do Setor",
              desc: "Milhares de clínicas independentes operam sem acesso a escala, tecnologia ou capital para competir no novo cenário."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-background p-8 md:p-10 border border-border hover:border-primary/20 transition-colors duration-300 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.2 }}
            >
              <h3 className="text-2xl font-serif text-primary mb-4 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
