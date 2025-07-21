import React, { Fragment } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'

const InstagramPosts = ({ posts }) => {
  return (
    <section
      className="
      py-16 md:py-24
      relative overflow-hidden
    "
    >
      <div
        className="
        relative z-10
        max-w-6xl mx-auto px-4 md:px-8 lg:px-16
        mb-6
      "
      >
        {/* セクションタイトル */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="
            text-3xl md:text-4xl lg:text-5xl
            font-bold text-coffee-charcoal
            tracking-wide
            drop-shadow-sm
            relative inline-block
          "
          >
            Instagram
            {/* アンダーライン装飾 */}
            <div
              className="
              absolute -bottom-2 left-1/2 transform -translate-x-1/2
              w-24 md:w-32 h-1
              bg-gradient-to-r from-coffee-accent/50 via-coffee-accent to-coffee-accent/50
              rounded-full
            "
            ></div>
          </h2>
          <p
            className="
            mt-4 text-coffee-charcoal/70
            text-lg md:text-xl
          "
          >
            日々のコーヒーライフをご紹介
          </p>
        </div>

        {/* Instagram投稿グリッド */}
        <div
          className="
          grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          gap-4 md:gap-6
        "
        >
          {posts.business_discovery.media.data.map((media, index) => (
            <Fragment key={media.id}>
              {/* 動画投稿 */}
              {media.media_type === 'VIDEO' && (
                <div
                  className="
                  group
                  aspect-square
                  relative overflow-hidden
                  rounded-xl md:rounded-2xl
                  bg-white/20 backdrop-blur-sm
                  border border-coffee-accent/20
                  shadow-lg shadow-coffee-charcoal/10
                  transform hover:scale-105 hover:-translate-y-1
                  transition-all duration-500
                  cursor-pointer
                "
                >
                  {/* ビデオアイコンオーバーレイ */}
                  <div
                    className="
                    absolute inset-0 z-10
                    bg-coffee-charcoal/30 backdrop-blur-[1px]
                    flex items-center justify-center
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                  >
                    <div
                      className="
                      w-12 h-12 md:w-16 md:h-16
                      bg-white/90 backdrop-blur-sm
                      rounded-full
                      flex items-center justify-center
                      shadow-lg
                      transform group-hover:scale-110
                      transition-transform duration-300
                    "
                    >
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-coffee-charcoal ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>

                  <Image
                    src={media.thumbnail_url}
                    alt="Instagram動画投稿"
                    fill
                    className="
                      object-cover
                      group-hover:brightness-110 group-hover:contrast-105
                      transition-all duration-500
                    "
                  />

                  {/* 炭火のような影 */}
                  <div
                    className="
                    absolute -inset-2
                    bg-gradient-to-br from-coffee-accent/20 to-coffee-charcoal/20
                    rounded-xl blur-lg
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    -z-10
                  "
                  ></div>
                </div>
              )}

              {/* 画像投稿 */}
              {media.media_type === 'IMAGE' && (
                <div
                  className="
                  group
                  aspect-square
                  relative overflow-hidden
                  rounded-xl md:rounded-2xl
                  bg-white/20 backdrop-blur-sm
                  border border-coffee-accent/20
                  shadow-lg shadow-coffee-charcoal/10
                  transform hover:scale-105 hover:-translate-y-1
                  transition-all duration-500
                  cursor-pointer
                "
                >
                  <Image
                    src={media.media_url}
                    alt="Instagram画像投稿"
                    fill
                    className="
                      object-cover
                      group-hover:brightness-110 group-hover:contrast-105
                      transition-all duration-500
                    "
                  />

                  {/* ホバー時のオーバーレイ */}
                  <div
                    className="
                    absolute inset-0
                    bg-gradient-to-t from-coffee-charcoal/50 via-transparent to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                  ></div>

                  {/* 炭火のような影 */}
                  <div
                    className="
                    absolute -inset-2
                    bg-gradient-to-br from-coffee-accent/20 to-coffee-charcoal/20
                    rounded-xl blur-lg
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    -z-10
                  "
                  ></div>
                </div>
              )}

              {/* カルーセル投稿 */}
              {media.media_type === 'CAROUSEL_ALBUM' && (
                <div
                  className="
                  group
                  aspect-square
                  relative overflow-hidden
                  rounded-xl md:rounded-2xl
                  bg-white/20 backdrop-blur-sm
                  border border-coffee-accent/20
                  shadow-lg shadow-coffee-charcoal/10
                  transform hover:scale-105 hover:-translate-y-1
                  transition-all duration-500
                  cursor-pointer
                "
                >
                  {/* カルーセルインジケーター */}
                  <div
                    className="
                    absolute top-2 right-2 z-10
                    bg-coffee-charcoal/70 backdrop-blur-sm
                    text-white text-xs
                    px-2 py-1 rounded-full
                  "
                  >
                    1/{media.children.data.length}
                  </div>

                  <Splide
                    aria-label="Instagram投稿カルーセル"
                    options={{
                      type: 'loop',
                      autoplay: true,
                      interval: 3000,
                      pauseOnHover: true,
                      arrows: false,
                      pagination: false,
                    }}
                    className="h-full"
                  >
                    {media.children.data.map((child) => (
                      <SplideSlide key={child.id} className="h-full">
                        <Image
                          src={child.media_url}
                          alt="Instagram投稿"
                          fill
                          className="
                            object-cover
                            group-hover:brightness-110 group-hover:contrast-105
                            transition-all duration-500
                          "
                        />
                      </SplideSlide>
                    ))}
                  </Splide>

                  {/* ホバー時のオーバーレイ */}
                  <div
                    className="
                    absolute inset-0
                    bg-gradient-to-t from-coffee-charcoal/50 via-transparent to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                  ></div>

                  {/* 炭火のような影 */}
                  <div
                    className="
                    absolute -inset-2
                    bg-gradient-to-br from-coffee-accent/20 to-coffee-charcoal/20
                    rounded-xl blur-lg
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    -z-10
                  "
                  ></div>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Instagram リンク */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/onecoffee_hakodate"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center
              bg-gradient-to-r from-pink-500 to-purple-600
              hover:from-pink-600 hover:to-purple-700
              text-white font-bold
              text-lg md:text-xl
              px-8 md:px-12 py-4 md:py-5
              rounded-full
              shadow-lg shadow-pink-500/30
              hover:shadow-xl hover:shadow-pink-500/40
              transform hover:scale-105 hover:-translate-y-1
              transition-all duration-300
              group
            "
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Instagram で見る</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstagramPosts
