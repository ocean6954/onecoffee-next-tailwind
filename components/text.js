import React, { useState, useEffect } from 'react'
import { useSpring, animated, useTrail } from 'react-spring'

const items = Array(10).fill('chot Inc.')
const config = { mass: 4, tension: 2000, friction: 200 }

export default function FadeInSample() {
  const styles = useSpring({ opacity: 1 })

  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 10,
    height: 50,
    backgroundColor: 'red',
    from: { opacity: 0, x: 20, height: 0 },
  })
  const props = useSpring({
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0.5, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'blue' },
  })

  return (
    <>
      <animated.div style={props}>
        <p>Fade in text</p>
      </animated.div>
      <div className={styles['trails-main']}>
        <div>
          {trail.map(({ x, height, ...rest }, index) => {
            return (
              <animated.div
                key={items[index]}
                className={styles['trails-text']}
                style={{
                  ...rest,
                  transform: x.to((x) => `translate3d(0,${x}px,0)`),
                }}
              >
                <animated.div style={{ height }}>{items[index]}</animated.div>
              </animated.div>
            )
          })}
        </div>
      </div>
    </>
  )
}
