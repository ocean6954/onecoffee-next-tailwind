import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
})

// export async function getPostBySlug(slug, limit = 20) {
//   try {
//     const post = await client.get({
//       endpoint: 'coffee-images',
//       queries: { filters: `slug[equals]${slug}` },
//       limit: 20,
//     })
//     return post.contents[0]
//   } catch (err) {
//     console.log('--getPostBySlug--')
//     console.log(err)
//   }
// }

export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'coffees',
      queries: {
        fields: 'eyecatch,title,slug,category,id,content',
        orders: 'createdAt',
        limit: limit,
      },
    })
    // console.log(posts)
    // console.log(posts.category)
    return posts.contents
  } catch (err) {
    console.log('~~ getAllPosts ~~')
    console.log(err)
  }
}

// export async function fetchInstagramData() {
//   const instagramBusinessId = process.env.NEXT_PUBLIC_INSTAGRAM_BUSINESS_ID
//   const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN
//   const instagramAccountName = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT_NAME //取得したいアカウントID名
//   const url = `https://graph.facebook.com/v17.0/${instagramBusinessId}?fields=business_discovery.username(${instagramAccountName}){followers_count,media_count,media.limit(5){caption,media_type,media_url,permalink,timestamp,username,children{media_url,media_type},thumbnail_url}}&access_token=${accessToken}`

//   try {
//     const response = await fetch(url)
//     if (response.ok) {
//       const data = await response.json()
//       console.log(data) // 返り値①
//       console.log(data.business_discovery.media.data) // 返り値②
//       return data
//     } else {
//       console.error('Instagram APIのリクエストでエラーが発生しました。')
//       return null
//     }
//   } catch (error) {
//     console.error(
//       'Instagram APIのレスポンスの解析中にエラーが発生しました:',
//       error,
//     )
//     return null
//   }
// }
