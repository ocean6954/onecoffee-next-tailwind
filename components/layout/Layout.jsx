import Header from 'src/components/layout/header'
import Footer from 'components/layout/footer'

export default function Layout({ children }) {
  return (
    <div
      className="
      min-h-screen 
    "
    >
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}
