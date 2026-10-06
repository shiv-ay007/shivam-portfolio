import { motion } from 'framer-motion'

const notes = [
  {
    color: 'bg-white',
    tilt: '-rotate-2',
    quote: '"Shivam picked up the requirements fast and delivered a clean, responsive UI without needing much back and forth."',
    who: '— Project Manager',
  },
  {
    color: 'bg-white',
    tilt: 'rotate-2',
    quote: '"Solid API work and clean data models — the kind of backend you don\u2019t have to think about once it\u2019s live."',
    who: '— Tech Lead',
  },
  {
    color: 'bg-white',
    tilt: 'rotate-1',
    quote: '"Great communicator, easy to work with, and genuinely cares about getting the small details right."',
    who: '— Client',
  },
  {
    color: 'bg-white',
    tilt: '-rotate-1',
    quote: '"Turned a rough idea into a working product quickly, and kept improving it after launch."',
    who: '— Startup Founder',
  },
]

export default function Testimonials() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading justify-center">♡ Kind Words ♡</h2>
        <p className="font-body text-sm text-ink/60 mt-2">
          (sample quotes — swap in real feedback from clients or teammates)
        </p>
      </motion.div>

      <div className="mt-10 grid sm:grid-cols-2 gap-6 text-left">
        {notes.map((n, i) => (
          <motion.div
            key={n.who}
            initial={{ opacity: 0, y: 35, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.12, type: "spring", bounce: 0.3 }}
            className={`sticky-note ${n.color} ${n.tilt} rounded-md`}
          >
            <p className="font-hand text-lg leading-snug">{n.quote}</p>
            <p className="font-hand text-sm mt-3 text-ink/70">{n.who}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
