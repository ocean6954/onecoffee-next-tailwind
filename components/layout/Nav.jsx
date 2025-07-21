import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { HeaderBean } from 'src/lib/iconSvg'

export default function Nav() {
  const [center, setCenter] = useState(0)
  const ref0 = useRef(null)
  const ref1 = useRef(null)
  const elementRefs = [ref0, ref1] // JSXで使うためにここで定義
  const router = useRouter()

  const updateCenter = (index) => {
    const refs = [ref0, ref1]
    const rect = refs[index]?.current?.getBoundingClientRect()
    if (rect) {
      const x = rect.width / 2 + rect.left
      setCenter(x)
    }
  }

  useEffect(() => {
    if (router.pathname === '/') {
      updateCenter(0)
    } else if (router.pathname === '/menu') {
      updateCenter(1)
    }
  }, [router.pathname])

  const handleClick = (index) => {
    updateCenter(index)
  }

  return (
    <nav className="px-4 md:px-8 lg:px-16 py-4 relative">
      <ul className="flex justify-center items-center space-x-8 md:space-x-12">
        {['Home', 'Menu'].map((text, index) => (
          <li
            key={index}
            ref={elementRefs[index]}
            onClick={() => handleClick(index)}
            className="relative z-10 group cursor-pointer"
          >
            <Link
              href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
              className="text-coffee-charcoal font-medium text-2xl md:text-x2l hover:text-coffee-accent duration-300 tracking-wide relative group-hover:scale-105 transform transition-transform block py-2 px-4"
            >
              {text}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coffee-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* 動くコーヒー豆アイコン */}
      <div
        className="absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out transform -translate-x-1/2 drop-shadow-lg pointer-events-none"
        style={{
          left: center - 32,
        }}
      >
        <div className="filter drop-shadow-md">
          <HeaderBean />
        </div>
      </div>
    </nav>
  )
}
