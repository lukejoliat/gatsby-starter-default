import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
        display: 'flex',
      }}
    >
      <h1 style={{ margin: 0, flex: 1 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul className="nav-right">
        <li>ABOUT ME</li>
        <li>
          <Link to="/blog/">BLOG</Link>
        </li>
        <li>CONTACT</li>
      </ul>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
