import Head from 'next/head'
import { getAllMarkdowns } from '../../lib/markdown'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import {
  Summary,
  SummaryCard,
  SummaryContent,
  SummaryDate,
  SummaryReadMore,
  SummaryTitle
} from '../../components/Summary'
import Markdown from '../../components/Markdown'

type Meta = {
  title: string
  date: string
  slug: string
  excerpt: string
}

function Home({ metas }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>日記帳</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Summary>
          {metas.map((meta, i) => (
            <SummaryCard key={i}>
              <Link href={`/blog/posts/${meta.slug}`}>
                <SummaryTitle>{meta.title}</SummaryTitle>
              </Link>
              <SummaryDate>{meta.date}</SummaryDate>
              <SummaryContent>
                <Markdown>{meta.excerpt}</Markdown>
              </SummaryContent>
              <Link href={`/blog/posts/${meta.slug}`}>
                <SummaryReadMore>続きを読む →</SummaryReadMore>
              </Link>
            </SummaryCard>
          ))}
        </Summary>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const metas: Meta[] = await Promise.all(
    getAllMarkdowns().map(async ({ meta, slug }) => ({
      title: meta.title,
      date: meta.date as string,
      excerpt: meta.excerpt ?? '',
      slug
    }))
  )

  return {
    props: {
      metas
    }
  }
}

export default Home
