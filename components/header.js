import Nav from 'components/nav'

export default function Header() {
  return (
    <header
      className="
      bg-coffee-main
      shadow-lg shadow-coffee-charcoal/20
      sticky top-0 z-50
      border-b border-coffee-accent/30
    "
    >
      <Nav />
    </header>
  )
}
