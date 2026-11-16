import { motion, useReducedMotion } from 'motion/react'

// Pita berjalan selebar layar.
//
// Daftarnya digandakan dua kali supaya saat gulungan pertama habis,
// gulungan kedua sudah pas di tempatnya. Animasinya bergerak dari
// 0% ke -50% lalu mengulang, jadi sambungannya tidak terlihat.
function Marquee({ items, color = 'bg-butter', duration = 30 }) {
  const shouldReduceMotion = useReducedMotion()
  const doubled = [...items, ...items]

  return (
    // Margin minus menarik pita keluar dari padding <main>,
    // sehingga menyentuh tepi kiri dan kanan layar.
    <div
      aria-hidden="true"
      className={`-mx-6 overflow-hidden border-y-[3px] border-ink sm:-mx-10 lg:-mx-16 ${color}`}
    >
      <motion.div
        className="flex w-max items-center py-3.5"
        animate={shouldReduceMotion ? undefined : { x: ['0%', '-50%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display flex items-center gap-7 px-7 text-lg font-semibold whitespace-nowrap text-ink"
          >
            {item}
            <span className="text-base text-coral">&#10022;</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee
