import { User } from "../user"

export type Post = {
  caption: string
  id: string
  date: string
  comments: number
  likes: number
  permalink: string
  user: User
}