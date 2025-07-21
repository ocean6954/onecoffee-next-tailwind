import { useState } from 'react'
// import './YourComponent.css' // スタイルを定義したファイル
import styles from 'styles/lineMove.module.css'

export default function LineMove() {
  const [position, setPosition] = useState(0) // 初期位置

  // 状態遷移やアニメーションが発生する関数
  const moveIcon = () => {
    setPosition(100) // 例えば、アイコンを100px右に移動
  }

  return (
    <div className={styles.lineContainer}>
      <div className={styles.line}></div>
      <div className={styles.icon} style={{ left: position }}></div>
      <button onClick={moveIcon}>Move</button>
    </div>
  )
}
