import Hero from 'components/layout/Hero'
import Container from 'components/layout/Container'
//import FadeInSample from '/components/text'
import { FadeIn, UpToDown } from 'components/ui/trail'

export default function About() {
  return (
    <>
      <Container>
        <Hero title={'About'} subtitle={'アバウトです'} />
        {/* <FadeInSample /> */}
        <UpToDown />
        <FadeIn>あいうお</FadeIn>
      </Container>
    </>
  )
}
