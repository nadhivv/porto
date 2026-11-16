import Section from '../layout/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Squiggle from '../ui/Squiggle.jsx'
import Mark from '../ui/Mark.jsx'
import profile from '../../data/profile.json'
import about from '../../data/about.json'

// Warna diberikan bergiliran sesuai urutan item, jadi data di JSON tidak perlu mengatur warna.
const colors = ['bg-mint',  'bg-sky',  'bg-butter',  'bg-coral',  'bg-violet']

function About() {
  return (
    <Section
      id="tentang"
      from="right"
      title={
        <>
          About <Mark color="bg-mint">Me</Mark>
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-16">
        {/* ───────── KARTU FOTO (masuk dari kiri) ───────── */}
        <Reveal from="left">
          <div className="pop relative -rotate-2 overflow-hidden rounded-4xl bg-violet">
            {/* Foto diambil dari "photo" di src/data/profile.json.
                Simpan fotonya di public/images/profile/, lalu isi
                "photo": "/images/profile/foto.jpg". Kalau kosong,
                yang tampil kotak berinisial. */}
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={profile.name}
                className="aspect-4/5 w-full object-cover"
              />
            ) : (
              <div className="group relative flex aspect-4/5 items-center justify-center">
                <span className="font-display text-8xl font-semibold text-cream/40 transition-transform duration-500 group-hover:scale-110">
                  {profile.initials}
                </span>
                <span className="font-display absolute bottom-4 text-[11px] font-medium tracking-widest text-cream/60 uppercase">
                  foto di sini
                </span>
              </div>
            )}

            <div className="border-t-[3px] border-ink bg-cream px-6 py-5">
              <p className="font-display text-xl font-semibold text-ink">
                {profile.name}
              </p>
              <p className="text-sm font-medium text-ink-soft">
                {profile.role}
              </p>
            </div>
          </div>
        </Reveal>

        {/* ───────── PROFIL (masuk dari kanan) ───────── */}
        <Reveal from="right" delay={180}>
          <h3 className="font-display mb-8 text-[clamp(1.75rem,4vw,3rem)] leading-[1.15] font-semibold text-balance text-ink">
            Saya suka mengubah hal yang rumit jadi tampilan yang{' '}
            <span className="relative whitespace-nowrap">
              sederhana
              <Squiggle className="text-violet" />
            </span>
            .
          </h3>

          <div className="mb-10 grid gap-5 leading-relaxed text-ink-soft md:grid-cols-2">
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {about.facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`pop-sm rounded-2xl px-4 py-4 ${colors[index % colors.length]}`}
              >
                <dt className="font-display mb-1 text-[11px] font-medium tracking-wide text-ink/60 uppercase">
                  {fact.label}
                </dt>
                <dd className="font-display font-semibold text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}

export default About
