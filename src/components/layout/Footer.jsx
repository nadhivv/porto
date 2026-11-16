import profile from '../../data/profile.json'

function Footer() {
  return (
    <footer className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t-[3px] border-dashed border-ink/25 pt-7 text-sm font-medium text-ink-soft">
      <p>&copy; {new Date().getFullYear()} {profile.name}</p>
      <p>Dibuat dengan React &amp; Motion</p>
    </footer>
  )
}

export default Footer
