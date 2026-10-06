const timeline = [
  {
    period: '2024 — Present',
    role: 'Full Stack MERN Developer',
    org: 'CodeCrafter Web Solution',
    text: 'Building and maintaining full-stack web applications for clients across industries \u2014 React interfaces on top of Node/Express APIs and MongoDB, working section by section from design to deployment.',
  },
  {
    period: 'Earlier',
    role: 'Frontend Projects & Freelance',
    org: 'Independent',
    text: 'Delivered React and Next.js websites for small businesses \u2014 e-commerce UI, clinic and service sites, and internal admin tools.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-white/[0.05]">
      <p className="section-label">Experience</p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
        Where I've worked.
      </h2>

      <div className="mt-12 relative pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.08]" />
        <ol className="flex flex-col gap-10">
          {timeline.map((item) => (
            <li key={item.role} className="relative">
              <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-ink-950 border-2 border-amber-500" />
              <p className="font-mono text-xs text-violet-400 mb-1">{item.period}</p>
              <h3 className="font-display font-semibold text-lg text-mist-100">
                {item.role} <span className="text-mist-500 font-body font-normal">· {item.org}</span>
              </h3>
              <p className="mt-2 text-sm text-mist-300 leading-relaxed max-w-xl">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
