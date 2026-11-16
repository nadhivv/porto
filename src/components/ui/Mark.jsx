// Kotak sorot di belakang sebuah kata, dimiringkan sedikit supaya
// terlihat seperti ditempel tangan.
//
// Cara pakai:
//   <h2>About <Mark color="bg-mint">Me</Mark></h2>
function Mark({ children, color = 'bg-butter' }) {
  return (
    <span className="relative inline-block px-3">
      <span
        aria-hidden="true"
        className={`pop-sm absolute inset-0 -rotate-2 rounded-2xl ${color}`}
      />
      <span className="relative">{children}</span>
    </span>
  )
}

export default Mark
