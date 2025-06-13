'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiFacebook } from 'react-icons/fi'

// Generate star dots
const dots = Array.from({ length: 80 }).map(() => ({
  cx: Math.random() * 100,
  cy: Math.random() * 100,
  r: Math.random() * 1.5 + 0.3,
  delay: Math.random() * 5,
}))

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

  // Social media links
  const socialLinks = [
    { 
      icon: <FiGithub size={24} />, 
      url: 'https://github.com/kenjie1902', // Replace with your GitHub URL
      color: 'hover:text-gray-300',
      label: 'GitHub'
    },
    { 
      icon: <FiLinkedin size={24} />, 
      url: 'https://linkedin.com', // Replace with your LinkedIn URL
      color: 'hover:text-blue-400',
      label: 'LinkedIn'
    },
    { 
      icon: <FiTwitter size={24} />, 
      url: 'https://twitter.com', // Replace with your Twitter URL
      color: 'hover:text-blue-400',
      label: 'Twitter'
    },
    { 
      icon: <FiMail size={24} />, 
      url: 'mailto:your.email@example.com', // Replace with your email
      color: 'hover:text-red-400',
      label: 'Email'
    },
    { 
      icon: <FiFacebook size={24} />, 
      url: 'https://www.facebook.com/kenjie.saniel', // Replace with your Facebook URL
      color: 'hover:text-blue-500',
      label: 'Facebook'
    },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Starfield Background */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={`${dot.cx}%`}
            cy={`${dot.cy}%`}
            r={dot.r}
            fill="white"
            opacity="0.8"
          >
            <animate
              attributeName="opacity"
              values="0;0.8;0"
              dur={`${Math.random() * 4 + 3}s`}
              repeatCount="indefinite"
              begin={`${dot.delay}s`}
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1.2;1"
              dur={`${Math.random() * 5 + 5}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      {/* Content Container */}
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