import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import OldMacSVG from '../assets/old-mac.svg'
import NewMacSVG from '../assets/new-mac.svg'
const IndexPage = ({ data }) => (
  <Layout>
    <section className="container">
      <div>
        <h1 className="intro-header">Hello, my name is Luke.</h1>
        <p>
          I’m a passionate web developer and technology enthusiast with 4+ years
          of experience developing and designing web sites and applications.
        </p>
        <p>
          I love learning, which makes me right at home in the world of web
          development.
        </p>
      </div>
      <OldMacSVG className="old-mac" />
      <NewMacSVG className="new-mac" />
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
