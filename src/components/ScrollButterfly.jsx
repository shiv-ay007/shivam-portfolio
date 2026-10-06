import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Butterfly from './Butterfly'

export default function ScrollButterfly() {
  const { scrollYProgress } = useScroll()

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  })

  const y = useTransform(smooth, [0, 1], ['10vh', '90vh'])

  const x = useTransform(
    smooth,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ['5vw', '70vw', '15vw', '80vw', '20vw', '60vw']
  )

  const rotate = useTransform(
    smooth,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 25, -20, 30, -25, 15]
  )

  const scale = useTransform(smooth, [0, 0.5, 1], [1, 0.85, 1])

  return (
    <motion.div
      style={{ x, y, rotate, scale }}
      className="fixed top-0 left-0 z-40 pointer-events-none"
    >
      <Butterfly className="butterfly-svg w-14 h-14" />
    </motion.div>
  )
}