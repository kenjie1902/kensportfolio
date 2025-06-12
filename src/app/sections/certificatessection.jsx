'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-6">
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
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image 
                  src={cert.image} 
                  alt={cert.title}
                  fill
                  className="object-cover"
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
    </section>
  )
}
