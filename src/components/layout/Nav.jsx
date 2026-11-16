import { useEffect, useState } from 'react'
import links from '../../data/nav.json'
import profile from '../../data/profile.json'

// Menu diambil dari src/data/nav.json. Labelnya sengaja sama
// dengan judul tiap bagian, supaya tidak membingungkan saat diklik.
function Nav() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')

  // Garis tebal di paling atas yang memanjang seiring halaman di-scroll
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menandai menu bagian mana yang sedang dilihat
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-25% 0px -65% 0px' },
    )

    links.forEach((link) => {
      const element = document.getElementById(link.href.slice(1))
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b-[3px] border-ink bg-cream/90 backdrop-blur-xl">
      <div
        className="absolute top-0 left-0 h-1 bg-coral transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />

      {/* Padding-nya dibuat sama dengan <main> di App.jsx supaya logo
          dan menu sejajar dengan tepi isi halaman */}
      <nav className="flex h-20 items-center justify-between gap-6 px-6 sm:px-10 lg:px-16">
        {/* ───── Logo: kotak membulat berinisial ───── */}
        <a href="#" className="group flex items-center gap-3">
          <span className="pop-sm flex size-10 items-center justify-center rounded-xl bg-coral transition-transform duration-300 group-hover:-rotate-6">
            <span className="font-display text-lg font-semibold text-cream">
              {profile.initials[0]}
            </span>
          </span>

          <span className="font-display text-xl leading-none font-semibold text-ink">
            {profile.firstName}
          </span>
        </a>

        {/* ───── Menu tengah ───── */}
        <ul className="hidden gap-1 lg:flex">
          {links.map((link) => {
            const isActive = active === link.href.slice(1)

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-display block rounded-full px-4 py-2 font-medium transition-colors ${
                    isActive
                      ? 'pop-sm bg-butter text-ink'
                      : 'text-ink-soft hover:bg-cream-2 hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* ───── Tombol utama di kanan ───── */}
        <a
          href="#kontak"
          className="pop-sm pop-press font-display rounded-xl bg-violet px-5 py-2.5 font-semibold text-cream"
        >
          Hubungi saya
        </a>
      </nav>
    </header>
  )
}

export default Nav
