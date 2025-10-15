import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Shield, Mail, FileText } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight" data-testid="privacy-title">
              Política de Privacidade
            </h1>
            <p className="text-lg text-muted-foreground">
              <strong>Última atualização:</strong> 14 de outubro de 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bem-vindo(a) ao Zempi. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos seus dados pessoais quando você utiliza nossos produtos, serviços, website <strong>zempi.com.br</strong> ("Site"), canais de suporte e nossos canais de mensagens, incluindo <strong>WhatsApp Business</strong> (a "Plataforma").
              </p>
            </div>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">1.</span> Quem somos
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Zempi Tecnologia Ltda.</strong> ("Zempi", "nós" ou "nosso(a)") é a controladora dos dados pessoais tratados em conexão com nossos serviços.
                </p>
                <ul className="list-none space-y-2 ml-0">
                  <li><strong className="text-foreground">CNPJ:</strong> 63.026.122/0001-77</li>
                  <li><strong className="text-foreground">Endereço:</strong> Av. Luís Viana Filho, Nº 013223, Ed. Hangar Business Park, Hangar 6, Sala 0311, São Cristóvão, Salvador – BA, CEP 41500-300</li>
                  <li><strong className="text-foreground">E-mail do Encarregado (DPO):</strong> <a href="mailto:suporte@zempi.com.br" className="text-primary hover:underline">suporte@zempi.com.br</a></li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">2.</span> Escopo
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Esta Política aplica-se a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Usuários do Site <strong className="text-foreground">zempi.com.br</strong>;</li>
                  <li>Clientes e potenciais clientes que interajam com o Zempi via <strong className="text-foreground">WhatsApp Business</strong>, e-mail, formulários e outros canais;</li>
                  <li>Participantes de programas, pesquisas e testes de produto.</li>
                </ul>
                <p>
                  Se você acessar serviços de terceiros (por exemplo, WhatsApp, provedores de pagamento, hospedagem de arquivos), suas informações serão tratadas conforme as políticas de privacidade desses terceiros.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">3.</span> Fundamentos legais (LGPD)
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Tratamos dados pessoais de acordo com a <strong className="text-foreground">Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD)</strong> com base em:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Execução de contrato</strong> e procedimentos preliminares (art. 7º, V);</li>
                  <li><strong className="text-foreground">Cumprimento de obrigação legal ou regulatória</strong> (art. 7º, II);</li>
                  <li><strong className="text-foreground">Legítimo interesse</strong> (art. 7º, IX), com avaliação de impacto e salvaguardas;</li>
                  <li><strong className="text-foreground">Consentimento</strong> (art. 7º, I), especialmente para dados pessoais sensíveis (art. 11º, I) relacionados à saúde/estilo de vida, quando aplicável.</li>
                </ul>
                <p>
                  Você pode revogar o consentimento a qualquer momento (ver Seção 12).
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">4.</span> Quais dados coletamos
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Podemos coletar as seguintes categorias de dados:</p>
                <ol className="list-decimal list-outside space-y-3 ml-6">
                  <li><strong className="text-foreground">Dados de identificação e contato:</strong> nome, e-mail, telefone/WhatsApp, CPF (se necessário para faturamento), empresa e cargo (quando B2B).</li>
                  <li><strong className="text-foreground">Dados de uso e técnicos:</strong> páginas visitadas, IP, identificadores de dispositivos, logs, cookies e tecnologias similares.</li>
                  <li><strong className="text-foreground">Preferências e comunicações:</strong> histórico de mensagens (incluindo via WhatsApp), solicitações de suporte, respostas a pesquisas, preferências de marketing.</li>
                  <li><strong className="text-foreground">Dados transacionais:</strong> informações de pagamento e faturamento (processadas por terceiros), planos ou produtos contratados.</li>
                  <li><strong className="text-foreground">Dados pessoais sensíveis (saúde):</strong> informações voluntariamente fornecidas por você sobre rotinas, hábitos, ingestão alimentar, sintomas, medicamentos (por exemplo, uso de GLP‑1), objetivos de saúde e bem-estar. <strong className="text-foreground">Tratamos esses dados apenas mediante consentimento explícito e com finalidades estritas de prestação do serviço de acompanhamento</strong>, jamais para segmentação publicitária.</li>
                </ol>
                <p className="pt-2">
                  Não exigimos dados sensíveis para simples navegação no Site. O fornecimento de dados sensíveis é <strong className="text-foreground">opcional</strong> e limitado aos recursos do produto que você escolhe usar.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">5.</span> Como usamos seus dados
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Utilizamos os dados para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Prestar e melhorar</strong> nossos serviços, inclusive atendimento e funcionalidades de acompanhamento, relatórios e lembretes;</li>
                  <li><strong className="text-foreground">Responder</strong> a dúvidas e solicitações de suporte;</li>
                  <li><strong className="text-foreground">Cumprir</strong> obrigações legais, regulatórias e de prevenção a fraudes/abusos;</li>
                  <li><strong className="text-foreground">Enviar comunicações</strong> operacionais, de segurança e (com seu opt-in) de marketing;</li>
                  <li><strong className="text-foreground">Analisar</strong> uso, desempenho e segurança da Plataforma, com métricas e estatísticas agregadas/desidentificadas;</li>
                  <li><strong className="text-foreground">Desenvolver</strong> novas funcionalidades e realizar testes/melhorias de produto.</li>
                </ul>
                <p className="pt-2">
                  Não utilizamos dados sensíveis para decisões automatizadas que produzam efeitos jurídicos ou que o afetem de forma significativa sem <strong className="text-foreground">avaliação humana</strong> adequada.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-green-50 p-6 rounded-2xl border border-green-100">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">6.</span> WhatsApp Business: como tratamos os seus dados
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Quando você opta por se comunicar conosco pelo <strong className="text-foreground">WhatsApp Business</strong>:</p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li><strong className="text-foreground">Opt-in e transparência.</strong> Enviaremos mensagens somente após seu opt‑in (consentimento ou outra base legal aplicável). Informamos claramente nossa identidade e finalidade das comunicações.</li>
                  <li><strong className="text-foreground">Finalidades limitadas.</strong> Usamos o conteúdo das conversas <strong className="text-foreground">apenas</strong> para prestar suporte, enviar notificações transacionais (por exemplo, lembretes) e, quando permitido, mensagens informativas/marketing com opção de descadastro.</li>
                  <li><strong className="text-foreground">Respeito a bloqueio e descadastro.</strong> Você pode a qualquer momento <strong className="text-foreground">bloquear</strong> nosso número ou solicitar <strong className="text-foreground">opt‑out</strong> para encerrar comunicações não obrigatórias. Implementamos mecanismos simples para isso (ver Seção 12).</li>
                  <li><strong className="text-foreground">Templates e categorias.</strong> Mensagens proativas seguem as diretrizes da plataforma (categorias como utilidade, autenticação e marketing) e as políticas aplicáveis.</li>
                  <li><strong className="text-foreground">Compartilhamento necessário.</strong> Para viabilizar o envio/recebimento de mensagens, certos metadados (por exemplo, número de telefone, carimbo de data/hora, roteamento) são processados por WhatsApp/Meta e provedores de soluções oficiais (BSPs), conforme as políticas desses terceiros.</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">7.</span> Com quem compartilhamos
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Compartilhamos dados pessoais <strong className="text-foreground">somente</strong> com:</p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li><strong className="text-foreground">Operadores (processadores)</strong> que apoiam a prestação dos serviços (hospedagem, nuvem, analytics, atendimento, CRM, automação de mensagens, provedores de pagamento). Tais operadores atuam segundo nossas instruções e contratos com cláusulas de proteção de dados.</li>
                  <li><strong className="text-foreground">WhatsApp/Meta e provedores oficiais (BSPs)</strong>, conforme necessário para o canal WhatsApp Business.</li>
                  <li><strong className="text-foreground">Autoridades</strong> públicas quando exigido por lei ou ordem judicial.</li>
                  <li><strong className="text-foreground">Parceiros</strong> e consultores estritamente necessários para fins contábeis, jurídicos e de segurança.</li>
                </ul>
                <p className="pt-2">
                  Não vendemos dados pessoais. Não compartilhamos dados sensíveis para fins de publicidade comportamental.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">8.</span> Transferências internacionais
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Podemos transferir dados para países com padrões de proteção diferentes do Brasil. Quando isso ocorrer, adotaremos salvaguardas adequadas (por exemplo, <strong className="text-foreground">cláusulas contratuais</strong>, auditorias de segurança e minimização de dados) conforme a LGPD.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">9.</span> Retenção de dados
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mantemos dados pessoais <strong className="text-foreground">pelo tempo necessário</strong> para cumprir as finalidades desta Política e nossas obrigações legais/contratuais. Critérios incluem: natureza dos dados, riscos, exigências legais e expectativas legítimas do usuário. Após o período aplicável, eliminamos ou anonimizamos os dados de forma segura.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">10.</span> Segurança
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Adotamos medidas técnicas e organizacionais de segurança compatíveis com a natureza dos dados (criptografia em trânsito/repouso quando apropriado, controles de acesso, registro de eventos, testes e políticas internas). Entretanto, nenhum método é 100% infalível. Caso identifique risco ou incidente, contate <a href="mailto:suporte@zempi.com.br" className="text-primary hover:underline font-semibold">suporte@zempi.com.br</a>.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">11.</span> Cookies e tecnologias similares
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Utilizamos cookies essenciais para o funcionamento do Site e, com seu consentimento, cookies de análise e de experiência. Você pode gerenciar preferências no banner de cookies ou via configurações do navegador. Para detalhes, consulte nossa <strong className="text-foreground">Política de Cookies</strong>.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">12.</span> Seus direitos (LGPD)
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Você pode exercer os seguintes direitos:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Confirmação da existência de tratamento e <strong className="text-foreground">acesso</strong> aos dados;</li>
                  <li><strong className="text-foreground">Correção</strong> de dados incompletos, inexatos ou desatualizados;</li>
                  <li><strong className="text-foreground">Anonimização, bloqueio ou eliminação</strong> de dados desnecessários, excessivos ou tratados em desconformidade;</li>
                  <li><strong className="text-foreground">Portabilidade</strong> (observados segredos comerciais e limites legais);</li>
                  <li><strong className="text-foreground">Eliminação</strong> de dados tratados com base no consentimento;</li>
                  <li>Informação sobre <strong className="text-foreground">compartilhamento</strong> e sobre a possibilidade de <strong className="text-foreground">não consentir</strong> e as consequências;</li>
                  <li><strong className="text-foreground">Revogação</strong> do consentimento, a qualquer tempo, por procedimento gratuito e facilitado;</li>
                  <li><strong className="text-foreground">Oposição</strong> a tratamento baseado em legítimo interesse, quando cabível.</li>
                </ul>
                <p className="pt-4">
                  Para exercer seus direitos ou solicitar <strong className="text-foreground">opt‑out</strong> de comunicações não obrigatórias (incluindo WhatsApp), envie uma mensagem para <a href="mailto:suporte@zempi.com.br" className="text-primary hover:underline font-semibold">suporte@zempi.com.br</a> ou digite <strong className="text-foreground">"SAIR"</strong> em nosso canal do WhatsApp.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">13.</span> Menores de idade
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nossos serviços não são destinados a menores de 18 anos. Não coletamos intencionalmente dados de crianças/adolescentes. Se você é responsável legal e acredita que seu dependente nos forneceu dados, contate-nos para remoção.
                </p>
              </div>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">14.</span> Dados sensíveis de saúde
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Somente trataremos dados sobre saúde/estilo de vida <strong className="text-foreground">com seu consentimento explícito</strong> e para finalidades de bem‑estar, educação e suporte, <strong className="text-foreground">não diagnósticas</strong>. Não substituímos aconselhamento médico profissional. Você pode usar o serviço sem fornecer dados sensíveis; nesses casos, algumas funcionalidades podem ficar limitadas.
                </p>
              </div>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">15.</span> Atualizações desta Política
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Podemos atualizar esta Política para refletir mudanças legais, regulatórias ou de produto. Publicaremos a versão atualizada com nova data de "Última atualização". Em alterações materialmente relevantes, poderemos notificá-lo(a) por e-mail, WhatsApp ou aviso no Site.
                </p>
              </div>
            </section>

            {/* Section 16 - DPO Contact */}
            <section className="bg-gray-50 p-8 rounded-2xl border border-border">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">16.</span> Contato do Encarregado (DPO)
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Se você tiver dúvidas, solicitações ou reclamações sobre privacidade e proteção de dados, contate nosso <strong className="text-foreground">Encarregado</strong>:
                </p>
                <div className="bg-white p-6 rounded-xl border border-border space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Nome:</p>
                      <p>Encarregado de Proteção de Dados – Zempi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">E-mail:</p>
                      <a href="mailto:suporte@zempi.com.br" className="text-primary hover:underline">suporte@zempi.com.br</a>
                    </div>
                  </div>
                </div>
                <p className="pt-2">
                  Se a sua solicitação não for resolvida, você pode contatar a <strong className="text-foreground">ANPD</strong> (Autoridade Nacional de Proteção de Dados) conforme orientações no site oficial.
                </p>
              </div>
            </section>

            {/* Section 17 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">17.</span> Informações adicionais para o canal WhatsApp
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mantemos uma <strong className="text-foreground">Política publicada e acessível</strong> neste Site.</li>
                  <li>Não utilizamos dados obtidos por meio do WhatsApp para fins <strong className="text-foreground">incompatíveis</strong> com o suporte/mensageria com você.</li>
                  <li>Respeitamos as <strong className="text-foreground">políticas de conteúdo</strong> e <strong className="text-foreground">categorias de mensagens</strong> da plataforma.</li>
                  <li>Oferecemos <strong className="text-foreground">mecanismo claro</strong> para cancelamento e bloqueio.</li>
                  <li>Podemos registrar logs de consentimento e preferências para demonstrar conformidade.</li>
                </ul>
              </div>
            </section>

            {/* Section 18 */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                <span className="text-primary">18.</span> Versões
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Esta Política pode estar disponível em outros idiomas; em caso de conflito, a versão <strong className="text-foreground">em português</strong> prevalecerá para usuários no Brasil.
                </p>
              </div>
            </section>

            {/* Footer Note */}
            <div className="pt-8 border-t border-border text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Zempi Tecnologia Ltda.</strong> © Todos os direitos reservados.
              </p>
            </div>

            {/* Quick Contact Box */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Dúvidas sobre Privacidade?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Se você tiver alguma dúvida sobre nossa política de privacidade ou desejar exercer seus direitos, entre em contato conosco.
                  </p>
                  <a 
                    href="mailto:suporte@zempi.com.br" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Entrar em Contato
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
