import React from 'react'
import { Link, graphql } from 'gatsby'
import Tags from '../components/tags'

const Blog = ({ data }) => (
  <div style={{ display: 'flex' }}>
    <section className="tags-list">
      <Tags group={data.allMarkdownRemark.group} />
    </section>
    <ul className="blog-list">
      {data.allMarkdownRemark.edges.map((post, k) => (
        <li key={k}>
          <Link to={post.node.frontmatter.path}>
            <h1>{post.node.frontmatter.title}</h1>
            <div>{post.node.frontmatter.subtitle}</div>
          </Link>
          <div style={{ textAlign: 'right' }}>
            <div>{post.node.frontmatter.date}</div>
            <div>
              {post.node.frontmatter.tags &&
                post.node.frontmatter.tags.map((t, i) => (
                  <div key={i} className={`tag ${t}`}>
                    {t}
                  </div>
                ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
)
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(limit: 10) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          frontmatter {
            title
            subtitle
            path
            date
            tags
          }
        }
      }
    }
  }
`

export default Blog
