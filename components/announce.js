import styles from 'styles/announce.module.css'
import Link from 'next/link'
import Image from 'next/image'
import icon from 'images/icon.png'
import Container from 'components/container'
import { useState } from 'react'
import Modal from 'components/modal'

export default function Announce({
  title,
  line,
  isButton = false,
  link = '#',
}) {
  const [modal, setModal] = useState(false)
  return (
    <>
      <div className={styles.left}>
        <p className={styles.text}>{title}</p>
        {isButton ? (
          <div className={styles.balloon}>
            <a onClick={() => setModal(true)}>
              <span>{line}</span>
            </a>
            <Modal active={modal} setModal={setModal} />
          </div>
        ) : (
          <div className={styles.balloon}>
            <a href={link}>
              <span>{line}</span>
            </a>
          </div>
        )}
        <div className={styles.right}>
          <Image
            src={icon}
            alt=""
            layout="fixed"
            width="75"
            height="135"
            placeholder="blur"
          />
        </div>
      </div>
    </>
  )
}
export function Access() {
  return (
    <div className={styles.access}>
      <h2>Access</h2>
      <p>住所 : 函館市港町1-18-37</p>
      <p> 営業日 : 土,日,月 11時〜17時</p>
      <div className={styles.balloon}>
        <span>皆様のご来店お待ちしております</span>
      </div>
      <div className={styles.right}>
        <Image
          src={icon}
          alt=""
          layout="fixed"
          width="75"
          height="135"
          placeholder="blur"
        />
      </div>
    </div>
  )
}
