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
            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-3xl font-serif font-medium mb-4 text-foreground">
              Obrigado pelo interesse!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Complete o envio do email que foi aberto. Entraremos em contato em até 24 horas úteis.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              variant="outline"
              className="rounded-full"
            >
              Enviar outro formulário
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            Próximo Passo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-foreground">
            Quer Saber Mais?{" "}
            <span className="text-primary italic">Vamos Conversar.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-xl mx-auto">
            Preencha o formulário e entraremos em contato para apresentar a proposta completa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nome da Clínica */}
            <div>
              <label htmlFor="clinica" className="block text-sm font-medium text-foreground mb-2">
                Nome da Clínica *
              </label>
              <input
                type="text"
                id="clinica"
                name="clinica"
                required
                value={formData.clinica}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                placeholder="Ex: Clínica Estética Premium"
              />
            </div>

            {/* Seu Nome */}
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                Seu Nome *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                placeholder="Ex: Dra. Maria Silva"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-foreground mb-2">
                WhatsApp *
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                placeholder="(11) 99999-9999"
              />
            </div>

            {/* Bairro */}
            <div>
              <label htmlFor="bairro" className="block text-sm font-medium text-foreground mb-2">
                Bairro da Clínica *
              </label>
              <select
                id="bairro"
                name="bairro"
                required
                value={formData.bairro}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
              >
                {bairros.map((bairro) => (
                  <option key={bairro.value} value={bairro.value}>
                    {bairro.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Faturamento */}
            <div>
              <label htmlFor="faturamento" className="block text-sm font-medium text-foreground mb-2">
                Faturamento Mensal Aproximado
              </label>
              <select
                id="faturamento"
                name="faturamento"
                value={formData.faturamento}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
              >
                {faturamentos.map((faixa) => (
                  <option key={faixa.value} value={faixa.value}>
                    {faixa.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-6 text-base font-medium tracking-wide shadow-lg hover:shadow-xl transition-all"
            >
              Quero Receber a Proposta Completa
              <Send className="ml-2 w-4 h-4" />
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Entraremos em contato em até 24 horas úteis.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
