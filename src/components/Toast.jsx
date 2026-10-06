import { useEffect } from 'react'

export default function Toast({ message, show, onClose, duration = 2500 }) {
  useEffect(() => {
    if (!show) return
    const t = setTimeout(() => {
      onClose?.()
    }, duration)
    return () => clearTimeout(t)
  }, [show, duration, onClose])

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[80] pointer-events-none transition-all duration-500 ease-out ${
        show
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 -translate-y-4 scale-90'
      }`}
    >
      <div
        className="relative bg-sticky-pink border-2 border-ink px-5 py-3 -rotate-2 shadow-[4px_5px_0_rgba(46,42,34,0.35)]"
        style={{
          clipPath:
            'polygon(0 6px, 4% 0, 96% 0, 100% 6px, 100% 100%, 0 100%)',
        }}
      >
        <span className="absolute -top-2 -left-2 text-lg rotate-12">🦋</span>
        <span className="absolute -bottom-2 -right-2 text-lg -rotate-12">✨</span>
        <p className="font-hand text-lg text-ink whitespace-nowrap">
          {message}
        </p>
      </div>
    </div>
  )
}