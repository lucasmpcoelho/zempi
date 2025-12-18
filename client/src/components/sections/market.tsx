import { motion } from "framer-motion";
import partnershipImg from "@assets/generated_images/business_partnership_detail.png";

export function MarketWave() {
  return (
    <section id="market" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A Onda Pós-GLP-1
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Estamos posicionados para capturar a demanda emergente por tratamentos de flacidez e estruturação corporal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Demanda Reprimida",
              desc: "O aumento do uso de GLP-1 (Ozempic/Wegovy) criou uma nova necessidade massiva por tratamentos de firmeza e contorno corporal."
            },
            {
              title: "Protocolos Combinados",
              desc: "Nossa metodologia foca em protocolos de alto ticket que combinam tecnologias para resultados superiores e maior rentabilidade."
            },
            {
              title: "Fidelização Premium",
              desc: "Clientes de alto valor buscam acompanhamento contínuo. Nossa tecnologia garante o retorno e a recorrência desses pacientes."
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
        
        <div className="mt-20 relative h-[400px] w-full overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
           <img src={partnershipImg} alt="Business Partnership" className="w-full h-full object-cover object-center" />
           <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
           <div className="absolute bottom-10 left-10 text-white">
             <p className="text-2xl font-serif italic">"Estruturando o futuro da estética."</p>
           </div>
        </div>
      </div>
    </section>
  );
}
