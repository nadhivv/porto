import Reveal from '../ui/Reveal.jsx'

// Pembungkus yang dipakai ulang oleh semua bagian.
//
// `title` berupa JSX, bukan teks biasa, supaya tiap bagian bisa
// menyorot katanya sendiri:
//   <Section title={<>About <Mark color="bg-mint">Me</Mark></>}>
//
// Judul ditaruh di ATAS isi, memakai lebar penuh. Dulu judulnya
// berupa pil kecil di kolom kiri, tapi itu memakan lebar yang
// sebenarnya lebih berguna untuk isinya.
//
// Tingginya mengikuti isi, TIDAK dipaksa setinggi layar.
function Section({ id, title, from = 'left', children }) {
  return (
    <section id={id} className="py-24 lg:py-32">
      <Reveal from={from}>
        <h2 className="font-display mb-12 text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.15] font-semibold text-ink lg:mb-16">
          {title}
        </h2>
      </Reveal>

      {children}
    </section>
  )
}

export default Section
