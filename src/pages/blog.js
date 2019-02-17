import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Blog = ({ data }) => (
  <Layout>
    <h1>Welcome to the blog!</h1>
    {data.allMarkdownRemark.edges.map((post, k) => (
      <div key={k}>
        <Link to={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
        </Link>
      </div>
    ))}
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
