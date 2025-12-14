'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import { Metadata } from 'next'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Eletro Soluções',
  description: 'Política de privacidade da Eletro Soluções - Como protegemos seus dados pessoais e informações.',
}

export default function PoliticaPrivacidade() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <Breadcrumb items={[{ label: 'Política de Privacidade' }]} />
            
            <h1 className="text-4xl font-bold text-primary-800 mb-8">
              Política de Privacidade
            </h1>
            
            <div className="prose prose-lg max-w-none text-primary-700">
              <p className="text-lg mb-6">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">1. Informações Gerais</h2>
                <p className="mb-4">
                  A Eletro Soluções está comprometida em proteger a privacidade e os dados pessoais 
                  de nossos clientes e visitantes do site. Esta política descreve como coletamos, 
                  usamos e protegemos suas informações.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">2. Informações Coletadas</h2>
                <p className="mb-4">Coletamos as seguintes informações:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Nome completo</li>
                  <li>Telefone para contato</li>
                  <li>Endereço de e-mail</li>
                  <li>Informações sobre o projeto solicitado</li>
                  <li>Dados de navegação (cookies, IP, etc.)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">3. Uso das Informações</h2>
                <p className="mb-4">Utilizamos suas informações para:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Responder às suas solicitações de orçamento</li>
                  <li>Fornecer suporte técnico e consultoria</li>
                  <li>Enviar informações sobre nossos serviços</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">4. Compartilhamento de Dados</h2>
                <p className="mb-4">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                  exceto quando necessário para prestação de nossos serviços ou quando exigido por lei.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">5. Segurança</h2>
                <p className="mb-4">
                  Implementamos medidas de segurança adequadas para proteger suas informações 
                  contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">6. Seus Direitos</h2>
                <p className="mb-4">Você tem o direito de:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir dados incorretos</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Retirar seu consentimento a qualquer momento</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">7. Contato</h2>
                <p className="mb-4">
                  Para questões sobre esta política de privacidade, entre em contato:
                </p>
                <ul className="list-none mb-4">
                  <li><strong>E-mail:</strong> contato@eletrosolucoes.com.br</li>
                  <li><strong>Telefone:</strong> (18) 99739-1723</li>
                  <li><strong>WhatsApp:</strong> (18) 99606-5711</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary-800 mb-4">8. Alterações</h2>
                <p>
                  Esta política pode ser atualizada periodicamente. Recomendamos que você 
                  revise esta página regularmente para se manter informado sobre nossas práticas.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  )
}