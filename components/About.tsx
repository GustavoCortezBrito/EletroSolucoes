'use client'

import { motion } from 'framer-motion'
import { Award, Users, Clock, CheckCircle } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, number: '5000+', label: 'Projetos Aprovados' },
    { icon: Clock, number: '8+', label: 'Anos de Experiência' },
    { icon: Award, number: '100%', label: 'Conformidade ANEEL' },
    { icon: CheckCircle, number: '24/7', label: 'Suporte WhatsApp' }
  ]

  const values = [
    {
      title: 'Especialização',
      description: 'Foco exclusivo em energia solar fotovoltaica e projetos de engenharia elétrica especializada.'
    },
    {
      title: 'Conformidade',
      description: 'Todos os projetos seguem rigorosamente as normas ANEEL, PRODIST e das concessionárias.'
    },
    {
      title: 'Suporte Técnico',
      description: 'Apoio completo para integradores e instaladores com documentação técnica detalhada.'
    },
    {
      title: 'Agilidade',
      description: 'Processos otimizados para homologação rápida junto às concessionárias de energia.'
    }
  ]

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-primary-800 mb-6">
                Sobre a <span className="gradient-text">Eletro Soluções</span>
              </h2>
              <p className="text-lg text-primary-600 leading-relaxed mb-6">
                A Eletro Soluções é uma empresa de engenharia elétrica especializada, atuando 
                exclusivamente com projetos de energia solar fotovoltaica, homologações e 
                regularização de micro e minigeração distribuída junto às concessionárias.
              </p>
              <p className="text-lg text-primary-600 leading-relaxed">
                Oferecemos reanálise e solução de projetos reprovados, além do desenvolvimento 
                de projetos de infraestrutura elétrica e automação. Posicionamo-nos como suporte 
                técnico e regulatório para integradores, instaladores e clientes finais, sem 
                realizar instalação ou execução de obras.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h4 className="font-semibold text-primary-800">{value.title}</h4>
                  <p className="text-sm text-primary-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-8 text-center">
                Nossos Números
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center bg-white rounded-xl p-6 shadow-lg"
                  >
                    <div className="hero-gradient w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary-800 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-primary-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-primary-100 rounded-xl p-6"
            >
              <h4 className="font-bold text-primary-800 mb-4 flex items-center">
                <Award className="h-5 w-5 text-secondary-500 mr-2" />
                Certificações e Qualificações
              </h4>
              <ul className="space-y-2 text-sm text-primary-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Engenheiros certificados pelo CREA
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Conformidade com normas ANEEL e PRODIST
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  ART para todos os projetos fotovoltaicos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Suporte pós-homologação
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About