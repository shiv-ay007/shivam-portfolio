import { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const links = [
  { href: '#top', label: 'Home', rotate: '-rotate-2' },
  { href: '#about', label: 'About', rotate: 'rotate-1' },
  { href: '#projects', label: 'Projects', rotate: '-rotate-1' },
  { href: '#contact', label: 'Connect', rotate: 'rotate-2' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav className="max-w-5xl mx-auto px-5 sm:px-8 pt-6 flex items-center justify-end">
        <ul className="hidden md:flex items-center gap-3">
          {links.map((l) => (
            <li key={l.href} className={l.rotate}>
              <a href={l.href} className="pill-nav hover:bg-blush-400/40 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden pill-nav text-xl"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-5 mt-3 sticky-note bg-paper rounded-xl flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-hand text-lg"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
