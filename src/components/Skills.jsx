import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript,
  SiTailwindcss, SiHtml5, SiCss, SiGit, SiPostman, SiRedux, SiFigma,
} from 'react-icons/si'

const groups = [
  {
    title: 'Frontend',
    items: [
      { icon: SiReact, label: 'React.js' },
      { icon: SiJavascript, label: 'JavaScript (ES6+)' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
      { icon: SiRedux, label: 'Redux' },
      { icon: SiHtml5, label: 'HTML5' },
      { icon: SiCss, label: 'CSS3' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { icon: SiNodedotjs, label: 'Node.js' },
      { icon: SiExpress, label: 'Express.js' },
      { icon: SiMongodb, label: 'MongoDB' },
    ],
  },
  {
    title: 'Tools & workflow',
    items: [
      { icon: SiGit, label: 'Git & GitHub' },
      { icon: SiPostman, label: 'Postman' },
      { icon: SiFigma, label: 'Figma' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-white/[0.05]">
      <p className="section-label">Skills</p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
        The stack I build with, day to day.
      </h2>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {groups.map((group) => (
          <div key={group.title} className="glass rounded-xl p-6">
            <h3 className="font-mono text-sm text-violet-400 mb-4">{group.title}</h3>
            <ul className="flex flex-col gap-3">
              {group.items.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-mist-100 text-sm">
                  <Icon className="text-lg text-mist-300 shrink-0" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
