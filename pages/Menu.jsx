import MenuDisplay from 'components/menu/MenuDisplay'
import { getAllPosts, getPostBySlug } from 'lib/api'
import { getPlaiceholder } from 'plaiceholder'
import React, { useState, useEffect, useCallback } from 'react'
import { Drink, Bean, Food } from 'src//lib/iconSvg'
import Container from 'src/components/layout/Container'
import { useRouter } from 'next/router'

export default function Menu({ posts }) {
  const [modalNumber, setModalNumber] = useState(null)
  const router = useRouter()

  const openModal = (modalNumber) => {
    setModalNumber(modalNumber)
  }

  const closeModal = () => {
    setModalNumber(null)
  }

  const handleIconClick = useCallback((modalNumber) => {
    closeModal()
    openModal(modalNumber)
  }, [])

  const triggerFunction = router.query.triggerFunction

  useEffect(() => {
    if (triggerFunction) {
      handleIconClick(triggerFunction)
    }
  }, [handleIconClick, triggerFunction])

  const menuItems = [
    {
      id: 1,
      icon: Drink,
      title: 'Drink',
      description: 'こだわりの炭焼コーヒー',
    },
    {
      id: 2,
      icon: Bean,
      title: 'Coffee Beans',
      description: '自家焙煎コーヒー豆',
    },
    { id: 3, icon: Food, title: 'Food', description: '手作りスイーツ' },
  ]

  return (
    <div
      className="
      min-h-screen 
      bg-gradient-to-br from-coffee-main via-coffee-main/95 to-coffee-accent/10
      py-16 md:py-24
    "
    >
      <Container>
        {/* ページタイトル */}
        <div className="text-center mb-16">
          <h1
            className="
            text-4xl md:text-5xl lg:text-6xl
            font-bold text-coffee-charcoal
            tracking-wide
            drop-shadow-sm
            relative inline-block
          "
          >
            Menu
            {/* アンダーライン装飾 */}
            <div
              className="
              absolute -bottom-3 left-1/2 transform -translate-x-1/2
              w-24 md:w-32 h-1.5
              bg-gradient-to-r from-coffee-accent/50 via-coffee-accent to-coffee-accent/50
              rounded-full
            "
            ></div>
          </h1>
          <p
            className="
            mt-6 text-xl md:text-2xl
            text-coffee-charcoal/70
            font-light
          "
          >
            お好みのカテゴリをお選びください
          </p>
        </div>

        {/* メニューアイコンセレクション */}
        <div
          className="
          grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12
          mb-16
        "
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleIconClick(item.id)}
              className="
                group
                relative
                bg-white/30 backdrop-blur-sm
                p-8 md:p-12
                rounded-3xl
                border border-coffee-accent/20
                shadow-xl shadow-coffee-charcoal/10
                transform hover:scale-105 hover:-translate-y-2
                transition-all duration-500
                focus:outline-none focus:ring-4 focus:ring-coffee-accent/30
                overflow-hidden
              "
            >
              {/* 選択状態の背景 */}
              <div
                className={`
                absolute inset-0
                bg-gradient-to-br from-coffee-accent/20 to-coffee-charcoal/20
                transition-opacity duration-500
                ${
                  modalNumber === item.id
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                }
              `}
              ></div>

              {/* 選択インジケーター */}
              <div
                className={`
                absolute top-4 right-4
                w-6 h-6 rounded-full
                border-2 border-coffee-accent
                transition-all duration-300
                ${
                  modalNumber === item.id
                    ? 'bg-coffee-accent scale-110'
                    : 'bg-transparent group-hover:scale-110'
                }
              `}
              >
                {modalNumber === item.id && (
                  <svg
                    className="w-4 h-4 text-white absolute top-0.5 left-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>

              <div className="relative z-10">
                {/* アイコン */}
                <div
                  className="
                  flex justify-center mb-6
                  transform group-hover:scale-110
                  transition-transform duration-500
                "
                >
                  <div
                    className="
                    w-24 h-24 md:w-32 md:h-32
                    flex items-center justify-center
                    bg-gradient-to-br from-coffee-accent/10 to-coffee-charcoal/10
                    rounded-full
                    shadow-lg
                    group-hover:shadow-xl group-hover:shadow-coffee-accent/20
                    transition-all duration-500
                  "
                  >
                    <item.icon />
                  </div>
                </div>

                {/* タイトル */}
                <h3
                  className="
                  text-2xl md:text-3xl
                  font-bold text-coffee-charcoal
                  mb-3
                  group-hover:text-coffee-accent
                  transition-colors duration-300
                "
                >
                  {item.title}
                </h3>

                {/* 説明 */}
                <p
                  className="
                  text-coffee-charcoal/70
                  text-base md:text-lg
                  group-hover:text-coffee-charcoal
                  transition-colors duration-300
                "
                >
                  {item.description}
                </p>
              </div>

              {/* 底辺の装飾ライン */}
              <div
                className={`
                absolute bottom-0 left-0 right-0
                h-1 bg-gradient-to-r from-transparent via-coffee-accent to-transparent
                transform transition-transform duration-500
                ${
                  modalNumber === item.id
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }
              `}
              ></div>
            </button>
          ))}
        </div>

        {/* メニュー表示エリア */}
        {modalNumber !== null && (
          <div
            className="
            bg-white/20 backdrop-blur-sm
            rounded-3xl
            border border-coffee-accent/30
            shadow-2xl shadow-coffee-charcoal/20
            overflow-hidden
            animate-in fade-in duration-500
          "
          >
            {modalNumber === 1 && (
              <MenuDisplay modalNumber={modalNumber} onClose={closeModal} />
            )}
            {modalNumber === 2 && (
              <MenuDisplay
                modalNumber={modalNumber}
                posts={posts}
                onClose={closeModal}
              />
            )}
            {modalNumber === 3 && (
              <MenuDisplay modalNumber={modalNumber} onClose={closeModal} />
            )}
          </div>
        )}
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  for (const post of posts) {
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      posts: posts,
    },
  }
}
