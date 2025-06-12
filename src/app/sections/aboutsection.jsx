'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  const skills = [
    'JavaScript', 'React', 'Next.js', 'Node.js', 
    'Tailwind CSS', 'Figma', 'UI/UX Design', 'Git', 'REST APIs'
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Get to know more about who I am and what I do
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg float-animate glow-strong-gray">
              <Image 
                src="/images/IMG_15901.JPG" 
                alt="Profile Picture"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-2/3"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Who am I?</h3>
            <p className="text-gray-600 mb-6">
              I'm a web developer who enjoys creating websites and web applications
              that are both easy to use and visually appealing. I have a background in design,
              which helps me pay attention to details and make sure
              everything looks good and works well. I focus on building clean, responsive
              layouts that work across different devices and browsers.
            </p>
            <p className="text-gray-600 mb-8">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or enjoying outdoor 
              activities. I believe in continuous learning and staying updated 
              with the latest industry trends.
            </p>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">My Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Inline CSS for float + strong gray glow */}
      <style jsx>{`
        .float-animate {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .glow-strong-gray {
          box-shadow: 0 0 30px rgba(75, 85, 99, 0.8), 0 0 60px rgba(75, 85, 99, 0.5);
          transition: box-shadow 0.3s ease-in-out;
        }
      `}</style>
    </section>
  )
}
