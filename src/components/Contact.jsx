import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import Toast from './Toast'

export default function Contact() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [toast, setToast] = useState({ show: false, message: '' })

  const envelopeRef = useRef(null)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [phase, setPhase] = useState('closed') // closed | lifting | open

  // Envelope kholo — uski position nikaal ke letter wahan se start karega
  const handleOpen = () => {
    if (envelopeRef.current) {
      const rect = envelopeRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      setStartPos({
        x: cx - window.innerWidth / 2,
        y: cy - window.innerHeight / 2,
      })
    }
    setPhase('lifting')
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setPhase('open'))
    })
  }

  const handleClose = () => {
    setPhase('lifting')
    setTimeout(() => {
      setPhase('closed')
      setStatus('idle')
    }, 300)
  }

  const handleSend = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: name || 'A visitor',
          email: email || 'no-reply@example.com',
          message,
          subject: `A letter from ${name || 'a visitor'}`,
          from_name: 'Portfolio Contact Form',
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setToast({ show: true, message: 'Sent with love 💌✨' })
        setName('')
        setEmail('')
        setMessage('')
        setTimeout(() => {
          handleClose()
        }, 1800)
      } else {
        setStatus('error')
        setToast({ show: true, message: 'Oops! Try again 😔' })
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setToast({ show: true, message: 'Something went wrong 😔' })
    }
  }

  // Letter ki transform state
  const getLetterStyle = () => {
    if (phase === 'closed') {
      return {
        transform: `translate(${startPos.x}px, ${startPos.y}px) scale(0.15) rotate(-10deg)`,
        opacity: 0,
      }
    }
    if (phase === 'lifting') {
      return {
        transform: `translate(${startPos.x * 0.35}px, ${startPos.y * 0.35}px) scale(0.5) rotate(-4deg)`,
        opacity: 0.7,
      }
    }
    return {
      transform: 'translate(0, 0) scale(1) rotate(0deg)',
      opacity: 1,
    }
  }

  const isVisible = phase !== 'closed'

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 text-center">
      <Toast
        show={toast.show}
        message={toast.message}
        onClose={() => setToast({ show: false, message: '' })}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="section-heading justify-center"
      >
        Connect With Me
      </motion.h2>

      <div className="mt-10 grid sm:grid-cols-2 gap-10 items-center text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
        >
          <p className="font-hand text-xl">For services like</p>
          <ul className="mt-3 flex flex-col gap-1.5 font-hand text-lg">
            <li>- Full Stack Web Development</li>
            <li>- Custom Software Development</li>
            <li>- App Projects</li>
            <li>- Freelance Collaborations</li>
          </ul>
          <p className="font-hand text-xl mt-4">Or just say hello to me 😊</p>
          <a
            href="mailto:Shivam.yadav.cse01@gmail.com"
            className="inline-block mt-5 pill-nav bg-white hover:bg-pink-100 transition-colors"
          >
            Shivam.yadav.cse01@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.35 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
            ref={envelopeRef}
            type="button"
            onClick={handleOpen}
            aria-label="Write me a letter"
            className="relative w-56 h-40 rotate-2 group cursor-pointer"
          >
            <div className="absolute inset-0 bg-pink-300 border-2 border-ink rounded-md transition-transform duration-200 group-hover:-translate-y-1" />
            <div
              className="absolute inset-0 border-2 border-ink"
              style={{ clipPath: 'polygon(0 0, 50% 55%, 100% 0)' }}
            />
            <span className="absolute bottom-3 right-3 text-3xl">💌</span>
            <span className="absolute top-2 left-3 font-hand text-sm text-ink/70">
              click to write me a letter
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Dim backdrop */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-500 ${
          isVisible
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(46,42,34,0.45)' }}
        onClick={handleClose}
      />

      {/* Letter — center me, envelope se nikalta hua */}
      <div
        className={`fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none ${
          isVisible ? 'visible' : 'invisible'
        }`}
      >
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSend}
          className="relative w-full max-w-md pointer-events-auto"
          style={{
            ...getLetterStyle(),
            transition:
              'transform 750ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease',
            background:
              'repeating-linear-gradient(#FFFFFF 0px, #FFFFFF 27px, rgba(244,114,182,0.18) 28px)',
            boxShadow: '0 20px 45px rgba(0,0,0,0.35)',
            clipPath:
              'polygon(0 8px, 4% 0, 96% 0, 100% 8px, 100% 100%, 0 100%)',
            transformOrigin: 'center center',
            willChange: 'transform, opacity',
          }}
        >
          {/* Butterfly stamp */}
          <div className="absolute -top-3 right-6 w-14 h-14 bg-sticky-pink border-2 border-ink rounded-full flex items-center justify-center rotate-6 shadow-[2px_3px_0_rgba(46,42,34,0.3)]">
            <span className="text-xl">🦋</span>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close letter"
            className="absolute top-3 left-3 text-ink/60 hover:text-ink text-lg z-10"
          >
            <FiX />
          </button>

          <div className="p-8 pt-10">
            <p className="font-script text-2xl text-blush-600">Dear Shivam,</p>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="your name"
              required
              className="w-full bg-transparent border-none border-b border-dashed border-ink/30 mt-4 pb-1 font-hand text-lg placeholder:text-ink/40 focus:outline-none"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your email"
              required
              className="w-full bg-transparent border-none border-b border-dashed border-ink/30 mt-3 pb-1 font-hand text-lg placeholder:text-ink/40 focus:outline-none"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="write your message here..."
              rows={5}
              required
              className="w-full bg-transparent border-none mt-3 font-hand text-lg leading-[27px] placeholder:text-ink/40 focus:outline-none resize-none"
            />

            <div className="flex items-center justify-between mt-4">
              <p className="font-script text-xl text-ink/70">
                {status === 'sending' && 'sending... 💌'}
                {status === 'success' && 'sent with love ✨'}
                {status === 'error' && 'oops, try again 😔'}
                {status === 'idle' && 'with love, ✨'}
              </p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-14 h-14 rounded-full bg-blush-500 border-2 border-ink text-paper font-hand text-sm shadow-[2px_3px_0_rgba(46,42,34,0.3)] hover:-translate-y-0.5 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send letter"
              >
                {status === 'sending' ? '...' : 'Send'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}