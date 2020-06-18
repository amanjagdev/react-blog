import { createClient } from 'contentful';

const SPACE_ID = process.env.REACT_APP_SPACE_ID
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN 

export function getPosts() {
  const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
  })

  return client.getEntries({ content_type: 'blogPost' })
}

export function getPostBySlug(slug) {
  const client = createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN })

  return client.getEntries({ content_type: 'blogPost', 'fields.slug': slug })
}
