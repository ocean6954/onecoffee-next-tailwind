import 'src/styles/globals.css'
// import 'src/styles/splide-core.min.css'
import 'src/styles/splide.min.css'
import type { AppProps } from 'next/app'
import Layout from 'src/components/layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
