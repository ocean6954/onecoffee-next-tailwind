import Nav from './Nav'

export default function Header() {
  return (
    <header
      className="
      bg-coffee-fire/70 backdrop-blur-sm
      shadow-lg shadow-coffee-charcoal/70
      sticky top-0 z-50
      border-b border-coffee-fire/20
      //h-20
    "
    >
      <Nav />
    </header>
  )
}
