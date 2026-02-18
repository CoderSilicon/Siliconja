export default function Header() {
  return (
    <header className="w-full h-20 bg-[#0F172A] flex items-center justify-center">
      <svg
        width="460"
        height="60"
        viewBox="0 0 460 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Accent bar */}
        <rect x="120" y="45" width="220" height="4" fill="#2563EB" rx="2" />

        {/* Normal text */}
        <text
          x="50%"
          y="35"
          textAnchor="middle"
          fontSize="26"
          fontWeight="600"
          fill="#94A3B8"
          fontFamily="Inter, sans-serif"
        >
          Silico
        </text>

        {/* Highlighted part */}
        <text
          x="50%"
          y="35"
          dx="38"
          fontSize="26"
          fontWeight="800"
          fill="#3B82F6"
          fontFamily="Inter, sans-serif"
        >
          nja
        </text>
      </svg>
    </header>
  );
}
