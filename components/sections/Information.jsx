import Image from 'next/image'
import store from 'images/store.jpg'
import { MugFill } from 'src/lib/iconSvg'

export default function Information() {
  const infoData = [
    { name: '住所', description: '北海道函館市港町<br />1-18-37 ' },
    { name: '営業時間', description: '土日月 11:00~17:00 ' },
    { name: '座席', description: '店内5席' },
  ]

  return (
    <section
      className="
      py-16 md:py-24
      relative
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
            Information
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
        </div>

        <div
          className="
          grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16
          items-start
        "
        >
          {/* 店舗情報リスト */}
          <div
            className="
            bg-white/40 backdrop-blur-sm
            p-8 md:p-10
            rounded-2xl
            border border-coffee-accent/20
            shadow-xl shadow-coffee-charcoal/10
            transform hover:scale-105 transition-all duration-300
          "
          >
            <ul className="space-y-6">
              {infoData.map((data, index) => (
                <li
                  key={index}
                  className="
                  flex flex-col sm:flex-row sm:items-start
                  p-4 rounded-lg
                  bg-gradient-to-r from-coffee-main/50 to-transparent
                  border-l-4 border-coffee-accent
                  transition-all duration-300
                  hover:shadow-lg hover:bg-coffee-main/70
                "
                >
                  <p
                    className="
                    text-coffee-charcoal font-bold text-lg md:text-xl
                    mb-2 sm:mb-0 sm:mr-4
                    min-w-fit
                  "
                  >
                    {data.name}
                  </p>
                  <p
                    dangerouslySetInnerHTML={{ __html: data.description }}
                    className="
                      text-coffee-charcoal/80 text-base md:text-lg
                      leading-relaxed
                    "
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* 店舗画像セクション */}
          <div
            className="
            space-y-6
          "
          >
            {/* メイン画像 */}
            <div
              className="
              relative
              transform hover:scale-105 transition-transform duration-500
            "
            >
              {/* 炭火のような影 */}
              <div
                className="
                absolute -inset-4
                bg-gradient-to-br from-coffee-accent/30 to-coffee-charcoal/30
                rounded-2xl blur-xl
                transform rotate-3
              "
              ></div>

              <div
                className="
                relative
                bg-white/20 backdrop-blur-sm
                p-4 rounded-2xl
                border border-coffee-accent/30
                shadow-2xl shadow-coffee-charcoal/20
                overflow-hidden
              "
              >
                <Image
                  src={store}
                  alt="店舗外観"
                  placeholder="blur"
                  blurDataURL={store.blurDataURL}
                  className="
                    rounded-lg
                    filter brightness-105 contrast-105
                  "
                />

                {/* マグカップアイコンオーバーレイ */}
                <div
                  className="
                  absolute top-4 right-4
                  w-12 h-12 md:w-16 md:h-16
                  bg-coffee-accent/80 backdrop-blur-sm
                  rounded-full
                  flex items-center justify-center
                  shadow-lg
                  transform hover:scale-110 transition-transform duration-300
                "
                >
                  <div className="w-8 h-8 md:w-10 md:h-10">
                    <MugFill />
                  </div>
                </div>
              </div>
            </div>

            {/* 支払い方法 */}
            <div
              className="
              bg-coffee-accent/10 backdrop-blur-sm
              p-6 rounded-xl
              border border-coffee-accent/30
              text-center
              transform hover:scale-105 transition-all duration-300
            "
            >
              <p
                className="
                text-coffee-charcoal font-bold text-lg md:text-xl
                mb-3
              "
              >
                支払い方法
              </p>
              <p
                className="
                text-coffee-charcoal/80 text-base md:text-lg
                font-medium
              "
              >
                PayPay / 楽天Pay / 現金
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
