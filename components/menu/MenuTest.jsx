import styles from 'styles/menu.module.css'

export default function Menu() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.left}>
        <p>ワンブレンドハイ</p>
        <p>ハイロースト　キリマンジャロ</p>
        <p>コロンビア　スプレモ</p>
        <p>エチオピア　ゲイシャ</p>
        <p>タンザニア　キリマンジャロ</p>
        <p>グァテマラ　ウエウエテナンゴ</p>
        <p>ブルンジ　レッドブルボン</p>
        <p>マンデリン　ドロサングル</p>
        <p>コスタリカ　ジャガーハニー</p>
        <p>ワンブレンド</p>
        <p>フレンチキリマンジャロ</p>
        <p>ダークワン</p>
        <p>アイスコーヒー</p>
        <p>ラテ(HOT/ICE)</p>
        <p>ヒーコジェリーミルク</p>
      </div>
      <div className={styles.right}>
        <h4>Tea</h4>
        <p>
          アールグレイ<span>・・・¥500</span>
        </p>
        <p>
          レモングラス<span>・・・¥500</span>
        </p>
        <h4>Sweets</h4>
        <p>
          今週のケーキ<span>・・・¥400</span>
        </p>
        <p>
          珈琲プリン<span>・・・¥400</span>
        </p>
        <p>
          ネコチャン珈琲プリンアラモード(珈琲、紅茶付)
          <span>・・・¥1000</span>
        </p>
        <p>
          丸太sweetsプレート(珈琲、紅茶付)<span>・・・¥1200</span>
        </p>
      </div>
    </div>
  )
}
