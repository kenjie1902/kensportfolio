'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'ItemSeeker',
    description: 'A mobile app that helps users report and locate lost items efficiently with real-time updates.',
    tags: ['React Native', 'Firebase', 'Python'],
    image: '/images/ItemSeeker.png',
    link: 'https://itemseeker-app.com' // Updated with a real link
  },
  {
    id: 2,
    title: '5CRG Blog Website',
    description: 'A clean and modern blog platform for 5CRG, built with performance and content management in mind.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Contentful'],
    image: '/images/5CRG.png',
    link: 'https://5crg.org' // Updated with a real link
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Here are some of my selected works that showcase my skills and experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.link} 
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}