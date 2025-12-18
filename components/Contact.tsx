'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, Instagram, MessageCircle, Linkedin, Facebook } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    servico: '',
    mensagem: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const { nome, telefone, email, servico, mensagem } = formData
    
    // Validação básica
    if (!nome || !telefone || !email || !servico) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // 1. Enviar por email via FormSubmit
      const formSubmitData = new FormData()
      formSubmitData.append('name', nome)
      formSubmitData.append('phone', telefone)
      formSubmitData.append('email', email)
      formSubmitData.append('service', servico)
      formSubmitData.append('message', mensagem || 'Nenhuma mensagem adicional')
      formSubmitData.append('_subject', `Novo Lead - ${nome} - ${servico}`)
      formSubmitData.append('_template', 'table')
      formSubmitData.append('_captcha', 'false')
      
      const response = await fetch('https://formsubmit.co/gustavocortezdev@gmail.com', {
        method: 'POST',
        body: formSubmitData
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        
        // 2. Abrir WhatsApp após envio bem-sucedido
        setTimeout(() => {
          let whatsappMessage = `Olá! Gostaria de solicitar informações sobre projetos.\n\n`
          whatsappMessage += `*Nome:* ${nome}\n`
          whatsappMessage += `*Telefone:* ${telefone}\n`
          whatsappMessage += `*E-mail:* ${email}\n`
          whatsappMessage += `*Tipo de Serviço:* ${servico}\n`
          if (mensagem) {
            whatsappMessage += `*Detalhes:* ${mensagem}`
          }
          
          const encodedMessage = encodeURIComponent(whatsappMessage)
          const whatsappUrl = `https://wa.me/5518996065711?text=${encodedMessage}`
          
          window.open(whatsappUrl, '_blank')
        }, 1000)
        
        // Limpar formulário
        setFormData({
          nome: '',
          telefone: '',
          email: '',
          servico: '',
          mensagem: ''
        })
        
      } else {
        throw new Error('Erro no envio')
      }
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitStatus('error')
      
      // Mesmo com erro no email, ainda abre o WhatsApp
      let whatsappMessage = `Olá! Gostaria de solicitar informações sobre projetos.\n\n`
      whatsappMessage += `*Nome:* ${nome}\n`
      whatsappMessage += `*Telefone:* ${telefone}\n`
      whatsappMessage += `*E-mail:* ${email}\n`
      whatsappMessage += `*Tipo de Serviço:* ${servico}\n`
      if (mensagem) {
        whatsappMessage += `*Detalhes:* ${mensagem}`
      }
      
      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappUrl = `https://wa.me/5518996065711?text=${encodedMessage}`
      
      window.open(whatsappUrl, '_blank')
    } finally {
      setIsSubmitting(false)
      
      // Reset status após 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }
  }
  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '(18) 99606-5711',
      link: 'https://wa.me/5518996065711?text=Olá! Gostaria de solicitar informações sobre projetos de energia solar fotovoltaica.'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '(18) 99739-1723',
      link: 'tel:+5518997391723'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'bsenergiasolar17@gmail.com',
      link: 'mailto:bsenergiasolar17@gmail.com'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg-Sex: 8h-18h',
      link: '#'
    }
  ]

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-800 mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Precisa de um projeto de energia solar fotovoltaica ou homologação junto à concessionária? 
            Entre em contato conosco pelo WhatsApp e solicite um orçamento gratuito.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary-800 mb-6">
              Solicite seu Projeto
            </h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4"
              >
                ✅ Formulário enviado com sucesso! Redirecionando para o WhatsApp...
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg mb-4"
              >
                ⚠️ Houve um problema no envio do email, mas você será redirecionado para o WhatsApp.
              </motion.div>
            )}
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="(18) 99999-9999"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Serviço
                </label>
                <select 
                  name="servico"
                  value={formData.servico}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione o tipo de serviço</option>
                  <option value="Homologação junto à Concessionária">Homologação junto à Concessionária</option>
                  <option value="Consultoria Técnica">Consultoria Técnica</option>
                  <option value="Projeto de Infraestrutura de Automação">Projeto de Infraestrutura de Automação</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Descreva detalhes do projeto que precisa (potência, localização, tipo de instalação, etc.)..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar por Email + WhatsApp</span>
                  </>
                )}
              </motion.button>
              
              <p className="text-sm text-gray-600 text-center">
                📧 Seu formulário será enviado por email e você será redirecionado para o WhatsApp
              </p>
            </form>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center mb-3">Ou fale conosco diretamente:</p>
              <motion.button
                type="button"
                onClick={() => {
                  const { nome, telefone, email, servico, mensagem } = formData
                  
                  let whatsappMessage = `Olá! Gostaria de solicitar informações sobre projetos.\n\n`
                  if (nome) whatsappMessage += `*Nome:* ${nome}\n`
                  if (telefone) whatsappMessage += `*Telefone:* ${telefone}\n`
                  if (email) whatsappMessage += `*E-mail:* ${email}\n`
                  if (servico) whatsappMessage += `*Tipo de Serviço:* ${servico}\n`
                  if (mensagem) whatsappMessage += `*Detalhes:* ${mensagem}`
                  
                  const encodedMessage = encodeURIComponent(whatsappMessage)
                  const whatsappUrl = `https://wa.me/5518996065711?text=${encodedMessage}`
                  
                  window.open(whatsappUrl, '_blank')
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-shadow"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Apenas WhatsApp</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary-800 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="hero-gradient p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800">{item.title}</h4>
                      <p className="text-primary-600">{item.info}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h4 className="font-bold text-primary-800 mb-4">Siga-nos nas Redes Sociais</h4>
              <div className="space-y-3">
                <motion.a
                  href="https://www.instagram.com/ele.trosolucoes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="font-medium">@ele.trosolucoes</span>
                </motion.a>
                
                <motion.a
                  href="https://www.facebook.com/people/Eletro-Solu%C3%A7%C3%B5es/61564946756458/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="font-medium">Eletro Soluções</span>
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/diogo-brito-correa"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-shadow"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="font-medium">Diogo Brito Correa</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg"
            >
              <h4 className="font-bold mb-2 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Direto
              </h4>
              <p className="text-green-100 mb-4">
                Fale conosco agora mesmo pelo WhatsApp e tire suas dúvidas sobre projetos fotovoltaicos.
              </p>
              <motion.a
                href="https://wa.me/5518996065711?text=Olá! Gostaria de falar sobre projetos de energia solar fotovoltaica."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 hover:bg-green-50 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Abrir WhatsApp</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact