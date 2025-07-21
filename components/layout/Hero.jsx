import Image from 'next/image'
import eyecatch from 'parts/logo.png'
import store from 'parts/ver1.5.png'

export default function Hero() {
  return (
    <section
      className="
      relative
      py-16 md:py-24 lg:py-32
      overflow-hidden
    "
    >
      <div
        className="
        relative z-10
        max-w-6xl mx-auto px-4 md:px-8 lg:px-16
        grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16
        items-center
      "
      >
        {/* ロゴセクション */}
        <div
          className="
          text-center lg:text-left
          order-2 lg:order-1
        "
        >
          <div
            className="
            max-w-md mx-auto lg:mx-0
            transform hover:scale-105 transition-transform duration-300
            drop-shadow-2xl
          "
          >
            <Image
              src={eyecatch}
              alt="One Coffee Logo"
              width={506} // 元画像の幅を指定（例）
              height={408} // 元画像の高さを指定（例）
              sizes="(min-width: 1024px) 50vw, 80vw"
              priority
              placeholder="blur"
              className="filter drop-shadow-lg"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          {/* キャッチコピー */}
          <div
            className="
            mt-8 lg:mt-12
            space-y-4
            text-center
          "
          >
            <h1
              className="
              text-2xl md:text-3xl lg:text-4xl
              font-bold text-coffee-charcoal
              tracking-wide
              drop-shadow-sm
            "
            >
              炭焼コーヒーの香り
            </h1>
            <p
              className="
              text-lg md:text-xl
              text-coffee-charcoal/80
              font-light leading-relaxed
            "
            >
              自家焙煎による
              <br className="md:hidden" />
              こだわりの一杯
            </p>
          </div>
        </div>

        {/* バージョンロゴセクション */}
        <div
          className="
          order-1 lg:order-2
          flex justify-center lg:justify-end
        "
        >
          <div
            className="
            max-w-sm lg:max-w-md
            transform hover:scale-105 transition-transform duration-300
            filter drop-shadow-xl
          "
          >
            <div
              className="
              bg-white/20 backdrop-blur-sm
              p-6 rounded-2xl
              border border-coffee-accent/30
              shadow-lg shadow-coffee-charcoal/10
            "
            >
              <Image
                src={store}
                alt="Store Version"
                width={484} // 元画像の幅を指定（例）
                height={463} // 元画像の高さを指定（例）
                sizes="(min-width: 1024px) 40vw, 60vw"
                priority
                placeholder="blur"
                className="
                  rounded-lg
                "
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
