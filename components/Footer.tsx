'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Instagram, Clock, MessageCircle, Linkedin, Facebook } from 'lucide-react'
import LogoIcon from './LogoIcon'

const Footer = () => {
  const currentYear = 2024

  const services = [
    'Homologação junto à Concessionária',
    'Consultoria Técnica',
    'Projeto de Infraestrutura de Automação'
  ]

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <LogoIcon size={36} />
              <span className="text-xl font-bold">Eletro Soluções</span>
            </a>
            
            <p className="text-primary-200 leading-relaxed">
              Empresa de engenharia elétrica especializada em projetos de energia solar fotovoltaica, 
              homologações e suporte técnico para integradores e instaladores.
            </p>
            
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/ele.trosolucoes/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg hover:shadow-lg transition-shadow"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              
              <motion.a
                href="https://www.facebook.com/people/Eletro-Solu%C3%A7%C3%B5es/61564946756458/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-lg hover:shadow-lg transition-shadow"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/diogo-brito-correa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg hover:shadow-lg transition-shadow"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="/#servicos"
                    className="text-primary-200 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <div className="w-1 h-1 bg-secondary-500 rounded-full"></div>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/5518996065711?text=Olá! Gostaria de falar sobre projetos de energia solar fotovoltaica."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-200 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-green-500" />
                <span>(18) 99606-5711</span>
              </a>
              
              <a
                href="tel:+5518997391723"
                className="flex items-center space-x-3 text-primary-200 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5 text-secondary-500" />
                <span>(18) 99739-1723</span>
              </a>
              
              <a
                href="mailto:bsenergiasolar17@gmail.com"
                className="flex items-center space-x-3 text-primary-200 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 text-secondary-500" />
                <span>bsenergiasolar17@gmail.com</span>
              </a>
              
              <div className="flex items-center space-x-3 text-primary-200">
                <Clock className="h-5 w-5 text-secondary-500" />
                <span>Seg-Sex: 8h-18h</span>
              </div>
            </div>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Fale Conosco</h3>
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 mb-4">
              <p className="text-sm text-green-100 mb-3">
                Precisa de um projeto fotovoltaico? Fale conosco pelo WhatsApp.
              </p>
              <motion.a
                href="https://wa.me/5518996065711?text=Olá! Gostaria de falar sobre projetos de energia solar fotovoltaica."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-4 py-2 rounded font-semibold text-sm inline-flex items-center space-x-2 hover:bg-green-50 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
            
            <div className="text-sm text-primary-300">
              <p className="mb-2">Certificações:</p>
              <ul className="space-y-1">
                <li>• CREA Registrado</li>
                <li>• Normas ANEEL/PRODIST</li>
                <li>• ART Inclusa</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-primary-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-300 text-sm">
              <p>© {currentYear} Eletro Soluções. Todos os direitos reservados.</p>
              <p className="mt-1">Desenvolvido por <span className="text-secondary-400 font-medium">Gustavo Cortez de Brito</span>, Dev Web</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/politica-privacidade" className="text-primary-300 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-servico" className="text-primary-300 hover:text-white transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer