import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Search from '../components/Search'

const searchIndices = [
  // { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]
class Header extends React.Component {
  state = { windowWidth: 0, menuOpen: false }
  handleResize = e => {
    this.setState(prevState => {
      const windowWidth = window.innerWidth
      return {
        windowWidth,
      }
    })
  }
  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
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
          >
            {this.state.windowWidth < 500 ? 'LJ' : this.props.siteTitle}
          </Link>
        </h2>
        {this.state.windowWidth < 500 && (
          <div
            className="menu-wrapper"
            onClick={() => this.toggleHamburger()}
            data-open={this.state.menuOpen ? 'true' : 'false'}
          >
            <div className="hamburger-menu" />
          </div>
        )}
        {this.state.windowWidth > 500 && (
          <ul className="nav-right">
            <li>
              <Search collapse indices={searchIndices} />
            </li>
            <li>ABOUT ME</li>
            <li>
              <Link to="/blog/">BLOG</Link>
            </li>
            <li>CONTACT</li>
          </ul>
        )}
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
