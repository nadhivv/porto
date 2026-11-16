import Section from '../layout/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Squiggle from '../ui/Squiggle.jsx'
import projects from '../../data/projects.json'

// Warna diberikan bergiliran sesuai urutan item, jadi data di JSON tidak perlu mengatur warna.
const colors = ['bg-butter',  'bg-sky',  'bg-mint',  'bg-coral',  'bg-violet']

function Projects() {
  return (
    <Section
      id="proyek"
      from="right"
      title={
        <span className="relative whitespace-nowrap">
          Projects
          <Squiggle className="text-violet" position="-bottom-2 h-4" />
        </span>
      }
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 110}
            // Kartu bergantian masuk dari kiri lalu dari kanan
            from={index % 2 === 0 ? 'left' : 'right'}
            // Kartu pertama dibuat melebar dua kolom supaya tata
            // letaknya tidak monoton
            className={index === 0 ? 'h-full lg:col-span-2' : 'h-full'}
          >
            <article
              className={`pop pop-press flex h-full flex-col rounded-[1.75rem] p-7 sm:p-9 ${colors[index % colors.length]}`}
            >
              {/* Gambar opsional dari "image" di projects.json,
                  simpan filenya di public/images/projects/ */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="pop-sm mb-6 aspect-video w-full rounded-2xl object-cover"
                />
              )}

              <h3 className="font-display mb-3 text-[clamp(1.4rem,2.4vw,2.25rem)] leading-tight font-semibold text-ink">
                {project.title}
              </h3>

              <p className="mb-7 max-w-2xl leading-relaxed text-ink/75">
                {project.description}
              </p>

              {/* mt-auto mendorong bagian ini ke dasar kartu,
                  supaya tombol sejajar walau panjang teksnya beda */}
              <ul className="mt-auto mb-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <li
                    key={item}
                    className="pop-sm font-display rounded-full bg-cream px-3 py-1 text-xs font-semibold text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="pop-sm pop-press font-display rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-cream"
                  >
                    Lihat kode
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="pop-sm pop-press font-display rounded-xl bg-cream px-5 py-2.5 text-sm font-semibold text-ink"
                  >
                    Demo
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Projects
