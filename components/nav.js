import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { HeaderBean } from './iconSVG'

export default function Nav() {
  const [center, setCenter] = useState(0)
  const elementRefs = Array.from({ length: 2 }, () => useRef())
  const router = useRouter()

  const updateCenter = (index) => {
    const clickedX = elementRefs[index].current.getBoundingClientRect()
    const x = clickedX.width / 2 + clickedX.left
    setCenter(x)
  }

  useEffect(() => {
    // ページ読み込み時に現在のページに応じてアイコンを配置
    if (router.pathname === '/') {
      updateCenter(0) // Home
    } else if (router.pathname === '/menu') {
      updateCenter(1) // Menu
    }
  }, [router.pathname])

  const handleClick = (index) => {
    updateCenter(index)
  }

  return (
    <nav
      className="
      bg-gradient-to-r from-coffee-main via-coffee-main to-coffee-accent/10
      px-4 md:px-8 lg:px-16 py-4
      backdrop-blur-sm
      relative
    "
    >
      <ul
        className="
        flex justify-center items-center
        space-x-8 md:space-x-12
      "
      >
        {['Home', 'Menu'].map((text, index) => (
          <li
            key={index}
            ref={elementRefs[index]}
            onClick={() => handleClick(index)}
            className="
              relative z-10
              group cursor-pointer
            "
          >
            <Link
              href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
              className="
                text-coffee-charcoal font-medium text-lg md:text-xl
                hover:text-coffee-accent transition-colors duration-300
                tracking-wide
                relative
                group-hover:scale-105 transform transition-transform duration-200
                block py-2 px-4
              "
            >
              {text}
              <span
                className="
                absolute bottom-0 left-0 w-0 h-0.5 
                bg-coffee-accent
                group-hover:w-full transition-all duration-300
              "
              ></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* 動くコーヒー豆アイコン */}
      <div
        className="
          absolute top-1/2 -translate-y-1/2
          transition-all duration-500 ease-in-out
          transform -translate-x-1/2
          drop-shadow-lg
          pointer-events-none
        "
        style={{
          left: center - 30, // nav要素の左端からの相対位置に調整
        }}
      >
        <div
          className="
          animate-pulse
          filter drop-shadow-md
        "
        >
          <HeaderBean />
        </div>
      </div>
    </nav>
  )
}
