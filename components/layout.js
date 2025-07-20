// components/layout.js (Tailwind版)
import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-coffee-main">
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}
