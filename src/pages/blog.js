import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const Blog = ({ data }) => (
  <Layout>
    <h1 className="blog-header">Welcome to the blog!</h1>
    <ul className="blog-list">
      {data.allMarkdownRemark.edges.map((post, k) => (
        <li key={k}>
          <Link to={post.node.frontmatter.path}>
            <h3>{post.node.frontmatter.title}</h3>
            <div>{post.node.frontmatter.subtitle}</div>
          </Link>
          {post.node.frontmatter.date}
        </li>
      ))}
    </ul>
  </Layout>
)
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            path
            date
          }
        }
      }
    }
  }
`

export default Blog
