'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold text-primary-800 leading-tight"
            >
              Projetos de Energia Solar
              <span className="gradient-text block">
                Fotovoltaica
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-primary-600 leading-relaxed"
            >
              Especialistas em projetos de energia solar fotovoltaica, homologações e regularização 
              junto às concessionárias. Suporte técnico completo para integradores e instaladores.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://wa.me/5518996065711?text=Olá! Gostaria de solicitar um orçamento para projeto de energia solar fotovoltaica."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Falar no WhatsApp</span>
              </motion.a>

              <motion.a
                href="tel:+5518997391723"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-secondary-500 text-secondary-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-secondary-50 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Ligar Agora</span>
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary-500" />
                <span className="text-primary-600">(18) 99739-1723</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary-500" />
                <span className="text-primary-600">contato@eletrosolucoes.com.br</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="hero-gradient rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-primary-600">Suporte Técnico</span>
                </div>
                <h3 className="text-xl font-bold text-primary-800">Projetos Especializados</h3>
                <p className="text-primary-600">
                  Desenvolvemos projetos de energia solar fotovoltaica com toda documentação 
                  técnica necessária para homologação junto às concessionárias.
                </p>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 font-bold text-sm">✓</span>
                  </div>
                  <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                    <span className="text-secondary-700 font-bold text-sm">⚡</span>
                  </div>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">🔧</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero