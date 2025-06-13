'use client'
import { motion, useTransform } from 'framer-motion'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar({ scrollProgress }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const opacity = useTransform(scrollProgress, [0, 0.1], [0, 1])
  
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav 
      style={{ opacity }}
      className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md z-50 shadow-xl border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#home" className="text-xl font-bold text-gray-100 hover:text-white transition-colors">
            Ken's<span className="text-cyan-400">Portfolio</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-400 hover:text-cyan-300 transition-colors p-1 rounded-md hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 py-4 px-4 shadow-inner border-t border-gray-800">
          <div className="flex flex-col space-y-3">
            {links.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 px-4 py-3 rounded-md hover:bg-gray-800/50 font-medium tracking-wide text-sm uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  )
}