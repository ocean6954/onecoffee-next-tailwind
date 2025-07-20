import React, { useEffect, useState } from 'react'
import InstagramPosts from 'components/instagramPosts'

// Instagram APIを呼び出す関数
async function fetchInstagramData() {
  const instagramBusinessId = process.env.NEXT_PUBLIC_INSTAGRAM_BUSINESS_ID
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN
  const instagramAccountName = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT_NAME //取得したいアカウントID名
  const url = `https://graph.facebook.com/v17.0/${instagramBusinessId}?fields=business_discovery.username(${instagramAccountName}){followers_count,media_count,media.limit(10){caption,media_type,media_url,permalink,timestamp,username,children{media_url,media_type},thumbnail_url}}&access_token=${accessToken}`

  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      // console.log(data) // 返り値①
      // console.log(data.business_discovery.media.data) // 返り値②
      return data
    } else {
      console.error('Instagram APIのリクエストでエラーが発生しました。')
      return null
    }
  } catch (error) {
    console.error(
      'Instagram APIのレスポンスの解析中にエラーが発生しました:',
      error,
    )
    return null
  }
}

// APIを叩く関数
function InstagramComponent() {
  const [instagramData, setInstagramData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInstagramData()
      setInstagramData(data)
    }

    fetchData()
  }, [])

  return <>{instagramData && <InstagramPosts posts={instagramData} />}</>
}

export default InstagramComponent
