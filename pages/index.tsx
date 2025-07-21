import Head from 'next/head'
import { Inter } from '@next/font/google'
import Container from 'src/components/layout/Container'
import Hero from 'src/components/layout/Hero'
import Review from 'src/components/sections/review'
import Information from 'components/sections/information'
import MenuInformation from 'src/components/menu/MenuInformation'
import InstagramComponent from 'src/components/instagram/Instagram'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>1珈琲 - 炭焼コーヒーの香り</title>
        <meta
          name="description"
          content="函館の炭焼コーヒー専門店。自家焙煎による香ばしく体に優しいコーヒーをお楽しみください。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="
        min-h-screen
        bg-gradient-to-b from-coffee-fire/60 via-coffee-main to-coffee-charcoal/20

      "
      >
        <Hero />
        <Review />
        <MenuInformation />
        <Container>
          <Information />
          <InstagramComponent />
        </Container>
      </div>
    </>
  )
}
