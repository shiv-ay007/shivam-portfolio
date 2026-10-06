import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'
import myPhoto from '../assets/passport.png'
import Butterfly from './Butterfly'

export default function Hero() {
  return (
    <section id="top" className="pt-6 pb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="section-heading justify-center text-4xl sm:text-5xl tracking-wide inline-flex items-center gap-2 relative">
          {/* Left butterfly */}
          <div className="butterfly-flying absolute right-full mr-1 top-5">
            <Butterfly className="butterfly-svg w-12 h-12" />
          </div>

          Portfolio{" "}

          {/* Right butterfly */}
          <div className="butterfly-flying absolute left-full ml-1 top-5">
            <Butterfly className="butterfly-svg w-12 h-12" />
          </div>
        </h1>
      </motion.div>


      <div className="max-w-4xl mx-auto mt-14 px-6 grid sm:grid-cols-[1.1fr_1fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-hand text-2xl"
          >
            Hey, I am
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-hand text-4xl sm:text-5xl leading-tight mt-1"
          >
            Shivam Yadav
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-hand text-2xl mt-2 text-blush-600 font-bold"
          >
            Full Stack MERN Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-body text-ink/80 italic mt-4 max-w-sm"
          >
            "Turning ideas into fast, reliable web apps — one component at a time."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-4 mt-6 text-2xl"
          >
            <motion.a
              whileHover={{ scale: 1.25, rotate: -8, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/shivamm_yadav007?igsh=bnhlN3RlOG5qNWw4"
              target='_blank'
              rel="noreferrer"
              aria-label="Instagram"
              className="social-icon-doodle inline-block"
            >
              <FiInstagram />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.25, rotate: 8, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/shivam-yadav-cse01"
              target='_blank'
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-icon-doodle inline-block"
            >
              <FiLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.25, rotate: -8, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/shiv-ay007"
              target='_blank'
              rel="noreferrer"
              aria-label="GitHub"
              className="social-icon-doodle inline-block"
            >
              <FiGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.25, rotate: 8, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:Shivam.yadav.cse01@gmail.com"
              aria-label="Email"
              className="social-icon-doodle inline-block"
            >
              <FiMail />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, type: "spring", bounce: 0.35, delay: 0.2 }}
          className="relative flex justify-center select-none"
        >
          {/* Breathing aura background circle */}
          <div className="aura-float absolute w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-blush-400/70 -z-10 top-3 left-1/2 -translate-x-1/2" />

          {/* Sparkle 1 - Top Right */}
          <div className="sparkle-twinkle absolute -top-4 -right-2 text-pink-500 z-10 pointer-events-none" style={{ animationDelay: '0s' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
            </svg>
          </div>

          {/* Sparkle 2 - Bottom Left */}
          <div className="sparkle-twinkle absolute bottom-6 -left-4 text-pink-400 z-10 pointer-events-none" style={{ animationDelay: '1.2s' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
            </svg>
          </div>

          {/* Sparkle 3 - Top Left Mini */}
          <div className="sparkle-twinkle absolute top-6 -left-3 text-pink-300 z-10 pointer-events-none" style={{ animationDelay: '0.6s' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
            </svg>
          </div>

          {/* Floating interactive profile photo */}
          <div className="photo-float cursor-pointer w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-ink bg-white flex items-center justify-center rotate-2 shadow-[5px_7px_0_rgba(46,42,34,0.18)]">
            <img
              src={myPhoto}
              alt="Shivam Yadav"
              className="w-full h-full object-cover object-top scale-105"
            />
          </div>

          {/* Cute doodle sticker badge */}
          <span className="absolute -bottom-2 -right-1 bg-white border-2 border-ink px-3 py-1 rounded-full font-hand text-sm rotate-6 shadow-[2px_3px_0_rgba(46,42,34,0.2)] hover:scale-110 transition-transform cursor-default">
            MERN Dev 💻
          </span>
        </motion.div>
      </div>
    </section>
  )
}
