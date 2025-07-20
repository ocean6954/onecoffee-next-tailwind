/** @jsxImportSource @emotion/react */

import { css, jsx } from '@emotion/react'
import { useState } from 'react'
import Image from 'next/image'
import styles from 'styles/posts.module.css'
import Character from 'components/character'
import ConvertBody from '/components/convert-body'

export default function Posts({ posts }) {
  const [isActive, setIsActive] = useState(false)
  const [color, setColor] = useState()
  const defaultImage = 'public/eyecatch.jpg'

  const [characterImage, setCharacterImage] = useState({ defaultImage })
  const [imageStyle, setImageStyle] = useState()
  const [content, setContent] = useState('')

  const style = css`
    &:hover {
      background-color: ${color};
      opacity: 0.5;
      width: 100vw;
    }
  `

  const modalContent = css`
    z-index: 2;
    max-width: 700px;
    width: 70%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${color};
    animation: bgOpenAnime 0.3s forwards;
    @keyframes bgOpenAnime {
      /* フェードイン */
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.9;
      }
    }
  `

  return (
    <>
      <div className={isActive ? styles.modalOpen : styles.modal_bg}>
        <div
          className={styles.modalWindow}
          onClick={() => setIsActive((prev) => !prev)}
        >
          <div css={modalContent} onClick={(e) => e.stopPropagation()}>
            <Character eyecatch={characterImage} />

            <ConvertBody contentHTML={content} />
          </div>
        </div>
      </div>
      <div className={styles.gridContainer}>
        {posts.map(({ title, eyecatch, slug, category, id, content }) => (
          <figure>
            {/* {console.log(content)} */}
            <div className={styles.fit} id={id}>
              <Image
                src={eyecatch.url}
                alt=""
                layout="fixed"
                width={eyecatch.width}
                height={eyecatch.height}
                placeholder="blur"
                blurDataURL={eyecatch.blurDataURL}
                onClick={() => (
                  setIsActive((prev) => !prev),
                  setColor(slug),
                  setCharacterImage(eyecatch),
                  setContent(content)
                )}
                // className={isActive ? styles.moveImage : styles.fit}
              />
            </div>

            <h2 className={styles.name}>{category.name}</h2>
          </figure>
        ))}
      </div>
    </>
  )
}
