import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SvgWithXlink from '../components/Svg'
const IndexPage = ({ data }) => (
  <Layout>
    <section className="container">
      <div>
        <h1 style={{ fontFamily: 'Adamina' }}>Hello, my name is Luke.</h1>
        <p>
          I’m a passionate web developer and technology enthusiast with 4+ years
          of experience developing and designing web sites and applications.
        </p>
        <p>
          I love learning, which makes me right at home in the world of web
          development. Every year, every month even, there is something new to
          learn or utilize for growth and improvement.
        </p>
      </div>
      <SvgWithXlink />
    </section>
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
