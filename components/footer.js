import Container from 'components/container'

export default function Footer() {
  return (
    <footer
      className="
      bg-coffee-charcoal
      text-coffee-main
      py-8 mt-16
      shadow-inner shadow-coffee-charcoal/50
    "
    >
      <Container>
        <p
          className="
          text-center text-sm md:text-base
          font-light tracking-wide
        "
        >
          <span className="text-coffee-accent">&copy;</span>
          Charcoal Fire Roasted Coffee - oneCoffee
        </p>
      </Container>
    </footer>
  )
}
