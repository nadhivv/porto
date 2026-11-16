// Garis berlekuk yang dipasang di bawah sebuah kata.
// Dibuat dari SVG, jadi tidak perlu file gambar.
//
// Cara pakai: bungkus katanya dengan <span className="relative">,
// lalu taruh <Squiggle /> di dalamnya.
//
// `position` dipisah dari `className` supaya pemanggil bisa menggeser
// dan membesarkannya tanpa bentrok dengan class bawaan. Judul besar
// butuh garis yang lebih tebal dan agak turun.
function Squiggle({ className = '', position = '-bottom-1 h-2.5' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 10"
      preserveAspectRatio="none"
      fill="none"
      className={`absolute left-0 w-full ${position} ${className}`}
    >
      <path
        d="M1 7C10 2 20 2 30 6s20 4 30 0 20-4 30 0 19 3 29-2"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default Squiggle
