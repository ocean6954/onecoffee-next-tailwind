import { useEffect, useRef } from 'react'

export default function FotText({ children }) {
  const ref = useRef()

  useEffect(() => {
    const resizeText = () => {
      const { width } = ref.current.getBoundingClientRect()
    const fontSize = }
  })
}
