import { useTrail, animated, to, useSpring } from '@react-spring/web'
import styles from 'styles/trail.module.css'

const config = {
  mass: 2,
  tension: 50,
  friction: 1,
}

export default function UpToDown() {
  const [trails, api] = useTrail(
    20,
    () => ({
      config,
      from: {
        color: '#ffaaee',
      },
      to: { opacity: 1, color: 'green' },
    }),
    [],
  )

  return (
    <div>
      {trails.map((props) => (
        <animated.div style={props}>Hello World</animated.div>
      ))}
    </div>
  )
}

/////////////////////////////////////

export function FadeIn({ children }) {
  const props = useSpring({
    from: { x: -100, y: 0 },
    to: { x: 0, y: 1 },
  })

  return (
    <div className={styles.rightAnime}>
      <animated.div
        style={{
          transform: to(props.x, (value) => `translate3d(${value}%,0,0)`),
          opacity: props.y,
          // transition: '0.5s',
          transitionDuration: '5s',
          animationFillMode: 'forwards',
          display: 'inline-block',
        }}
      >
        {children}
      </animated.div>
    </div>
  )
}
