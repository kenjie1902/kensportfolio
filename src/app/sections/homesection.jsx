'use client'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiFacebook } from 'react-icons/fi'

// Generate dots once outside the component (stable across SSR and client)
const dots = Array.from({ length: 60 }).map(() => ({
  cx: Math.random() * 100,
  cy: Math.random() * 100,
  r: Math.random() * 1.5 + 0.3,
  delay: Math.random() * 5,
}))

export default function HomeSection() {
  // Function to handle the CV download
  const handleDownloadCV = () => {
    // Make sure 'cv.pdf' is inside the 'public' folder
    const cvUrl = '/cv.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'Kenneth_Saniel_CV.pdf' // This will be the filename for the downloaded file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900"
    >
      {/* SVG background with floating white dots */}
      <svg
        className="absolute inset-0 w-full h-full"
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
          >
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="5s"
              repeatCount="indefinite"
              begin={`${dot.delay}s`}
            />
          </circle>
        ))}
      </svg>

      <div className="container mx-auto px-6 py-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white-900">
            Hi, I'm <span className="text-blue-600">Kenneth Saniel</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-white-600 mb-8">
            Web Developer | Graphic Designer
          </h2>
          <p className="text-lg text-white-600 mb-12 max-w-2xl mx-auto">
            I build exceptional digital experiences with modern technologies.
            Currently focused on creating accessible, user-centered products.
          </p>

          <div className="flex justify-center space-x-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors mb-2"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors mb-2"
            >
              Contact Me
            </a>
            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors mb-2"
            >
              Download CV
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center space-x-6"
        >
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
            <FiGithub size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
            <FiLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
            <FiTwitter size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
            <FiMail size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
            <FiFacebook size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
