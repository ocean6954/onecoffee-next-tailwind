import Container from 'src/components/layout/Container'

export default function Footer() {
  return (
    <footer
      className="
      bg-coffee-fire/90 backdrop-blur-sm
      text-white
      py-8
      shadow-inner shadow-coffee-fire/50
    "
    >
      <Container>
        <p
          className="
          text-center text-sm md:text-base
          font-light tracking-wide
        "
        >
          <span className="text-coffee-main">&copy;</span>
          Charcoal Fire Roasted Coffee - oneCoffee
        </p>
      </Container>
    </footer>
  )
}
