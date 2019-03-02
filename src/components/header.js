import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Hamburger from '../images/Hamburger.svg'
class Header extends React.Component {
  state = { windowWidth: 0 }
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
  toggleHamburger(e) {
    e.target.dataset['open'] =
      e.target.dataset['open'] === 'false'
        ? (e.target.dataset['open'] = true)
        : (e.target.dataset['open'] = false)
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
          // <img src={Hamburger} width="50px" alt="menu" />
          <div
            class="menu-wrapper"
            onClick={e => this.toggleHamburger(e)}
            data-open="false"
          >
            <div class="hamburger-menu" />
          </div>
        )}
        {this.state.windowWidth > 500 && (
          <ul className="nav-right">
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
