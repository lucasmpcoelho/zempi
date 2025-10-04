import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { insertWaitlistSchema, type InsertWaitlist } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { motion, AnimatePresence } from "framer-motion";

export default function WaitlistForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertWaitlist>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertWaitlist) => {
      const res = await apiRequest("POST", "/api/waitlist", data);
      return res.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao enviar inscrição",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertWaitlist) => {
    mutation.mutate(data);
  };

  if (isSuccess) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-border text-center"
          data-testid="waitlist-success-message"
        >
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="text-green-600 h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Inscrição Confirmada!</h3>
          <p className="text-muted-foreground mb-6">
            Obrigado pelo seu interesse no Zempi. Entraremos em contato em breve para
            dar início ao seu acompanhamento personalizado.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline"
            data-testid="button-nova-inscricao"
          >
            Fazer Nova Inscrição
          </Button>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-border">
      <h3 className="text-2xl font-bold mb-2" data-testid="waitlist-form-title">
        Entre na Lista de Espera
      </h3>
      <p className="text-muted-foreground mb-6">
        Preencha o formulário abaixo e seja um dos primeiros a ter acesso ao Zempi.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Seu nome completo"
                    autoComplete="name"
                    inputMode="text"
                    aria-invalid={!!form.formState.errors.name}
                    aria-describedby={form.formState.errors.name ? "name-error" : undefined}
                    {...field}
                    data-testid="input-name"
                  />
                </FormControl>
                <FormMessage id="name-error" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    autoComplete="email"
                    inputMode="email"
                    aria-invalid={!!form.formState.errors.email}
                    aria-describedby={form.formState.errors.email ? "email-error" : undefined}
                    {...field}
                    data-testid="input-email"
                  />
                </FormControl>
                <FormMessage id="email-error" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone (Opcional)</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    autoComplete="tel"
                    inputMode="tel"
                    aria-invalid={!!form.formState.errors.phone}
                    aria-describedby={form.formState.errors.phone ? "phone-error" : undefined}
                    {...field}
                    data-testid="input-phone"
                  />
                </FormControl>
                <FormMessage id="phone-error" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            variant="default"
            disabled={mutation.isPending}
            data-testid="button-submit-waitlist"
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Confirmar Inscrição"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
