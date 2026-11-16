import Section from '../layout/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Footer from '../layout/Footer.jsx'
import Squiggle from '../ui/Squiggle.jsx'
import contacts from '../../data/contacts.json'

// Warna diberikan bergiliran sesuai urutan item, jadi data di JSON tidak perlu mengatur warna.
const colors = ['bg-coral',  'bg-violet',  'bg-sky',  'bg-mint',  'bg-butter']

function Contact() {
  return (
    <Section
      id="kontak"
      from="right"
      title={
        <>
          Let&rsquo;s{' '}
          <span className="relative whitespace-nowrap">
            Talk
            <Squiggle className="text-coral" position="-bottom-2 h-4" />
          </span>
        </>
      }
    >
      <Reveal from="left">
        <p className="mb-8 max-w-xl leading-relaxed text-ink-soft">
          Silakan hubungi lewat salah satu kanal di bawah ini.
        </p>
      </Reveal>

      <ul className="grid gap-4 sm:grid-cols-2">
        {contacts.map((contact, index) => (
          <Reveal
            as="li"
            key={contact.label}
            delay={index * 90}
            from={index % 2 === 0 ? 'left' : 'right'}
          >
            <a
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              className={`pop pop-press flex items-center justify-between gap-4 rounded-[1.5rem] px-7 py-6 ${colors[index % colors.length]}`}
            >
              <span>
                <span className="font-display block text-xl font-semibold text-ink">
                  {contact.label}
                </span>
                <span className="text-sm text-ink/75">{contact.value}</span>
              </span>

              <span className="pop-sm flex size-10 shrink-0 items-center justify-center rounded-full bg-cream text-lg text-ink">
                &rarr;
              </span>
            </a>
          </Reveal>
        ))}
      </ul>

      {/* Footer ikut di dalam bagian ini supaya efek magnet tidak
          punya titik berhenti tersendiri yang separuh kosong. */}
      <Footer />
    </Section>
  )
}

export default Contact
