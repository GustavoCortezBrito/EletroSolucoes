'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
// import SEO from '@/components/SEO'
// import { homePageSEO } from '@/lib/seo'
import { organizationSchema, localBusinessSchema, serviceSchema, websiteSchema, faqSchema } from '@/lib/structured-data'

const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false })

export default function Home() {
  return (
    <>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            localBusinessSchema,
            serviceSchema,
            websiteSchema,
            faqSchema
          ])
        }}
      />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
        suppressHydrationWarning
      >
        <SmoothScroll />
        <Header />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </motion.main>
    </>
  )
}