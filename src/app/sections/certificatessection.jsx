'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const certificates = [
  {
    id: 1,
    title: 'Capstone Writing 1',
    issuer: 'HCDC',
    date: 'June 2024',
    image: '/images/cer1.png',
  },
  {
    id: 2,
    title: 'Capstone Writing 2',
    issuer: 'HCDC',
    date: 'August 2024',
    image: '/images/cer2.png',
  },
  {
    id: 3,
    title: 'MCITS 2023',
    issuer: 'HCDC',
    date: 'May 2023',
    image: '/images/cer3.png',
  },
  {
    id: 4,
    title: 'MCITS 2024',
    issuer: 'MMCM',
    date: 'May 2024',
    image: '/images/cer4.png',
  },
  {
    id: 5,
    title: 'OJT Certificate (5thCRG,CSRAFP)',
    issuer: '5thCRG',
    date: 'May 2025',
    image: '/images/cer5.png',
  },
  {
    id: 6,
    title: 'Research Presenter (Conversazione)',
    issuer: 'HCDC',
    date: 'May 2025',
    image: '/images/cer6.png',
  }
]

export default function CertificatesSection() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="certificates" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* SVG Background */}
      <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <circle cx="20%" cy="10%" r="60" fill="#c7d2fe" opacity="0.3" />
        <circle cx="90%" cy="20%" r="80" fill="#a5b4fc" opacity="0.25" />
        <circle cx="40%" cy="65%" r="110" fill="#93c5fd" opacity="0.2" />
        <circle cx="65%" cy="90%" r="70" fill="#d8b4fe" opacity="0.3" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Certificates</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            My professional certifications that validate my skills and knowledge
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedImage(cert.image)}
            >
              <div className="relative h-48">
                <Image 
                  src={cert.image} 
                  alt={cert.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1 text-gray-900">{cert.title}</h3>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Popup */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <button 
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 z-10"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              aria-label="Close"
            >
              ×
            </button>
            <Image 
              src={selectedImage} 
              alt="Certificate preview"
              width={1200}
              height={800}
              className="object-contain w-full h-full max-h-[80vh]"
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}