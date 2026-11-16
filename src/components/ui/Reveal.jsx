import { motion, useReducedMotion } from 'motion/react'

// Posisi awal sebelum elemen masuk layar, dalam piksel.
const offset = {
  bottom: { y: 40 },
  left: { x: -70 },
  right: { x: 70 },
}

// Pembungkus animasi berbasis Motion (dulu Framer Motion).
// Isinya meluncur masuk dengan sedikit pantulan di ujung gerakan.
//
//   <Reveal from="left">...</Reveal>   masuk dari kiri, memantul
//   <Reveal from="right">...</Reveal>  masuk dari kanan, memantul
//   <Reveal>...</Reveal>               dari bawah
//   <Reveal delay={150}>...</Reveal>   ditunda 150ms (efek berurutan)
//   <Reveal as="li">...</Reveal>       jadi <li>, bukan <div>
function Reveal({
  children,
  delay = 0,
  from = 'bottom',
  as = 'div',
  className = '',
}) {
  const shouldReduceMotion = useReducedMotion()

  // Kalau pengguna mematikan animasi di setelan sistem, tampilkan
  // apa adanya tanpa gerakan sedikit pun.
  if (shouldReduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  // motion.div, motion.li, motion.article — dipilih lewat prop `as`
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      // once: true  → animasinya cukup sekali, tidak diulang saat scroll balik
      // amount: 0.2 → mulai saat 20% elemennya terlihat
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        // ───── SPRING BERBASIS FISIKA ─────
        // Motion punya dua cara menulis spring. Yang dipakai dulu
        // "duration + bounce": kita tentukan lama dan seberapa
        // memantul, Motion yang menghitung pernya.
        //
        // Yang sekarang menggambarkan pernya langsung, jadi
        // gerakannya terasa lebih seperti benda sungguhan:
        //
        //   stiffness → kekuatan per. Makin besar makin cepat
        //               menarik kembali. 80 = lembut.
        //   damping   → peredam. Makin kecil makin lama bergoyang.
        //               13 memberi satu pantulan yang jelas.
        //   mass      → berat benda. Makin berat makin malas
        //               berhenti, gerakannya terasa lebih berbobot.
        //
        // Lamanya tidak ditentukan; per yang berhenti sendiri.
        type: 'spring',
        stiffness: 80,
        damping: 13,
        mass: 1.15,
        delay: delay / 1000, // prop `delay` dalam ms, Motion pakai detik
      }}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
