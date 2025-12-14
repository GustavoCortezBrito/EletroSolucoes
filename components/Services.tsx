'use client'

import { motion } from 'framer-motion'
import { Zap, Home, Building, Wrench, Shield, Clock } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Homologação junto à Concessionária',
      description: 'Processo completo de homologação e regularização de sistemas fotovoltaicos junto às concessionárias de energia.',
      features: ['Documentação técnica', 'Processo regulatório', 'Acompanhamento até aprovação']
    },
    {
      icon: Wrench,
      title: 'Consultoria Técnica',
      description: 'Consultoria especializada em energia solar fotovoltaica e projetos de engenharia elétrica.',
      features: ['Análise técnica especializada', 'Orientação regulatória', 'Suporte a integradores']
    },
    {
      icon: Building,
      title: 'Projeto de Infraestrutura de Automação',
      description: 'Desenvolvimento de projetos de infraestrutura elétrica e sistemas de automação industrial e predial.',
      features: ['Automação industrial', 'Sistemas prediais', 'Integração tecnológica']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-800 mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Especialistas em projetos de energia solar fotovoltaica e engenharia elétrica, 
            oferecendo suporte técnico completo para integradores, instaladores e clientes finais.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="hero-gradient w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-primary-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                    <span className="text-sm text-primary-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://wa.me/5518996065711?text=Olá! Gostaria de solicitar um orçamento para projeto de energia solar fotovoltaica."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <span>Solicitar Orçamento no WhatsApp</span>
            <Zap className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services