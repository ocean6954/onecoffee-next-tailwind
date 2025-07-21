import Hero from 'components/layout/Hero'
import Container from 'components/layout/Container'
import { ReactElement } from 'react'
import FadeInSample from '/components/text'
import UpToDown from 'components/ui/Trail'
import { FadeIn } from 'components/ui/Trail'

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
