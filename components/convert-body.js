import parse from 'html-react-parser'
import styles from 'styles/convert-body.module.css'
import { FadeIn } from 'components/trail.js'

export default function ConvertBody({ contentHTML }) {
  const contentReact = parse(contentHTML)
  return (
    <>
      <div className={styles.text}>{contentReact}</div>
    </>
  )
}
