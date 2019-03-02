import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const Blog = ({ data }) => (
  <Layout>
    <h1 className="blog-header">Welcome to the blog!</h1>
    <ul>
      {data.allMarkdownRemark.edges.map((post, k) => (
        <li key={k}>
          <Link to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
    {console.log(data)}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default Blog
