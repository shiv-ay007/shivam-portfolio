import { FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'
import PencilUnderline from './PencilUnderline'

const projects = [
  {
    emoji: '🛒',
    title: 'Enterprise MERN E-Commerce Platform',
    tilt: '-rotate-2',
    tapeRotate: 'rotate-6',
    photoBg: 'from-pink-100 to-rose-200',
    stack: 'React.js, Node.js, Express, MongoDB, Tailwind CSS',
    stackNote: 'bg-white',
    github: 'https://github.com/shiv-ay007',
    desc: "A comprehensive e-commerce platform with live product filtering, shopping cart, secure checkout, payment gateway integration, and a dedicated admin portal.",
    features: [
      ['Authentication', 'Secure user registration, login & JWT authorization.'],
      ['Cart & Checkout', 'Dynamic cart management with real-time pricing and stock update.'],
      ['Admin Portal', 'Comprehensive dashboard to manage products, categories and orders.'],
      ['Responsive UI', 'Modern, mobile-first design crafted with React and Tailwind CSS.'],
    ],
  },
  {
    emoji: '🎓',
    title: 'Smart Educational & LMS Dashboard',
    tilt: 'rotate-2',
    tapeRotate: '-rotate-6',
    photoBg: 'from-pink-50 to-pink-200',
    stack: 'React.js, Node.js, Express, MongoDB, Tailwind CSS',
    stackNote: 'bg-white',
    github: 'https://github.com/shiv-ay007',
    desc: 'Interactive Learning Management System for students and instructors featuring course video streaming, quiz evaluations, and visual progress tracking.',
    features: [
      ['Course Modules', 'Structured lessons with downloadable resources and progress tracking.'],
      ['Interactive Quizzes', 'Dynamic tests with instant score calculation and feedback.'],
      ['Analytics Dashboard', 'Visual analytics for course completion and student performance.'],
    ],
  },
  {
    emoji: '✨',
    title: 'Corporate Agency & SaaS Portal',
    tilt: '-rotate-2',
    tapeRotate: 'rotate-6',
    photoBg: 'from-rose-100 to-pink-200',
    stack: 'React, JavaScript (ES6+), Tailwind CSS, Node.js',
    stackNote: 'bg-white',
    github: 'https://github.com/shiv-ay007',
    desc: 'High-converting agency website featuring glassmorphic design elements, smooth micro-interactions, fast loading speeds, and dynamic lead capture.',
    features: [
      ['Glassmorphic Design', 'Clean modern aesthetic with smooth animations and interactions.'],
      ['Lead Capture Flow', 'Interactive project estimation and contact form.'],
      ['Performance Optimized', 'High Google PageSpeed score and SEO-friendly structure.'],
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative inline-block"
      >
        <h2 className="section-heading justify-center">Projects</h2>

        {/* Line 1 - neeche */}
        <PencilUnderline
          className="pencil-draw absolute left-0 right-0 -bottom-3 w-full h-4 text-blush-500 opacity-80"
        />

        {/* Line 2 - thoda aur neeche, chhoti */}
        <PencilUnderline
          className="pencil-draw absolute left-4 right-4 -bottom-6 w-[calc(100%-2rem)] h-3 text-blush-500 opacity-60"
          style={{ animationDelay: '0.3s' }}
        />
      </motion.div>

      <div className="mt-14 flex flex-col gap-20 text-left">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: idx * 0.1, type: "spring", bounce: 0.2 }}
          >
            <div className="grid sm:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
              <motion.div
                whileHover={{ scale: 1.04, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative polaroid ${p.tilt} max-w-xs cursor-pointer`}
              >
                <span className={`tape absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-7 ${p.tapeRotate}`} />
                <div className={`h-40 w-full bg-gradient-to-br ${p.photoBg} flex items-center justify-center text-5xl`}>
                  {p.emoji}
                </div>
              </motion.div>

              <div className={`sticky-note ${p.stackNote} rounded-md rotate-1 max-w-[220px]`}>
                <p className="font-hand text-lg">TechStack</p>
                <p className="font-hand text-sm mt-2 text-ink/80">{p.stack}</p>
              </div>
            </div>

            <h3 className="font-hand text-2xl mt-6 flex items-center gap-2">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blush-600 transition-colors inline-flex items-center gap-2"
              >
                {p.title} <FiGithub className="text-xl" />
              </a>
            </h3>
            <p className="font-body text-ink/80 leading-relaxed mt-2 max-w-2xl">
              {p.desc}
            </p>

            <ul className="mt-4 flex flex-col gap-1.5">
              {p.features.map(([label, text]) => (
                <li key={label} className="font-body text-sm text-ink/85">
                  <strong>{label}:</strong> {text}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
