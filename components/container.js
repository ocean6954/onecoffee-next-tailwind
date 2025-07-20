export default function Container({ children, large = false }) {
  return (
    <div
      className={`
      mx-auto px-4 md:px-8 lg:px-16
      ${large ? 'max-w-7xl' : 'max-w-6xl'}
    `}
    >
      {children}
    </div>
  )
}
