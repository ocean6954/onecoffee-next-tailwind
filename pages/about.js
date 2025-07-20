import Hero from 'components/hero'
import Container from 'components/container'
import { ReactElement } from 'react'
import FadeInSample from '/components/text'
import UpToDown from 'components/trail'
import { FadeIn } from 'components/trail'

export default function () {
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
