'use client'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HomeSection from './sections/homesection'
import AboutSection from './sections/aboutsection'
import ProjectsSection from './sections/projectssection'
import CertificatesSection from './sections/certificatessection'
import ContactSection from './sections/contactsection'
import Navbar from './components/navbar'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <main ref={containerRef} className="relative">
      <Navbar scrollProgress={scrollYProgress} />
      
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </main>
  )
}