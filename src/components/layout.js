import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import code from '../images/Code.png'
import twitter from '../images/twitter.png'
import github from '../images/Github.png'
import linkedin from '../images/Linkedin.png'
import Header from './header'
import './layout.scss'
import { getRandomInt } from '../utils/utils';
const theme = `theme-${getRandomInt(1, 13)}`
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
          bodyAttributes={{class: theme}}
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
            className="linkedin"
            href="https://linkedin.com/in/lukejoliat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            className="github"
            href="https://github.com/lukejoliat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://twitter.com/lcjfifty"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
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
