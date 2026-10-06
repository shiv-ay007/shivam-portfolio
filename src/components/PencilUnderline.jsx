export default function PencilUnderline({ className = "" }) {
  return (
    <svg
      viewBox="0 0 300 20"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M2 12 C 50 4, 100 16, 150 10 C 200 4, 250 16, 298 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}