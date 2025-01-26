import { instance } from ".."
import { Post } from "../../types/post"

export async function getPosts() {
  try {
    const response = await instance.get<Post[]>('posts?_expand=user')
    return response.data
  } catch (e) {
    console.error(e)
  }
}