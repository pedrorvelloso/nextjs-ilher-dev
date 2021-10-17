export interface WithChildren {
  children: React.ReactNode | React.ReactNode[]
}

export interface MetaTags {
  twitter?: {
    handle: string
  }
  siteName?: string
  description?: string
}
