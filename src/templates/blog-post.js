import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <h1 className="blog-header">{post.frontmatter.title}</h1>
      <section
        className="body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
