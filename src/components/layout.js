import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import code from '../images/code.png'
import twitter from '../images/twitter.png'
import Header from './header'
import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Adamina"
            rel="stylesheet"
          />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1000,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <div
          style={{ position: 'fixed', bottom: 0, left: 10, maxWidth: '50px' }}
        >
          <img src={code} alt="code" />
        </div>
        <div
          style={{ position: 'fixed', bottom: 0, right: 10, maxWidth: '50px' }}
        >
          <a
            href="https://twitter.com/lcjfifty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
