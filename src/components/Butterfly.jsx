export default function Butterfly({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left wing */}
      <g className="wing-left">
        <path
          d="M50 50 C 20 20, 5 35, 15 55 C 5 70, 25 80, 50 55 Z"
          fill="#f472b6"
          stroke="#1a1a1a"
          strokeWidth="2"
        />
      </g>

      {/* Right wing */}
      <g className="wing-right">
        <path
          d="M50 50 C 80 20, 95 35, 85 55 C 95 70, 75 80, 50 55 Z"
          fill="#f472b6"
          stroke="#1a1a1a"
          strokeWidth="2"
        />
      </g>

      {/* Body */}
      <ellipse cx="50" cy="52" rx="2.5" ry="14" fill="#1a1a1a" />

      {/* Antennae */}
      <path d="M50 40 C 46 30, 42 26, 38 24" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M50 40 C 54 30, 58 26, 62 24" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="38" cy="24" r="1.5" fill="#1a1a1a" />
      <circle cx="62" cy="24" r="1.5" fill="#1a1a1a" />
    </svg>
  )
}