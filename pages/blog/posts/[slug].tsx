import { InferGetStaticPropsType, GetStaticPaths } from 'next'
import BlogLayout from '../../../components/Layout'
import Markdown from '../../../components/Markdown'
import { formatJapaneseDateString } from '../../../lib/date'
import { getAllMarkdowns, getMarkdownBySlug } from '../../../lib/markdown'

function Blog({
  meta,
  content
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BlogLayout meta={meta}>
      <Markdown>{content}</Markdown>
    </BlogLayout>
  )
}

export const getStaticProps = async ({
  params
}: {
  params: { slug: string }
}) => {
  const markdown = getMarkdownBySlug(params.slug)

  return {
    props: {
      ...markdown,
      meta: {
        ...markdown.meta,
        date: formatJapaneseDateString(markdown.meta.date as Date)
      }
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const markdowns = getAllMarkdowns()
  return {
    paths: markdowns.map((markdown) => {
      return {
        params: {
          slug: markdown.slug
        }
      }
    }),
    fallback: false
  }
}

export default Blog
