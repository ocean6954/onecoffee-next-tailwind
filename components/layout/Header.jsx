import Nav from './nav'

export default function Header() {
  return (
    <header
      className="
      bg-coffee-fire/10 backdrop-blur-sm
      shadow-lg shadow-coffee-charcoal/40
      sticky top-0 z-50
      border-b border-coffee-fire/20
    "
    >
      <Nav />
    </header>
  )
}
