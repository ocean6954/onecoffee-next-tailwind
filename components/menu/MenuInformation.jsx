import Image from 'next/image'
import Link from 'next/link'
import latte from 'images/kirinuki/latte2.png'
import desert from 'images/kirinuki/desert.png'
import mug from 'images/kirinuki/mug.png'

export default function MenuInformation() {
  const menuCategories = [
    {
      title: 'Drink',
      image: latte,
      description: 'こだわりの炭焼コーヒーと厳選ドリンク',
    },
    {
      title: 'Food',
      image: desert,
      description: 'コーヒーに合う手作りスイーツ',
    },
    {
      title: 'Coffee',
      image: mug,
      description: '自家焙煎コーヒー豆の販売',
    },
  ]

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
            Menu
            {/* アンダーライン装飾 */}
            <div
              className="
              absolute -bottom-2 left-1/2 transform -translate-x-1/2
              w-16 md:w-24 h-1
              bg-gradient-to-r from-coffee-accent/50 via-coffee-accent to-coffee-accent/50
              rounded-full
            "
            ></div>
          </h2>
        </div>

        {/* メニューカテゴリ */}
        <div
          className="
          grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12
          mb-12
        "
        >
          {menuCategories.map((category, index) => (
            <div
              key={index}
              className="
              group
              bg-white/30 backdrop-blur-sm
              p-6 md:p-8
              rounded-2xl
              border border-coffee-accent/20
              shadow-xl shadow-coffee-charcoal/10
              transform hover:scale-105 hover:-translate-y-2
              transition-all duration-500
              cursor-pointer
              relative overflow-hidden
            "
            >
              {/* ホバー時の背景効果 */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-br from-coffee-accent/10 to-coffee-charcoal/10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
              ></div>

              <div className="relative z-10">
                {/* カテゴリタイトル */}
                <h3
                  className="
                  text-xl md:text-2xl lg:text-3xl
                  font-bold text-coffee-charcoal
                  text-center mb-4
                  group-hover:text-coffee-accent
                  transition-colors duration-300
                "
                >
                  {category.title}
                </h3>

                {/* 画像 */}
                <div
                  className="
                  relative
                  max-w-32 md:max-w-40 mx-auto mb-4
                  transform group-hover:scale-110
                  transition-transform duration-500
                "
                >
                  {/* 画像の影 */}
                  <div
                    className="
                    absolute -inset-2
                    bg-gradient-to-br from-coffee-accent/20 to-coffee-charcoal/20
                    rounded-full blur-lg
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                  ></div>

                  <div className="relative">
                    <Image
                      src={category.image}
                      alt={category.title}
                      layout="responsive"
                      width={50}
                      placeholder="blur"
                      blurDataURL={category.image.blurDataURL}
                      className="
                        filter drop-shadow-lg
                        group-hover:brightness-110
                        transition-all duration-300
                      "
                    />
                  </div>
                </div>

                {/* 説明文 */}
                <p
                  className="
                  text-coffee-charcoal/80
                  text-sm md:text-base
                  text-center
                  leading-relaxed
                  group-hover:text-coffee-charcoal
                  transition-colors duration-300
                "
                >
                  {category.description}
                </p>
              </div>

              {/* カードの装飾ライン */}
              <div
                className="
                absolute bottom-0 left-0 right-0
                h-1 bg-gradient-to-r from-transparent via-coffee-accent to-transparent
                transform scale-x-0 group-hover:scale-x-100
                transition-transform duration-500
              "
              ></div>
            </div>
          ))}
        </div>

        {/* CTAボタン */}
        <div className="text-center">
          <Link
            href="menu"
            className="
            inline-flex items-center
            bg-gradient-to-r from-coffee-accent to-coffee-accent/80
            hover:from-coffee-accent/90 hover:to-coffee-accent
            text-white font-bold
            text-lg md:text-xl
            px-8 md:px-12 py-4 md:py-5
            rounded-full
            shadow-lg shadow-coffee-accent/30
            hover:shadow-xl hover:shadow-coffee-accent/40
            transform hover:scale-105 hover:-translate-y-1
            transition-all duration-300
            group
            relative overflow-hidden
          "
          >
            {/* ボタンの背景アニメーション */}
            <div
              className="
              absolute inset-0
              bg-gradient-to-r from-coffee-charcoal/20 to-transparent
              transform translate-x-full group-hover:translate-x-0
              transition-transform duration-500
            "
            ></div>

            <span className="relative z-10">メニュー一覧へ</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
