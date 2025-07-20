import Hero from 'components/hero'
import Container from 'components/container'
import { getAllPosts, getPostBySlug } from 'lib/api'
import Posts from 'components/posts'
import { getPlaiceholder } from 'plaiceholder'
export default function Coffees({ posts }) {
  return (
    <Container>
      <Hero title={' Coffees'} subtitle={'一覧だよ'} />
      <h1>Coffee豆一覧だよ</h1>
      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  for (const post of posts) {
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      posts: posts,
    },
  }
}
