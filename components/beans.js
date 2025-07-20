import styles from 'styles/beans.module.css'
import Image from 'next/image'
import bean1 from 'images/bean1.png'
import bean2 from 'images/bean2.png'
import bean25 from 'images/bean25.png'
import bean3 from 'images/bean3.png'
import bean4 from 'images/bean4.png'

export default function Beans() {
  return (
    <div className={styles.beans}>
      <figure>
        <Image
          src={bean1}
          alt=""
          layout="responsive"
          sizes="(min-width: 768px) 25px,20px"
          placeholder="blur"
          className={styles.bean1}
        />
      </figure>
      <figure>
        <Image
          src={bean2}
          alt=""
          layout="responsive"
          sizes="(min-width: 768px) 25px,20px"
          placeholder="blur"
          className={styles.bean2}
        />
      </figure>
      <figure>
        <Image
          src={bean25}
          alt=""
          layout="responsive"
          sizes="(min-width: 768px) 25px,20px"
          placeholder="blur"
          className={styles.bean25}
        />
      </figure>
      <figure>
        <Image
          src={bean3}
          alt=""
          layout="responsive"
          sizes="(min-width: 768px) 25px,20px"
          placeholder="blur"
          className={styles.bean3}
        />
      </figure>
      <figure>
        <Image
          src={bean4}
          alt=""
          layout="responsive"
          sizes="(min-width: 768px) 25px,20px"
          placeholder="blur"
          className={styles.bean4}
        />
      </figure>
    </div>
  )
}
