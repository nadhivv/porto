import Section from '../layout/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Squiggle from '../ui/Squiggle.jsx'
import timeline from '../../data/education.json'

// Warna diberikan bergiliran sesuai urutan item, jadi data di JSON tidak perlu mengatur warna.
const colors = ['bg-sky',  'bg-butter',  'bg-mint',  'bg-coral',  'bg-violet']

function Education() {
  return (
    <Section
      id="pendidikan"
      from="left"
      title={
        <span className="relative whitespace-nowrap">
          Education
          <Squiggle className="text-sky" position="-bottom-2 h-4" />
        </span>
      }
    >
      <ol className="space-y-5">
        {timeline.map((entry, index) => (
          <Reveal
            as="li"
            key={entry.title}
            delay={index * 120}
            // Ganjil-genap: entri 1 dari kiri, entri 2 dari kanan, dan seterusnya
            from={index % 2 === 0 ? 'left' : 'right'}
          >
            <div className="pop pop-press grid gap-4 rounded-[1.75rem] bg-cream p-6 sm:p-8 lg:grid-cols-[minmax(0,200px)_minmax(0,1fr)] lg:gap-8">
              <div>
                <span
                  className={`pop-sm font-display inline-block rounded-full px-3.5 py-1 text-xs font-semibold text-ink ${colors[index % colors.length]}`}
                >
                  {entry.period}
                </span>
              </div>

              <div>
                <h3 className="font-display text-[clamp(1.35rem,2.4vw,2rem)] leading-tight font-semibold text-ink">
                  {entry.title}
                </h3>

                <p className="font-display mt-1 font-medium text-ink-soft">
                  {entry.org}
                </p>

                <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
                  {entry.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

export default Education
