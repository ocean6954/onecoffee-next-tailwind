import styles from 'styles/modal.module.css'
import Menu from 'components/menu_test'

export default function ({ active = false, setModal }) {
  const closeModal = () => {
    setModal(false)
  }
  return (
    <div
      className={active ? styles.modalOpen : styles.modalClose}
      onClick={closeModal}
    >
      {active && (
        <style jsx global>{`
          body {
            overflow: hidden;
            width: 100%;
          }
        `}</style>
      )}
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <Menu />
        <button onClick={() => setModal(false)}>閉じる</button>
      </div>
    </div>
  )
}
