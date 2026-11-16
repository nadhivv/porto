import Section from '../layout/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Mark from '../ui/Mark.jsx'
import skillGroups from '../../data/skills.json'

// Warna diberikan bergiliran sesuai urutan item, jadi data di JSON tidak perlu mengatur warna.
const colors = ['bg-coral',  'bg-violet',  'bg-mint',  'bg-butter',  'bg-sky']

function Skills() {
  return (
    <Section
      id="keahlian"
      from="left"
      title={
        <>
          Skills &amp; <Mark color="bg-coral">Tools</Mark>
        </>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            delay={index * 100}
            from={index % 2 === 0 ? 'left' : 'right'}
            className="h-full"
          >
            <div className="pop pop-press flex h-full flex-col rounded-[1.75rem] bg-cream p-7">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`pop-sm font-display flex size-11 items-center justify-center rounded-xl text-lg font-semibold text-ink ${
                    index % 2 === 0 ? '-rotate-6' : 'rotate-6'
                  } ${colors[index % colors.length]}`}
                >
                  {group.icon}
                </span>

                <h3 className="font-display text-xl font-semibold text-ink">
                  {group.title}
                </h3>
              </div>

              <ul className="mt-auto flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="pop-sm font-display rounded-full bg-cream-2 px-3.5 py-1.5 text-sm font-medium text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Skills
