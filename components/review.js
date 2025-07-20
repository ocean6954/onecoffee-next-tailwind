// import Image from 'next/image'
// import latte from 'images/kirinuki/latte2.png'
// import Link from 'next/link'
// import { MdChevronRight } from 'react-icons/md'

// export default function Review() {
//   return (
//     <section
//       className="
//       py-16 md:py-24
//       bg-gradient-to-b from-coffee-main/50 to-coffee-main
//       relative overflow-hidden
//     "
//     >
//       {/* 背景の炭火をイメージした装飾 */}
//       <div
//         className="
//         absolute inset-0
//         bg-gradient-to-br from-coffee-accent/5 via-transparent to-coffee-charcoal/5
//       "
//       ></div>

//       <div
//         className="
//         relative z-10
//         max-w-6xl mx-auto px-4 md:px-8 lg:px-16
//       "
//       >
//         {/* セクションタイトル */}
//         <div className="text-center mb-12 md:mb-16">
//           <h2
//             className="
//             text-3xl md:text-4xl lg:text-5xl
//             font-bold text-coffee-charcoal
//             tracking-wide
//             drop-shadow-sm
//             relative inline-block
//           "
//           >
//             コーヒーのこだわり
//             {/* アンダーライン装飾
//             <div
//               className="
//               absolute -bottom-2 left-1/2 transform -translate-x-1/2
//               w-24 md:w-32 h-1
//               bg-gradient-to-r from-coffee-accent/50 via-coffee-accent to-coffee-accent/50
//               rounded-full
//             "
//             ></div> */}
//           </h2>
//         </div>

//         {/* メインコンテンツ */}
//         <div
//           className="
//           grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16
//           items-center
//         "
//         >
//           {/* 画像セクション */}
//           <div
//             className="
//             flex justify-center lg:justify-start
//             order-2 lg:order-1
//           "
//           >
//             <div
//               className="
//               relative
//               max-w-sm md:max-w-md
//               transform hover:scale-105 transition-transform duration-500
//             "
//             >
//               {/* 影の効果で炭火の雰囲気 */}
//               <div
//                 className="
//                 absolute -inset-4
//                 bg-gradient-to-br from-coffee-accent/20 to-coffee-charcoal/20
//                 rounded-full blur-xl
//                 transform rotate-6
//               "
//               ></div>

//               <div
//                 className="
//                 relative
//                 bg-white/30 backdrop-blur-sm
//                 p-6 rounded-2xl
//                 border border-coffee-accent/30
//                 shadow-2xl shadow-coffee-charcoal/20
//               "
//               >
//                 <Image
//                   src={latte}
//                   alt="こだわりのコーヒー"
//                   layout="responsive"
//                   width={50}
//                   placeholder="blur"
//                   blurDataURL={latte.blurDataURL}
//                   className="
//                     rounded-lg
//                     filter drop-shadow-lg
//                   "
//                 />
//               </div>
//             </div>
//           </div>

//           {/* テキストセクション */}
//           <div
//             className="
//             text-center lg:text-left
//             order-1 lg:order-2
//             space-y-6
//           "
//           >
//             <p
//               className="
//               text-lg md:text-xl lg:text-2xl
//               text-coffee-charcoal
//               leading-relaxed
//               font-light
//             "
//             >
//               こだわりの『
//               <span
//                 className="
//                 font-bold text-coffee-accent
//                 relative
//                 before:absolute before:-inset-1 before:bg-coffee-accent/10 before:rounded
//               "
//               >
//                 炭焼
//               </span>
//               』珈琲を <br />
//               自家焙煎し、炭焼特有の香ばしさや
//               <br />
//               新鮮で美味しく体に優しい珈琲を
//               <br />
//               提供しています
//             </p>

//             {/* CTAボタン */}
//             <div className="pt-4">
//               <Link
//                 href="coffee/menu"
//                 className="
//                   inline-flex items-center
//                   text-coffee-charcoal hover:text-coffee-accent
//                   text-lg md:text-xl font-medium
//                   transition-all duration-300
//                   group
//                   relative
//                 "
//               >
//                 <span
//                   className="
//                   border-b-2 border-coffee-accent/30
//                   group-hover:border-coffee-accent
//                   transition-colors duration-300
//                   pb-1
//                 "
//                 >
//                   and more
//                 </span>
//                 <MdChevronRight
//                   className="
//                   ml-2 text-2xl
//                   transform group-hover:translate-x-1
//                   transition-transform duration-300
//                 "
//                 />

//                 {/* ホバー時の背景効果 */}
//                 <div
//                   className="
//                   absolute -inset-2 -z-10
//                   bg-coffee-accent/5 rounded-lg
//                   scale-0 group-hover:scale-100
//                   transition-transform duration-300
//                 "
//                 ></div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import Image from 'next/image'
import latte from 'images/kirinuki/latte2.png'
import Link from 'next/link'
import { MdChevronRight } from 'react-icons/md'

export default function Review() {
  return (
    <section
      className="
      py-16 md:py-24
      bg-gradient-to-b from-coffee-main/80 via-coffee-fire/5 to-coffee-charcoal/5
      relative overflow-hidden
    "
    >
      {/* 背景の炭火をイメージした装飾 */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-br from-coffee-fire/8 via-transparent to-coffee-charcoal/8
        transform rotate-1
      "
      ></div>

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
            コーヒーのこだわり
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

        {/* メインコンテンツ */}
        <div
          className="
          grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16
          items-center
        "
        >
          {/* 画像セクション */}
          <div
            className="
            flex justify-center lg:justify-start
            order-2 lg:order-1
          "
          >
            <div
              className="
              relative
              max-w-sm md:max-w-md
              transform hover:scale-105 transition-transform duration-500
            "
            >
              {/* 影の効果で炭火の雰囲気 */}
              <div
                className="
                absolute -inset-4
                bg-gradient-to-br from-coffee-accent/20 to-coffee-charcoal/20
                rounded-full blur-xl
                transform rotate-6
              "
              ></div>

              <div
                className="
                relative
                bg-white/30 backdrop-blur-sm
                p-6 rounded-2xl
                border border-coffee-accent/30
                shadow-2xl shadow-coffee-charcoal/20
              "
              >
                <Image
                  src={latte}
                  alt="こだわりのコーヒー"
                  layout="responsive"
                  width={50}
                  placeholder="blur"
                  blurDataURL={latte.blurDataURL}
                  className="
                    rounded-lg
                    filter drop-shadow-lg
                  "
                />
              </div>
            </div>
          </div>

          {/* テキストセクション */}
          <div
            className="
            text-center lg:text-left
            order-1 lg:order-2
            space-y-6
          "
          >
            <p
              className="
              text-lg md:text-xl lg:text-2xl
              text-coffee-charcoal
              leading-relaxed
              font-light
            "
            >
              こだわりの『
              <span
                className="
                font-bold text-coffee-accent
                relative
                before:absolute before:-inset-1 before:bg-coffee-accent/10 before:rounded
              "
              >
                炭焼
              </span>
              』珈琲を <br />
              自家焙煎し、炭焼特有の香ばしさや
              <br />
              新鮮で美味しく体に優しい珈琲を
              <br />
              提供しています
            </p>

            {/* CTAボタン */}
            <div className="pt-4">
              <Link
                href="coffee/menu"
                className="
                  inline-flex items-center
                  text-coffee-charcoal hover:text-coffee-accent
                  text-lg md:text-xl font-medium
                  transition-all duration-300
                  group
                  relative
                "
              >
                <span
                  className="
                  border-b-2 border-coffee-accent/30 
                  group-hover:border-coffee-accent
                  transition-colors duration-300
                  pb-1
                "
                >
                  and more
                </span>
                <MdChevronRight
                  className="
                  ml-2 text-2xl
                  transform group-hover:translate-x-1
                  transition-transform duration-300
                "
                />

                {/* ホバー時の背景効果 */}
                <div
                  className="
                  absolute -inset-2 -z-10
                  bg-coffee-accent/5 rounded-lg
                  scale-0 group-hover:scale-100
                  transition-transform duration-300
                "
                ></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
