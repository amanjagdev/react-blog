import { createClient } from 'contentful'

const SPACE_ID = process.env.SPACE_ID
const ACCESS_TOKEN = process.env.ACCESS_TOKEN 

export function getPosts() {
  const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  })

  return client.getEntries({ content_type: 'posts' })
}

export function getPostBySlug(slug) {
  const client = createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN })

  return client.getEntries({ content_type: 'posts', 'fields.slug': slug })
}
