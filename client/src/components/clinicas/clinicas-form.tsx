import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Check } from "lucide-react";

const bairros = [
  { value: "", label: "Selecione o bairro" },
  { value: "jardins", label: "Jardins" },
  { value: "itaim", label: "Itaim Bibi" },
  { value: "vila-nova", label: "Vila Nova Conceição" },
  { value: "moema", label: "Moema" },
  { value: "pinheiros", label: "Pinheiros" },
  { value: "outro", label: "Outro" },
];

const faturamentos = [
  { value: "", label: "Selecione a faixa" },
  { value: "ate-100k", label: "Até R$ 100 mil/mês" },
  { value: "100k-300k", label: "R$ 100 mil - R$ 300 mil/mês" },
  { value: "300k-1m", label: "R$ 300 mil - R$ 1 milhão/mês" },
  { value: "acima-1m", label: "Acima de R$ 1 milhão/mês" },
];

export function ClinicasForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clinica: "",
    nome: "",
    whatsapp: "",
    bairro: "",
    faturamento: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`[Lyve] Interesse em Parceria - ${formData.clinica}`);
    const body = encodeURIComponent(
      `Nova solicitação de parceria:\n\n` +
      `Clínica: ${formData.clinica}\n` +
      `Nome: ${formData.nome}\n` +
      `WhatsApp: ${formData.whatsapp}\n` +
      `Bairro: ${bairros.find(b => b.value === formData.bairro)?.label || formData.bairro}\n` +
      `Faturamento: ${faturamentos.find(f => f.value === formData.faturamento)?.label || formData.faturamento}\n`
    );

    window.location.href = `mailto:lucas@lyve.care?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="formulario" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-serif font-medium mb-4 text-foreground">
              Obrigado pelo interesse!
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-light">
              Complete o envio do email que foi aberto. Entraremos em contato em até 24 horas úteis.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="rounded-full border-primary/20 text-primary hover:bg-primary/5"
            >
              Enviar outro formulário
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-6 block">
            Próximo Passo
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-foreground tracking-tight">
            Solicite um Convite
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Preencha os dados abaixo para receber a apresentação comercial completa da Lyve.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8 bg-card/30 backdrop-blur-sm p-8 md:p-12 rounded-sm border border-primary/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nome da Clínica */}
              <div className="col-span-1 md:col-span-2">
                <label htmlFor="clinica" className="block text-xs uppercase tracking-widest font-medium text-muted-foreground mb-2">
                  Nome da Clínica
                </label>
                <input
                  type="text"
                  id="clinica"
                  name="clinica"
                  required
                  value={formData.clinica}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-primary transition-colors focus:outline-none text-lg text-foreground placeholder:text-muted-foreground/30"
                  placeholder="Ex: Clínica Estética Premium"
                />
              </div>

              {/* Seu Nome */}
              <div>
                <label htmlFor="nome" className="block text-xs uppercase tracking-widest font-medium text-muted-foreground mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-primary transition-colors focus:outline-none text-lg text-foreground placeholder:text-muted-foreground/30"
                  placeholder="Ex: Dra. Maria Silva"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block text-xs uppercase tracking-widest font-medium text-muted-foreground mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-primary transition-colors focus:outline-none text-lg text-foreground placeholder:text-muted-foreground/30"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Bairro */}
              <div>
                <label htmlFor="bairro" className="block text-xs uppercase tracking-widest font-medium text-muted-foreground mb-2">
                  Bairro
                </label>
                <div className="relative">
                  <select
                    id="bairro"
                    name="bairro"
                    required
                    value={formData.bairro}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-primary transition-colors focus:outline-none text-lg text-foreground appearance-none cursor-pointer"
                  >
                    {bairros.map((bairro) => (
                      <option key={bairro.value} value={bairro.value}>
                        {bairro.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Faturamento */}
              <div>
                <label htmlFor="faturamento" className="block text-xs uppercase tracking-widest font-medium text-muted-foreground mb-2">
                  Faturamento Mensal
                </label>
                <div className="relative">
                  <select
                    id="faturamento"
                    name="faturamento"
                    value={formData.faturamento}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-primary transition-colors focus:outline-none text-lg text-foreground appearance-none cursor-pointer"
                  >
                    {faturamentos.map((faixa) => (
                      <option key={faixa.value} value={faixa.value}>
                        {faixa.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-8">
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-7 text-sm font-semibold tracking-widest uppercase shadow-lg hover:shadow-xl transition-all"
              >
                Solicitar Proposta
                <Send className="ml-2 w-4 h-4" />
              </Button>
              
              <p className="text-center text-xs text-muted-foreground mt-4 font-light">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
