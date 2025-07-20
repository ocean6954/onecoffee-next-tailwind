import styles from 'styles/logo.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'images/new-logo.png'
import store from 'parts/ver1.5.png'
import smallLogo from 'images/logo-sm.jpg'

// export default function Logo() {
//   // return (
//     // <Image
//     //   src={store}
//     //   alt=""
//     //   layout="responsive"
//     //   sizes="(min-width: 1152px) 500px,(min-width: 768px) 100px, 10vw"
//     //   priority
//     //   placeholder="blur"
//     // />
//   // )
// }

export function SmallLogo() {
  return (
    <Image
      src={smallLogo}
      alt=""
      layout="fixed"
      sizes="(min-width: 768px) 100px, 1vw"
      priority
      placeholder="blur"
      className={styles.smallLogo}
    />
  )
}
