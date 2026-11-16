import Section from '../layout/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Mark from '../ui/Mark.jsx'
import experience from '../../data/experience.json'

// Warna diberikan bergiliran sesuai urutan item, jadi data di JSON tidak perlu mengatur warna.
const colors = ['bg-coral', 'bg-mint', 'bg-violet', 'bg-butter', 'bg-sky']

// Berbeda dari Education yang berupa kartu lepas, Experience memakai
// garis waktu vertikal: garis putus-putus di kiri dengan titik berwarna
// untuk tiap pengalaman, supaya terasa seperti perjalanan.
function Experience() {
  return (
    <Section
      id="pengalaman"
      from="right"
      title={
        <>
          <Mark color="bg-sky">Experience</Mark>
        </>
      }
    >
      <ol className="relative space-y-6 pl-10 sm:pl-14">
        {/* Garis waktu */}
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-3.5 border-l-[3px] border-dashed border-ink/25 sm:left-5"
        />

        {experience.map((job, index) => {
          const color = colors[index % colors.length]

          return (
            <Reveal
              as="li"
              key={`${job.role}-${job.org}`}
              delay={index * 120}
              from={index % 2 === 0 ? 'right' : 'left'}
              className="relative"
            >
              {/* Titik di garis waktu */}
              <span
                aria-hidden="true"
                className={`pop-sm absolute top-8 -left-10 size-7 rounded-full sm:-left-14 sm:size-10 ${color}`}
              />

              <div className="pop pop-press rounded-[1.75rem] bg-cream p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span
                    className={`pop-sm font-display rounded-full px-3.5 py-1 text-xs font-semibold text-ink ${color}`}
                  >
                    {job.period}
                  </span>
                  {job.type && (
                    <span className="font-display rounded-full bg-cream-2 px-3.5 py-1 text-xs font-semibold text-ink-soft">
                      {job.type}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-[clamp(1.35rem,2.4vw,2rem)] leading-tight font-semibold text-ink">
                  {job.role}
                </h3>

                <p className="font-display mt-1 font-medium text-ink-soft">
                  {job.org}
                </p>

                {job.description && (
                  <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">
                    {job.description}
                  </p>
                )}

                {job.points?.length > 0 && (
                  <ul className="mt-4 max-w-3xl space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 leading-relaxed text-ink-soft"
                      >
                        <span aria-hidden="true" className="text-coral">
                          &#10022;
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}

export default Experience
