import { motion } from 'framer-motion'
import PencilUnderline from "./PencilUnderline";

export default function About() {
  return (
    <section id="about" className="section max-w-4xl mx-auto px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative inline-block"
      >
        <h2 className="section-heading justify-center">About Me</h2>

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

      <div className="mt-10 grid sm:grid-cols-2 gap-8 text-left">
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -6 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="sticky-note bg-white rounded-md -rotate-2"
        >
          <span className="tape absolute -top-3 left-8 w-16 h-6 -rotate-3" />
          <p className="font-hand text-lg">
            <strong>Experience:</strong> 1+ year
          </p>
          <p className="font-hand text-lg mt-2">
            <strong>Works at:</strong> CodeCrafter Web Solution
          </p>
          <p className="font-hand text-lg mt-2">
            <strong>Interest:</strong> Full Stack Web Development (MERN)
          </p>
          <p className="font-hand text-lg mt-2">
            <strong>Location:</strong> Prayagraj / Lucknow, UP
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 6 }}
          whileInView={{ opacity: 1, x: 0, rotate: 2 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3, delay: 0.15 }}
          className="sticky-note bg-white rounded-md rotate-2"
        >
          <span className="tape absolute -top-3 right-8 w-16 h-6 rotate-3" />
          <p className="font-hand text-lg"><strong>Skills:-</strong></p>
          <p className="font-hand text-base mt-2">
            <strong>Backend:</strong> Node.js, Express, MongoDB, REST APIs
          </p>
          <p className="font-hand text-base mt-2">
            <strong>Frontend:</strong> React.js, Tailwind CSS, JavaScript (ES6+)
          </p>
          <p className="font-hand text-base mt-2">
            <strong>Tools:</strong> Git, GitHub, Postman, VS Code
          </p>
          <p className="font-hand text-base mt-2">
            <strong>Strengths:</strong> Problem-solving, quick learner, adaptable
          </p>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="font-body text-ink/85 leading-relaxed mt-10 max-w-2xl mx-auto"
      >
        I'm Shivam, a full-stack developer focused on the MERN stack — MongoDB,
        Express, React, and Node.js. I work at CodeCrafter Web Solution
        building websites and web apps for clients across different
        industries, going section by section from design to deployment. I enjoy the mix of
        architecting backend APIs and getting the little UI details right.
      </motion.p>
    </section>
  )
}
