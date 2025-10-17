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
    mode: "onBlur", // Validate on blur for better UX
    reValidateMode: "onChange", // But re-validate on change after first blur
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
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Nome completo <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="Ex: Maria Silva"
                              autoComplete="name"
                              inputMode="text"
                              className={`h-12 pr-10 transition-all ${
                                fieldState.error
                                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                                  : fieldState.isDirty && !fieldState.error
                                  ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
                                  : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900'
                              }`}
                              aria-invalid={!!fieldState.error}
                              aria-describedby={fieldState.error ? "name-error" : undefined}
                              {...field}
                              data-testid="input-name"
                            />
                            {fieldState.isDirty && !fieldState.error && (
                              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage id="name-error" className="text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="email"
                              placeholder="Ex: maria@email.com"
                              autoComplete="email"
                              inputMode="email"
                              className={`h-12 pr-10 transition-all ${
                                fieldState.error
                                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                                  : fieldState.isDirty && !fieldState.error
                                  ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
                                  : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900'
                              }`}
                              aria-invalid={!!fieldState.error}
                              aria-describedby={fieldState.error ? "email-error" : undefined}
                              {...field}
                              data-testid="input-email"
                            />
                            {fieldState.isDirty && !fieldState.error && (
                              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage id="email-error" className="text-sm" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          WhatsApp <span className="text-gray-400 text-xs">(opcional)</span>
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="tel"
                              placeholder="Ex: (11) 98765-4321"
                              autoComplete="tel"
                              inputMode="tel"
                              className={`h-12 pr-10 transition-all ${
                                fieldState.error
                                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                                  : fieldState.isDirty && !fieldState.error && field.value
                                  ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
                                  : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900'
                              }`}
                              aria-invalid={!!fieldState.error}
                              aria-describedby={fieldState.error ? "phone-error" : undefined}
                              {...field}
                              data-testid="input-phone"
                            />
                            {fieldState.isDirty && !fieldState.error && field.value && (
                              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage id="phone-error" className="text-sm" />
                        {!fieldState.error && !field.value && (
                          <p className="text-xs text-gray-500 mt-1">
                            Recomendado para acompanhamento via WhatsApp
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

          <div className="pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Ao solicitar acesso, você concorda que entraremos em contato via email 
              e WhatsApp para avaliar seu perfil. Seus dados são protegidos pela LGPD.
            </p>

            <Button
              type="submit"
              className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all hover:shadow-md"
              disabled={mutation.isPending}
              data-testid="button-submit-waitlist"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Solicitar Acesso"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
