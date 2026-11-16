import { motion, useReducedMotion } from 'motion/react'
import Marquee from '../ui/Marquee.jsx'
import contacts from '../../data/contacts.json'
import profile from '../../data/profile.json'
import hero from '../../data/hero.json'

// `staggerChildren` membuat anak-anaknya muncul berurutan otomatis,
// jadi tidak perlu lagi menghitung delay satu per satu.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
}

// Spring berbasis fisika, sama seperti di Reveal.jsx.
// Di hero dibuat sedikit lebih kencang (stiffness 95) supaya
// pembukaannya tidak terasa lamban.
const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 95, damping: 14, mass: 1 },
  },
}

// Teks, stiker, dan isi pita berjalan diambil dari src/data/hero.json.
// Warna diberikan bergiliran sesuai urutan item, jadi data di JSON tidak perlu mengatur warna.
const colors = ['bg-coral',  'bg-violet',  'bg-sky',  'bg-mint',  'bg-butter']

// Gaya stiker di sisi kanan, dipasangkan dengan label dari hero.json
// sesuai urutan. `top`/`left` dalam persen, `rotate` dalam derajat,
// `float` lama satu siklus naik-turun.
const stickers = [
  { color: 'bg-sky', top: '2%', left: '44%', rotate: -8, float: 4.2 },
  { color: 'bg-butter', top: '18%', left: '2%', rotate: 6, float: 3.4 },
  { color: 'bg-mint', top: '40%', left: '40%', rotate: 4, float: 5 },
  { color: 'bg-coral', top: '60%', left: '0%', rotate: -5, float: 3.8 },
  { color: 'bg-violet', top: '78%', left: '36%', rotate: 7, float: 4.6 },
]

function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      variants={container}
      initial={shouldReduceMotion ? false : 'hidden'}
      animate="show"
      className="flex min-h-dvh flex-col pt-20"
    >
      {/* flex-1 membuat bagian ini melahap sisa tinggi layar,
          sehingga pita di bawah menempel tepat di dasar. */}
      <div className="flex flex-1 items-center py-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16">
          {/* ═══════════ KIRI: TULISAN ═══════════ */}
          <div>
            <motion.p
              variants={item}
              className="font-display mb-5 inline-block rounded-full bg-cream-2 px-4 py-1.5 text-sm font-medium text-ink-soft"
            >
              {hero.greeting}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display mb-7 text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.05] font-semibold text-ink"
            >
              {profile.firstName}{' '}
              {/* Kotak sorot di belakang kata, dimiringkan sedikit
                  supaya terlihat seperti ditempel tangan */}
              <span className="relative inline-block px-3">
                <span
                  aria-hidden="true"
                  className="pop-sm absolute inset-0 -rotate-2 rounded-2xl bg-butter"
                />
                <span className="relative">{profile.lastName}</span>
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mb-9 max-w-xl text-lg leading-relaxed text-pretty text-ink-soft"
            >
              {/* Potongan dengan "bold": true ditebalkan */}
              {hero.description.map((part, index) =>
                part.bold ? (
                  <span key={index} className="relative font-bold text-ink">
                    {part.text}
                  </span>
                ) : (
                  <span key={index}>{part.text}</span>
                ),
              )}
            </motion.p>

            {/* Tombol memakai "pop-press" dari CSS, bukan whileHover
                Motion. Dua-duanya sekaligus akan bertabrakan: yang
                satu membesarkan, yang satu menekan masuk ke bayangan. */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href="#proyek"
                className="pop pop-press font-display rounded-2xl bg-coral px-7 py-3.5 text-lg font-semibold text-cream"
              >
                Lihat proyek
              </a>
              <a
                href="#tentang"
                className="pop pop-press font-display rounded-2xl bg-cream px-7 py-3.5 text-lg font-semibold text-ink"
              >
                Kenalan dulu
              </a>
            </motion.div>

            {/* ───── Kontak ───── */}
            <motion.ul
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-2.5"
            >
              {contacts.map((contact, index) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`pop-sm pop-press font-display inline-block rounded-full px-4 py-2 text-sm font-semibold text-ink ${colors[index % colors.length]}`}
                  >
                    {contact.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ═══════════ KANAN: GUGUSAN STIKER ═══════════ */}
          <motion.div
            variants={item}
            aria-hidden="true"
            className="relative hidden h-104 lg:block"
          >
            {/* Dua lingkaran sebagai latar gugusan: satu penuh, satu putus-putus */}
            <div className="pop absolute top-1/2 left-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream-2" />
            <div className="absolute top-1/2 left-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-dashed border-ink/25" />

            {hero.stickers.map((label, i) => {
              const sticker = stickers[i % stickers.length]
              return (
              <motion.span
                key={label}
                className={`pop-sm font-display absolute rounded-xl px-4 py-2 font-semibold whitespace-nowrap text-ink ${sticker.color}`}
                style={{
                  top: sticker.top,
                  left: sticker.left,
                  rotate: `${sticker.rotate}deg`,
                }}
                animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
                transition={{
                  duration: sticker.float,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {label}
              </motion.span>
            )
            })}
          </motion.div>
        </div>
      </div>

      {/* ═══════════ PITA BERJALAN DI DASAR LAYAR ═══════════ */}
      <Marquee items={hero.marquee} color="bg-butter" />
    </motion.section>
  )
}

export default Hero
