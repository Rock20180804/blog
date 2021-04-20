import Head from 'next/head'
import React from 'react'
import { styled } from '../lib/stitches.config'
import { Meta } from '../lib/types'

const Blog = styled('div', {
  padding: '1em',
  height: '100%',
  width: '80%',
  margin: 'auto',
  when: {
    bp3: {
      width: '820px'
    }
  }
})

const BlogTitle = styled('h1', {
  textAlign: 'center',
  marginBottom: '0.5em'
})

const BlogDate = styled('p', {
  color: 'darkgray',
  font: '1em',
  marginBottom: '1.5em',
  textAlign: 'center'
})

const BlogArticle = styled('article', {
  lineHeight: 2
})

type BlogLayoutProps = {
  children: React.ReactElement
  meta: Meta
}

function BlogLayout({ children, meta }: BlogLayoutProps) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:site" content="@Rock20180804" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <Blog>
        <BlogTitle>{meta.title}</BlogTitle>
        <BlogDate>{meta.date}</BlogDate>
        <BlogArticle>{children}</BlogArticle>
      </Blog>
    </>
  )
}

export default BlogLayout
