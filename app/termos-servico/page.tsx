'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { motion } from 'framer-motion'
// import SEO from '@/components/SEO'
// import { termsPageSEO } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'

export default function TermosServico() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Início', url: 'https://eletrosolucoes.com.br' },
              { name: 'Termos de Serviço', url: 'https://eletrosolucoes.com.br/termos-servico' }
            ])
          )
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        suppressHydrationWarning
      >
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-secondary-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <Breadcrumb items={[{ label: 'Termos de Serviço' }]} />
            
            <h1 className="text-4xl font-bold text-primary-800 mb-8">
              Termos de Serviço
            </h1>
            
            <div className="prose prose-lg max-w-none text-primary-700">
              <p className="text-lg mb-6">
                <strong>Última atualização:</strong> 15 de dezembro de 2024
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">1. Aceitação dos Termos</h2>
                <p className="mb-4">
                  Ao utilizar os serviços da Eletro Soluções, você concorda com estes termos de serviço. 
                  Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">2. Descrição dos Serviços</h2>
                <p className="mb-4">A Eletro Soluções oferece:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Projetos de energia solar fotovoltaica</li>
                  <li>Homologação junto às concessionárias</li>
                  <li>Consultoria técnica especializada</li>
                  <li>Projetos de infraestrutura de automação</li>
                  <li>Suporte técnico e regulatório</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">3. Responsabilidades do Cliente</h2>
                <p className="mb-4">O cliente se compromete a:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Fornecer informações precisas e atualizadas</li>
                  <li>Cumprir com os prazos acordados</li>
                  <li>Efetuar os pagamentos conforme combinado</li>
                  <li>Seguir as orientações técnicas fornecidas</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">4. Responsabilidades da Eletro Soluções</h2>
                <p className="mb-4">Nos comprometemos a:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Entregar projetos conforme normas técnicas vigentes</li>
                  <li>Fornecer suporte técnico adequado</li>
                  <li>Manter confidencialidade das informações do cliente</li>
                  <li>Cumprir prazos acordados</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">5. Pagamentos e Cancelamentos</h2>
                <p className="mb-4">
                  Os valores e condições de pagamento são definidos em cada proposta comercial. 
                  Cancelamentos devem ser comunicados por escrito com antecedência mínima de 48 horas.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">6. Propriedade Intelectual</h2>
                <p className="mb-4">
                  Todos os projetos, documentos e materiais técnicos desenvolvidos pela Eletro Soluções 
                  permanecem como propriedade intelectual da empresa, sendo licenciados para uso específico do cliente.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">7. Limitação de Responsabilidade</h2>
                <p className="mb-4">
                  A Eletro Soluções não se responsabiliza por danos indiretos, lucros cessantes ou 
                  consequências decorrentes do uso inadequado dos projetos fornecidos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">8. Garantias</h2>
                <p className="mb-4">
                  Garantimos a qualidade técnica de nossos projetos conforme normas ANEEL e PRODIST. 
                  Eventuais correções necessárias serão realizadas sem custo adicional.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">9. Foro</h2>
                <p className="mb-4">
                  Fica eleito o foro da comarca de Presidente Prudente/SP para dirimir quaisquer 
                  questões decorrentes destes termos de serviço.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">10. Contato</h2>
                <p className="mb-4">
                  Para esclarecimentos sobre estes termos:
                </p>
                <ul className="list-none mb-4">
                  <li><strong>E-mail:</strong> bsenergiasolar17@gmail.com</li>
                  <li><strong>Telefone:</strong> (18) 99739-1723</li>
                  <li><strong>WhatsApp:</strong> (18) 99606-5711</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      </motion.div>
    </>
  )
}