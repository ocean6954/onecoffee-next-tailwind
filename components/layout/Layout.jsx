import Header from './Header'
import Footer from './Footer'

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
