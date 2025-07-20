import styles from 'styles/announce2.module.css'
import Link from 'next/link'
import Image from 'next/image'
import icon from 'images/icon.png'
import Container from 'components/container'
import { useState } from 'react'
import Modal from 'components/modal'
// import Container from 'src/components/container'

export default function Announce2({
  title,
  // line,
  // isButton = false,
  // link = '#',
}) {
  const [modal, setModal] = useState(false)
  return (
    <>
      <h2 className={styles.band}>{title}</h2>
      <Container>
        <div></div>
      </Container>
    </>
  )
}
