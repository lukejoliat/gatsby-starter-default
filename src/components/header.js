import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Search from '../components/Search'

const searchIndices = [
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]
class Header extends React.Component {
  state = { menuOpen: false }
  toggleHamburger() {
    const menuOpen = !this.state.menuOpen
    this.setState({ menuOpen })
  }
  render() {
    return (
      <div
        style={{
          margin: '0 auto',
          padding: '1.45rem 1.0875rem',
          display: 'flex',
          alignItems: 'end',
        }}
      >
        <div
          className="slide-out-menu-container"
          data-open={this.state.menuOpen ? 'true' : 'false'}
        >
          <ul className="slide-out-menu">
            <li>ABOUT ME</li>
            <li>
              <Link to="/blog/">BLOG</Link>
            </li>
            <li>CONTACT</li>
          </ul>
        </div>
        <h2 style={{ margin: 0, flex: 1 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
            className="mobile-title"
          >
            LJ
          </Link>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
            className="desktop-title"
          >
            {this.props.siteTitle}
          </Link>
        </h2>
        <div
          className="menu-wrapper mobile-menu"
          onClick={() => this.toggleHamburger()}
          data-open={this.state.menuOpen ? 'true' : 'false'}
        >
          <div className="hamburger-menu" />
        </div>
        <ul className="nav-right desktop-menu">
          <li className="search">
            <Search collapse indices={searchIndices} />
          </li>
          <li>ABOUT ME</li>
          <li>
            <Link to="/blog/">BLOG</Link>
          </li>
          <li>CONTACT</li>
        </ul>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
