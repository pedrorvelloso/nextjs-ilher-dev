export interface Post {
  bannerCredit: string
  bannerAlt: string
  bannerUrl: string
  date: string
  description: string
  language: string
  readTime: string
  title: string
}

export type HomePost = Post & {
  url: string
}
