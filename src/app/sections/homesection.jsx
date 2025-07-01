'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiFacebook } from 'react-icons/fi'
import { useEffect, useRef } from 'react'

export default function HomeSection() {
  const handleDownloadCV = () => {
    const cvUrl = '/cv.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'Kenneth_Saniel_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const socialLinks = [
    { 
      icon: <FiGithub size={24} />, 
      url: 'https://github.com/kenjie1902',
      color: 'hover:text-gray-300',
      label: 'GitHub'
    },
    { 
      icon: <FiLinkedin size={24} />, 
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400',
      label: 'LinkedIn'
    },
    { 
      icon: <FiTwitter size={24} />, 
      url: 'https://twitter.com',
      color: 'hover:text-blue-400',
      label: 'Twitter'
    },
    { 
      icon: <FiMail size={24} />, 
      url: 'mailto:your.email@example.com',
      color: 'hover:text-red-400',
      label: 'Email'
    },
    { 
      icon: <FiFacebook size={24} />, 
      url: 'https://www.facebook.com/kenjie.saniel',
      color: 'hover:text-blue-500',
      label: 'Facebook'
    },
  ]

  // This function will generate a random position for a particle
  const generateRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  })

  // To make the dots "blink" in different places, we'll use a new keyframe animation.
  // The animation will toggle the opacity from 0 to 1 and back, and then immediately
  // change the position with a custom CSS variable, which we will update with a unique value for each particle.
  const particleStyles = `
    @keyframes blink {
      0% { opacity: 0; transform: scale(0.5); }
      1% { opacity: 1; transform: scale(1); }
      50% { opacity: 0; transform: scale(0.5); }
      100% { opacity: 0; transform: scale(0.5); }
    }
  `

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Animated Background */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        }}
      >
        {/* Grid Lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`line-${i}`}
            style={{
              position: 'absolute',
              width: i % 2 === 0 ? '1px' : '100%',
              height: i % 2 === 0 ? '100%' : '1px',
              background: 'rgba(255, 255, 255, 0.1)',
              animation: 'fade 5s ease-in-out infinite',
              left: i % 2 === 0 ? `${i * 5}%` : 0,
              top: i % 2 === 0 ? 0 : `${i * 5}%`,
              animationDelay: `${i * 0.2}s`,
              pointerEvents: 'none',
            }}
          />
        ))}
        
        {/* Particles */}
        {Array.from({ length: 50 }).map((_, i) => {
          const { top, left } = generateRandomPosition()
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                background: 'rgba(255, 255, 255, 0.7)',
                borderRadius: '50%',
                animation: `blink 3s infinite`,
                animationDelay: `${Math.random() * 3}s`,
                top: top,
                left: left,
                pointerEvents: 'none',
              }}
            />
          )
        })}
        
        {/* The keyframes are injected here */}
        <style jsx global>{`
          @keyframes fade {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          @keyframes blink {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            1% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0;
              transform: scale(0.5);
            }
            100% {
              opacity: 0;
              transform: scale(0.5);
            }
          }
        `}</style>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-24 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Hi, I'm <span className="text-blue-400">Kenneth Saniel</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-8">
            Web Developer | Graphic Designer
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            I build exceptional digital experiences with modern technologies.
            Currently focused on creating accessible, user-centered products.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Me
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center gap-6"
        >
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              whileHover={{ y: -3 }}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={`text-gray-400 transition-colors ${item.color}`}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}