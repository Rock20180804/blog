export type Meta = {
  title: string
  date: string | Date
  description?: string
  excerpt?: string
  preview?: boolean
}

export type Markdown = {
  slug: string
  meta: Meta
  content: string
}
