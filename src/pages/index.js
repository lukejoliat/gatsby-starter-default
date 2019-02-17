import React from 'react'
import { Link, graphql } from 'gatsby'
import code from '../images/code.png'
import twitter from '../images/twitter.png'
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = ({ data }) => (
  <Layout>
    <section className="container">
      <div>
        <h1 style={{ fontFamily: 'Adamina' }}>Hello, my name is Luke</h1>
        <p>
          I’m a passionate web developer and technology enthusiast with 4+ years
          of experience developing and designing web sites and applications.
        </p>
        <p>
          I love learning, which makes me right at home in the world of web and
          software development. Every year, every month even, there is something
          new to learn or utilize for growth and improvement.
        </p>
      </div>
      <Image />
    </section>
    <Link to="/page-2/">Go to page 2</Link>
    {data.allMarkdownRemark.edges.map((post, k) => (
      <div key={k}>
        <Link to={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
        </Link>
      </div>
    ))}
    <div style={{ position: 'fixed', bottom: 0, left: 10, maxWidth: '50px' }}>
      <img src={code} />
    </div>
    <div style={{ position: 'fixed', bottom: 0, right: 10, maxWidth: '50px' }}>
      <a href="https://twitter.com/lcjfifty" target="_blank">
        <img src={twitter} />
      </a>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
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

export default IndexPage
