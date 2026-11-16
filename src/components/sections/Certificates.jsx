import Section from '../layout/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Mark from '../ui/Mark.jsx'
import certificates from '../../data/certificates.json'

// Warna diberikan bergiliran sesuai urutan item, jadi data di JSON tidak perlu mengatur warna.
const colors = ['bg-mint',  'bg-sky',  'bg-butter',  'bg-coral',  'bg-violet']

function Certificates() {
  return (
    <Section
      id="sertifikat"
      from="left"
      title={
        <>
          <Mark color="bg-butter">Certificates</Mark>
        </>
      }
    >
      <ul className="space-y-4">
        {certificates.map((cert, index) => (
          <Reveal
            as="li"
            key={cert.title}
            delay={index * 100}
            from={index % 2 === 0 ? 'right' : 'left'}
          >
            <div className="pop pop-press flex flex-wrap items-center justify-between gap-5 rounded-[1.5rem] bg-cream px-6 py-5 sm:px-8">
              <div className="flex items-center gap-4">
                <span
                  className={`pop-sm font-display flex size-12 shrink-0 -rotate-4 items-center justify-center rounded-xl text-sm font-semibold text-ink ${colors[index % colors.length]}`}
                >
                  {cert.year}
                </span>

                <div>
                  <h3 className="font-display text-lg leading-snug font-semibold text-ink sm:text-xl">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-ink-soft">{cert.issuer}</p>
                </div>
              </div>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="pop-sm pop-press font-display rounded-xl bg-cream-2 px-5 py-2 text-sm font-semibold text-ink"
                >
                  Lihat
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

export default Certificates
