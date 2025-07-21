import Hero from 'components/layout/Hero'
import Container from 'components/layout/Container'
import Posts from 'components/sections/Posts'

export default function Coffees({ posts }) {
  return (
    <Container>
      <Hero title={' Coffees'} subtitle={'一覧だよ'} />
      <h1>Coffee豆一覧だよ</h1>
      <Posts posts={posts} />
    </Container>
  )
}
