import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { formatJapaneseDateString } from './date'
import { Markdown, Meta } from './types'

const markdownsDirctory = join(process.cwd(), 'markdowns')

export function getAllMarkdowns() {
  return readdirSync(markdownsDirctory)
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => getMarkdownBySlug(filename))
    .filter((markdown) => !markdown.meta.preview)
    .sort(
      (a, b) =>
        (b.meta.date as Date).getTime() - (a.meta.date as Date).getTime()
    )
    .map((markdown) => ({
      ...markdown,
      meta: {
        ...markdown.meta,
        date: formatJapaneseDateString(markdown.meta.date as Date)
      }
    }))
}

export function getMarkdownBySlug(slug: string): Markdown {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(markdownsDirctory, `${realSlug}.md`)
  const fileContents = readFileSync(fullPath, { encoding: 'utf-8' })
  const { data, content, excerpt } = matter(fileContents, {
    excerpt_separator: '<!-- end -->'
  })
  return {
    slug: realSlug,
    meta: {
      title: data.title,
      date: new Date(data.date),
      preview: data.preview ?? false,
      excerpt
    } as Meta,
    content
  }
}
