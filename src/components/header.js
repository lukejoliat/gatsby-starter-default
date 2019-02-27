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

  render() {
    return (
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
            alignItems: 'end',
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
              {this.state.windowWidth < 500 ? 'LJ' : this.props.siteTitle}
            </Link>
          </h1>
          {this.state.windowWidth < 500 && (
            <img src={Hamburger} width="50px" alt="menu" />
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
